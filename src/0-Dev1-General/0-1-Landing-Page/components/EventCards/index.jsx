import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import imageOne from '../../../../../src/Assets/Images/eventimageone.png';
import imageTwo from '../../../../../src/Assets/Images/eventimagetwo.png';


const EventCards = () => {
  const events = [
    {
      title: "Principles of Migraine Management",
      date: "25TH Feb, 2025",
      time: "1PM ET",
      image: imageOne,
      link: "https://forms.gle/CMLiLetqs2wh8D6H9",
    },
    {
      title: "Navigating NF with Confidence",
      date: "25TH March, 2025",
      time: "5PM ET",
      image: imageTwo,
      link: "https://forms.gle/5rkUz7XsYUvvdRPL7",
    }, 
  ];

  return (
    <div className={styles.container}>
      <div className={styles.eventsWrapper}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <img src={event.image || "/placeholder.svg"} alt="" className={styles.eventBackground} />
                <div className={styles.upcomingEventsHeader}>UPCOMING EVENTS</div>
              </div>
              <div className={styles.eventInfo}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDateTime}>
                  <span className={styles.eventDate}>{event.date}</span> | 
                  <span className={styles.eventTime}>{event.time}</span>
                </p>
                <Link to={event.link} target='_blank' className={styles.registerBtn}>Register Now</Link>
               
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;