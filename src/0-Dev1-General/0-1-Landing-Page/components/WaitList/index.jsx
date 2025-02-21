import React, { useState } from 'react';
import axios from 'axios';  
import styles from './index.module.css';
import { PiBellRinging } from 'react-icons/pi';
import { BASE_URL } from 'src/environment/config';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [submittedEmails, setSubmittedEmails] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return; 

    setIsLoading(true);
    setMessage('');  

    try {
      // Check if the email has already been submitted
      if (submittedEmails.has(email)) {
        setMessage({ text: 'This email has already been submitted.', type: 'error' });
      } else {
     
        const subscribeData = { email, state };

        const response = await axios.post(`${BASE_URL}/api/v1/subscription/`, subscribeData);
        
        console.log(response);

        if (response.status === 201) {
          setSubmittedEmails((prev) => new Set(prev).add(email));
          setMessage({ text: 'Successfully submitted!', type: 'success' });
          alert("Thanks for joining the waitlist!");
        } else {
          setMessage({ text: 'Oops! Form not submitted', type: 'error' });
        }
      }
    } catch (error) {
      console.error(error);  
      setMessage({ text: 'This email has already been submitted.', type: 'error' });
    } finally {
      setIsLoading(false);
      setEmail('');  
      setState('');  
    }
  };

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <section className={styles.waitlistSection}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.contentWrapper}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <PiBellRinging className={styles.bellIcon} size={32} />
          </div>
          
          <h2 className={styles.title}>Skip the Search. Meet NF Experts</h2>
          
          <p className={styles.description}>
            Join our waitlist to get matched with specialists who understand your NF journey
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formCol}>
              <input
                type="email"
                placeholder="Your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
                disabled={isLoading}
              />
              
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={styles.select}
                required
                disabled={isLoading}
              >
                <option value="" disabled>State</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Join the Waitlist'}
            </button>

            {message && (
              <p className={`${styles.message} ${message.type === 'success' ? styles.success : styles.error}`}>
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
