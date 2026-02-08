import { Calendar, ArrowRight } from "lucide-react";
import "./events.css";

const events = [
  {
    date: { day: "1", month: "Feb" },
    title: "Thanksgiving Service",
    time: "10:00 AM",
    category: "Sunday Service",
  },
  {
    date: { day: "15", month: "Feb" },
    title: "Praise and Prayer Service",
    time: "10:00 AM",
    category: "Sunday Service",
  },
  {
    date: { day: "28", month: "Feb" },
    title: "Youth Hangout",
    time: "5:00 PM - 7:00 PM",
    category: "Youth",
  },
];

export const Events = () => {
  return (
    <section id="events" className="events">
      <div className="container events__container">
        <div className="events__header">
          <div>
            <p className="events__eyebrow">What's Happening</p>
            <h2 className="events__title">Upcoming Events</h2>
          </div>
          {/* <button className="btn btn-outline btn-md events__calendar-btn">
            <Calendar size={18} />
            View Full Calendar
          </button> */}
        </div>

        <div className="events__list">
          {events.map((event) => (
            <div key={event.title} className="events__item">
              <div className="events__date">
                <span className="events__date-day">{event.date.day}</span>
                <span className="events__date-month">{event.date.month}</span>
              </div>

              <div className="events__info">
                <span className="events__category">{event.category}</span>
                <h3 className="events__item-title">{event.title}</h3>
                <p className="events__time">{event.time}</p>
              </div>

              <ArrowRight size={20} className="events__arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
