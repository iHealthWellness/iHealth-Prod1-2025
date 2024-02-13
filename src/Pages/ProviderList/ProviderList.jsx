import React from 'react';
import ProviderCard from './ProviderCard/ProviderCard';
import FilterPanel from './FilterPanel/FilterPanel';
import SelectedFilters from './SelectedFilters/SelectedFilters';
import Header from './Header/Header'; 


import './ProviderList.css';



// Mock data for the providers
const mockProviders = [
  {
    id: 1,
    photo: 'https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q=',
    name: 'Dr. Jasia  Mahdi',
    hospitalName: "Stanford Childrens Health; Saint Louis, MO",
    specialty: 'Neurofibroma and Operative Plexiform Removal  Division of Adult Plastic Surgery, Department of Surgery',
    distance: "8.2mi",
  address: "Lucile Packard Childrens Hospital Stanford, 1 Childrens Pl, Saint Louis, MO 63110",
    phone: '706-446-5455',
    lastUpdate: 'June 24. 2022',
    Education: 'Georgia Cancer Center/Children’s Hospital of Georgia'
  },
  {
    id: 1,
    photo: 'https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q=',
    name: 'Dr. Jasia  Mahdi',
    hospitalName: "Stanford Childrens Health; Saint Louis, MO",
    specialty: 'Neurofibroma and Operative Plexiform Removal  Division of Adult Plastic Surgery, Department of Surgery',
    distance: "8.2mi",
    address: "Lucile Packard Childrens Hospital Stanford, 1 Childrens Pl, Saint Louis, MO 63110",
    phone: '706-446-5455',
    lastUpdate: 'June 24. 2022',
    Education: 'Georgia Cancer Center/Children’s Hospital of Georgia'
  },
  {
    id: 1,
    photo: 'https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q=',
    name: 'Dr. Jasia  Mahdi',
    hospitalName: "Stanford Childrens Health; Saint Louis, MO",
    specialty: 'Neurofibroma and Operative Plexiform Removal  Division of Adult Plastic Surgery, Department of Surgery',
    distance: "8.2mi",
    address: "Lucile Packard Childrens Hospital Stanford, 1 Childrens Pl, Saint Louis, MO 63110",
    phone: '706-446-5455',
    lastUpdate: 'June 24. 2022',
    Education: 'Georgia Cancer Center/Children’s Hospital of Georgia'
  },
];



const ProviderList = () => {
  return (
    <div>
      <Header />
      <FilterPanel />
      <div className="provider-list-container">
        <div className="provider-list-main">
          <SelectedFilters />
          <div className="provider-cards-container">
            {mockProviders.map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};




export default ProviderList;