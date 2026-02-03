import React, { useRef, useEffect, useState, useCallback } from "react";
import "./carousel.css";

const CarouselItems = ({ images = [], reverse = false, speed = 30 }) => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0); // current translateX — ref so RAF doesn't re-render
  const oneSetWidthRef = useRef(0); // pixel width of exactly one original set
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  // ── how many copies we need to fill the screen seamlessly ──
  // We need at least: (viewport width / one-set width) + 2 full copies
  // We calculate this after first measure; until then render 3x as a safe minimum.
  const repeatsRef = useRef(3);
  const [repeatCount, setRepeatCount] = React.useState(3);

  // ── measure + recalculate repeats ──
  const measure = useCallback(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper || images.length === 0) return;

    // Temporarily set repeats to 1 so we can measure exactly one set
    // Actually we can just measure the first N children directly.
    const itemWidth = track.children[0]?.offsetWidth || 0; // includes margin via offsetWidth? no.
    // offsetWidth does NOT include margin. We need to grab it from computed style.
    const margin =
      parseFloat(getComputedStyle(track.children[0]).marginRight) || 0;
    const singleItem = itemWidth + margin;
    const oneSet = singleItem * images.length;

    oneSetWidthRef.current = oneSet;

    // How many full sets do we need to always fill the viewport?
    const vw = wrapper.offsetWidth;
    const needed = Math.ceil((vw + oneSet) / oneSet) + 1; // +1 safety margin
    if (needed !== repeatsRef.current) {
      repeatsRef.current = needed;
      setRepeatCount(needed);
    }
  }, [images.length]);

  // ── run measure on mount + on any resize/zoom ──
  useEffect(() => {
    measure();

    // ResizeObserver on the wrapper catches zoom changes too
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    return () => ro.disconnect();
  }, [measure, repeatCount]); // re-run when repeatCount changes so track has new children

  // ── animation loop ──
  useEffect(() => {
    const track = trackRef.current;
    if (!track || oneSetWidthRef.current === 0) return;

    lastTimeRef.current = performance.now();

    const animate = (now) => {
      const dt = (now - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = now;

      const oneSet = oneSetWidthRef.current;
      offsetRef.current += dt * speed * (reverse ? -1 : 1);

      // Wrap offset so it always stays in [0, oneSet)
      // This is the KEY: when it crosses the boundary it snaps, but because
      // the next set of images is identical, nothing visible changes.
      if (offsetRef.current >= oneSet) {
        offsetRef.current -= oneSet;
      } else if (offsetRef.current < 0) {
        offsetRef.current += oneSet;
      }

      track.style.transform = `translateX(-${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, reverse, repeatCount]); // restart loop if repeat count changes

  // ── build the repeated image array ──
  const repeated = [];
  for (let i = 0; i < repeatCount; i++) {
    repeated.push(...images);
  }

  return (
    <div className="carousel-wrapper" ref={wrapperRef}>
      <div className="carousel-track" ref={trackRef}>
        {repeated.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarouselItems;
