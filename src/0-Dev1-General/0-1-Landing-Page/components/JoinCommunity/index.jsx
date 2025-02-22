import axios from 'axios';  
import styles from "./index.module.css"; 
import JoinCommunityTeam from "src/Assets/Images/join-community-team.png";
import JoinCommunity from "src/Assets/Images/join-community.png";
import { BASE_URL } from 'src/environment/config';
import { useState } from 'react';
import { BsXCircle } from 'react-icons/bs';
import { CheckCircle } from '@mui/icons-material';


const Joincommunity = () => {

  const [email, setEmail] = useState('');
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
        setMessage({ text: 'Oops! Already subscribed!', type: 'error' });
      } else {
     
        const subscribeData = { email};

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
      setMessage({ text: 'Oops! Already subscribed!', type: 'error' });
    } finally {
      setIsLoading(false);
      setEmail('');   
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <img src={JoinCommunityTeam} alt="Join Community Team" />
      </div>
      <div className={styles.layout}>
        <div className={styles.textContainer}>
          <h2 className="SN-D-H2-36">Join our community</h2>
          <p className="SN-D-T-M-P-20">
            Explore how we can support your journey toward better health, and join our community of individuals committed to simplifying the care of complex conditions.</p>
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
            </div>

            {message && (
              <div className={styles.messageContainer}>
              <span className={styles.spanIcon}> 
              {message.type === 'success' ? <CheckCircle/> : <BsXCircle/>}</span>
              <p className={`${styles.message} ${message.type === 'success' ? styles.success : styles.error}`}>
                {message.text}
              </p>
              </div>
            )}

            <button  type="submit" disabled={isLoading} className={`${styles.joinButton} SN-D-T-M-P-20`}>
              {isLoading ? 'Submitting...' : 'Join Now'}
              </button> 
              </form>
        </div>
      </div>
      <div className={styles.layout}>
        <img src={JoinCommunity} alt="Join Community Image 4" />
      </div>
    </div>
  );
};

export default Joincommunity;
