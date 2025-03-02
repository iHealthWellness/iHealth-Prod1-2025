"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./index.module.css"
import imageTwo from "../../../../../src/Assets/Images/eventimagetwo.jpg"
import imageOne from "../../../../../src/Assets/Images/February2025NEWLETTERIMAGE.jpg"
import newsletterPDF from "../../../../../src/Assets/files/march2025newsletter.pdf"

const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <iframe src={pdfUrl} className={styles.pdfFrame} title="Newsletter PDF" allowFullScreen />
      </div>
    </div>
  )
}

const EventCards = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState("")

  const events = [
    {
      title: "Event : Navigating NF with  Confidence",
      date: "25TH March, 2025",
      time: "5PM ET",
      image: imageTwo,
      link: "https://forms.gle/5rkUz7XsYUvvdRPL7",
      status: "UPCOMING EVENT",
    },
    {
      title: "Newsletter:  Navigating NF with Confidence",
      date: "February, 2025",
      time: "VOL. 9",
      image: newsletterPDF,
      link: "https://forms.gle/5rkUz7XsYUvvdRPL7",
      status: "NEWSLETTER",
    },
  ]

  const renderMedia = (event) => {
    if (event.status === "NEWSLETTER") {
      return <img src={imageOne || "/placeholder.svg"} 
      onClick={() => {
        setSelectedPdf(event.image)
        setModalOpen(true)
      }} 
      alt={event.title} className={styles.eventBackground} />
    } else {  
      return <Link to={event.link} target="_blank">
     <img src={event.image || "/placeholder.svg"} alt={event.title} className={styles.eventBackground} /> </Link>
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
                <div className={styles.upcomingEventsHeader}>{event.status}</div>
              </div>
              <div className={styles.eventInfo}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDateTime}>
                  <span className={styles.eventDate}>{event.date}</span> |
                  <span className={styles.eventTime}>{event.time}</span>
                </p>
                {event.status === "NEWSLETTER" ? (
                  <button
                    onClick={() => {
                      setSelectedPdf(event.image)
                      setModalOpen(true)
                    }}
                    className={styles.registerBtn}
                  >
                    View Newsletter
                  </button>
                ) : (
                  <Link to={event.link} target="_blank" className={styles.registerBtn}>
                    Register Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PDFModal isOpen={modalOpen} onClose={() => setModalOpen(false)} pdfUrl={selectedPdf} />
    </div>
  )
}

export default EventCards

