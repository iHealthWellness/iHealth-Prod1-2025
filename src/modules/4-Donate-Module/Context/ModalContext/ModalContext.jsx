import React, { createContext, useContext, useState, useEffect  } from 'react';
import useLockBodyScroll from './LockScroll.jsx'

// Create a context for the modal state to be accessible across components
const ModalContext = createContext();

// Custom hook to provide easier access to the modal context data
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    // State to keep track of which modal is active (null means no modal is active)
    const [activeModal, setActiveModal] = useState(false);

    // Custom hook to lock body scroll when a modal is active
    useLockBodyScroll(activeModal);
// Function to open a modal by setting the activeModal state
    const openModal = () => setActiveModal(true);
    // Function to close the active modal by resetting the activeModal state to null
    const closeModal = () => setActiveModal(false);

    useEffect(() => {
        if (activeModal) {
            // Prevent scrolling on body
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling on body
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to ensure body scroll is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeModal]); // This effect runs when the activeModal state changes
    return (
        <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};