import React from 'react';
import './ProviderCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCheckCircle, faPhone  } from '@fortawesome/free-solid-svg-icons';

const ProviderCard = ({ provider }) => {
  return (
    <div className='container'>
    <div className="provider-card">
      <div className="provider-photo">
        <img src={provider.photo} alt={provider.name} />
      </div>
      <div className="provider-info">
        <div className="provider-name-section">
          <h2 className="provider-name">{provider.name}, MD</h2>
          <div className="provider-rating">
            {/* Add logic for dynamic rating here, for now, it's static */}
            <span className="stars">★★★★☆</span>
          </div>
          <div className="provider-hospital">{provider.hospitalName}</div>

          <div className="provider-status">
            <span className="accepting-new">
              <FontAwesomeIcon icon={faCheckCircle} color="#0B99FF" /> Accepting New Patients
            </span>
          </div>
          <div className="provider-address">
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#0B99FF" style={{ marginRight: '5px' }} />
            <span className="distance">{provider.distance}</span>
            {provider.address}
          </div>
          <h3 className="provider-specialty-title">Practice or Provider's Specialty</h3>
          <div className="provider-specialty">
            {provider.specialty}
          </div>
          {/* <h3 className="Education">{provider.Education}</h3> */}

        </div>
        <div className="provider-contact">
  <a href={`tel:${provider.phone}`} className="provider-phone">
    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} color="#ffffff" />
    {provider.phone}
  </a>
</div>
      </div>
      <div className="provider-footer">
        Last Data Update: {provider.lastUpdate}
      </div>
    </div>
    </div>
  );
};

export default ProviderCard;
