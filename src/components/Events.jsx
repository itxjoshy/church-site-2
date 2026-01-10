import { Calendar, ArrowRight } from "lucide-react";
import "./events.css";

const events = [
  {
    date: { day: "12", month: "Jan" },
    title: "Women's Prayer Breakfast",
    time: "8:00 AM",
    category: "Women's Ministry",
  },
  {
    date: { day: "19", month: "Jan" },
    title: "Youth Winter Retreat",
    time: "All Weekend",
    category: "Youth",
  },
  {
    date: { day: "26", month: "Jan" },
    title: "Community Outreach Day",
    time: "9:00 AM - 2:00 PM",
    category: "Outreach",
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
          <button className="btn btn-outline btn-md events__calendar-btn">
            <Calendar size={18} />
            View Full Calendar
          </button>
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
