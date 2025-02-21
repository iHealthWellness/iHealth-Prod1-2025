// import React from 'react';
// import styles from './index.module.css';

// const EventCards = () => {
//   const events = [
//     {
//       title: "Principles of Migraine Management",
//       date: "24TH Feb, 2025",
//       time: "1PM ET",
//       image: "/src/Assets/Images/eventimageone.png"
//     },
//     {
//       title: "Navigating NF with Confidence",
//       date: "24TH Feb, 2025",
//       time: "1PM ET",
//       image: "/src/Assets/Images/eventimagetwo.png"
//     }
//   ];

//   return (
//     <div className={styles.container}>
//       <div class={styles.calloutBox}>
//         <div class={styles.strip}></div>
//         <div class={styles.strip2}></div>
//         <p className='SN-D-P-20'>
//           Upcoming Events
//         </p>
//       </div>
//       <div className={styles.eventsSlider}>
//         <div className={styles.eventsWrapper}>
//           {events.map((event, index) => (
//             <div key={index} className={styles.eventCard}>
//               <img src={event.image || "/placeholder.svg"} alt="" className={styles.eventBackground} />
//               <div className={styles.eventContent}>
//                 <h3 className={styles.eventTitle}>{event.title}</h3>
//                 <p className={styles.eventDate}>{`${event.date} • ${event.time}`}</p>
//                 <button className={styles.registerBtn}>Register Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className={styles.sliderDots}>
//           <span className={`${styles.dot} ${styles.active}`}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCards;






// import React from 'react';
// import styles from './index.module.css';

// const EventCards = () => {

//   const events = [
//           {
//             title: "Principles of Migraine Management",
//             date: "24TH Feb, 2025",
//             time: "1PM ET",
//             image: "/src/Assets/Images/eventimageone.png"
//           },
//           {
//             title: "Navigating NF with Confidence",
//             date: "24TH Feb, 2025",
//             time: "1PM ET",
//             image: "/src/Assets/Images/eventimagetwo.png"
//           }
//   ];
  

//   return (
//     <div className={styles.container}>
//       <div class={styles.calloutBox}>
//            <div class={styles.strip}></div>
//            <div class={styles.strip2}></div>
//            <p className='SN-D-P-20'>
//              Upcoming Events
//            </p>
//          </div>
//       <div className={styles.eventsWrapper}>
//         {events.map((event, index) => (
//           <div key={index} className={styles.eventCard}>
//             <div className={styles.cardContent}>
//               <div className={styles.upcomingEventsHeader}>UPCOMING EVENT</div>
//               <div className={styles.membershipInfo}>
//               </div>
//               <img src={event.image || "/placeholder.svg"} alt="" className={styles.eventBackground} />
//               <div className={styles.eventInfo}>
//                 <h3 className={styles.eventTitle}>{event.title}</h3>
//                 <p className={styles.eventDateTime}>
//                   <span className={styles.eventDate}>{event.date}</span>
//                   <span className={styles.eventTime}>{event.time}</span>
//                 </p>
//                 <button className={styles.registerBtn}>Register Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.sliderDots}>
//         <span className={`${styles.dot} ${styles.active}`}></span>
//         <span className={styles.dot}></span>
//         <span className={styles.dot}></span>
//       </div>
//     </div>
//   );
// };

// export default EventCards;









import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const EventCards = () => {
  const events = [
    {
      title: "Principles of Migraine Management",
      date: "24TH Feb, 2025",
      time: "1PM ET",
      image: "/src/Assets/Images/eventimageone.png",
      link: "https://forms.gle/CMLiLetqs2wh8D6H9",
    },
    {
      title: "Navigating NF with Confidence",
      date: "26TH Feb, 2025",
      time: "2PM ET",
      image: "/src/Assets/Images/eventimageTwo.png",
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