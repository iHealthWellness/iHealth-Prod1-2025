"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./index.module.css"
import imageTwo from "../../../../../src/Assets/Images/facts-about-nf-post.jpg"
import imageOne from "../../../../../src/Assets/Images/march-new-event.png"
import newsletterPDF from "../../../../../src/Assets/files/march-newsletter.pdf"

const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={`${styles.closeButton} SN-D-T-M-P-14`} onClick={onClose}>
          ×
        </button>
        <iframe src={pdfUrl} className={styles.pdfFrame} title="Newsletter PDF" allowFullScreen />
      </div>
    </div>
  )
}

const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.confirmationModal}>
        {/* <h3>You are about to leave the website. Do you want to continue?</h3> */}
        <p className="SN-D-T-M-P-16">You are about to leave the website. Do you want to continue?</p>
        <div className={styles.modalButtons}>
          <button className={`${styles.confirmButton} SN-D-T-M-B-16`} onClick={() => onConfirm(link)}>
            Continue
          </button>
          <button className={`${styles.cancelButton} SN-D-T-M-B-16`} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

const EventCards = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState("")
  const [exitModalOpen, setExitModalOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState("")

  const events = [
    {
      title: "Monthly Newsletter",
      date: "Last Updated | March 31st, 2025",
      time: "",
      image: newsletterPDF,
      link: newsletterPDF,
      // link: "https://lnkd.in/gpWRY_Yi",
      status: "NEWSLETTER",
    },
    {
      title: "Facts About Neurofibromatosis (NF)",
      date: "Last Updated | March 31st, 2025",
      // time: "5PM ET",
      image: imageTwo,
      link: "https://www.youtube.com/playlist?list=PLWRClAjMOjXgo6m6vrypqWbwwCcVb1NEu",
      status: "PLAYLIST",
    },
   ]

  const handleLinkClick = (e, link) => {
    e.preventDefault()
    setSelectedLink(link)
    setExitModalOpen(true)
  }

  const handleConfirmExit = (link) => {
    window.open(link, '_blank')
    setExitModalOpen(false)
  }

  const renderMedia = (event) => {
    if (event.status === "NEWSLETTER") {
      return (
        <Link to={event.link} target="_blank" onClick={(e) => handleLinkClick(e, event.link)}>
          <img src={imageOne || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} />
        </Link>
      )
    } else {  
      return (
        <Link to={event.link} target="_blank" onClick={(e) => handleLinkClick(e, event.link)}>
          <img src={event.image || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} />
        </Link>
      )
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.eventsWrapper}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                {renderMedia(event)}
                {/* <div className={`${styles.upcomingEventsHeader}`}>{event.status}</div> */}
              </div>
              <div className={styles.eventInfo}>
                <h3 className={`${styles.eventTitle} SN-D-Home-H3-24`}>{event.title}</h3>
                <p className={`${styles.eventDateTime} SN-D-T-M-Home-P-14`}>
                  <span className={styles.eventDate}>{event.date}</span> 
                  <span className={styles.eventTime}>{event.time}</span>
                </p>
                {event.status === "NEWSLETTER" ? (
                  <Link 
                    to={event.link} 
                    target="_blank" 
                    className={`${styles.registerBtn} SN-D-T-M-Home-B-16`}
                    onClick={(e) => handleLinkClick(e, event.link)}
                  >
                    View Newsletter
                  </Link>
                ) : (
                  <Link 
                    to={event.link} 
                    target="_blank" 
                    className={`${styles.registerBtn} SN-D-T-M-Home-B-16`}
                    onClick={(e) => handleLinkClick(e, event.link)}
                  >
                    View Playlist
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PDFModal isOpen={modalOpen} onClose={() => setModalOpen(false)} pdfUrl={selectedPdf} />
      <ExitConfirmationModal 
        isOpen={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        onConfirm={handleConfirmExit}
        link={selectedLink}
      />
    </div>
  )
}

export default EventCards



















// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import styles from "./index.module.css"
// import imageTwo from "../../../../../src/Assets/Images/eventimagetwo.jpg"
// import imageOne from "../../../../../src/Assets/Images/February2025NEWLETTERIMAGE.jpg"
// import newsletterPDF from "../../../../../src/Assets/files/march2025newsletter.pdf"

// const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
//   if (!isOpen) return null

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           ×
//         </button>
//         <iframe src={pdfUrl} className={styles.pdfFrame} title="Newsletter PDF" allowFullScreen />
//       </div>
//     </div>
//   )
// }

// const EventCards = () => {
//   const [modalOpen, setModalOpen] = useState(false)
//   const [selectedPdf, setSelectedPdf] = useState("")

//   const events = [
//     {
//       title: "Event : Navigating NF with  Confidence",
//       date: "25TH March, 2025",
//       time: "5PM ET",
//       image: imageTwo,
//       link: "https://forms.gle/5rkUz7XsYUvvdRPL7",
//       status: "UPCOMING EVENT",
//     },
//     {
//       title: "Newsletter:  Navigating NF with Confidence",
//       date: "February, 2025",
//       time: "VOL. 9",
//       image: newsletterPDF,
//       link: "https://lnkd.in/gpWRY_Yi",
//       status: "NEWSLETTER",
//     },
//   ]

//   const renderMedia = (event) => {
//     if (event.status === "NEWSLETTER") {
//       return <img src={imageOne || "/placeholder.svg"} 
//       onClick={() => {
//         setSelectedPdf(event.image)
//         setModalOpen(true)
//       }} 
//       alt={event.title} className={styles.eventBackground} />
//     } else {  
//       return <Link to={event.link} target="_blank">
//      <img src={event.image || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} /> </Link>
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.eventsWrapper}>
//         {events.map((event, index) => (
//           <div key={index} className={styles.eventCard}>
//             <div className={styles.cardContent}>
//               <div className={styles.imageContainer}>
//                 {renderMedia(event)}
//                 <div className={styles.upcomingEventsHeader}>{event.status}</div>
//               </div>
//               <div className={styles.eventInfo}>
//                 <h3 className={styles.eventTitle}>{event.title}</h3>
//                 <p className={styles.eventDateTime}>
//                   <span className={styles.eventDate}>{event.date}</span> |
//                   <span className={styles.eventTime}>{event.time}</span>
//                 </p>
//                 {event.status === "NEWSLETTER" ? (
//                   <button
//                     onClick={() => {
//                       setSelectedPdf(event.image)
//                       setModalOpen(true)
//                     }}
//                     className={styles.registerBtn}
//                   >
//                     View Newsletter
//                   </button>
//                 ) : (
//                   <Link to={event.link} target="_blank" className={styles.registerBtn}>
//                     Register Now
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <PDFModal isOpen={modalOpen} onClose={() => setModalOpen(false)} pdfUrl={selectedPdf} />
//     </div>
//   )
// }

// export default EventCards

