import React, { useState } from 'react';
import './DisplayProperties.css';
import { MoreInfoButton, PaginationButtons } from './Buttons';
import PropertyFetcher from '../api/PropertyFetcher';
import HouseIcon from '../images/line-md--briefcase.svg';
import PropertyData from './PropertyData';
import ToggleActiveButton from './ToggleActiveButton';
import DetailPanelWithRowClick from './DetailPanelWithRowClick';


function DisplayProperties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProperty, setActiveProperty] = useState(null);


  return (

    <div className='App'>
      <h4>Display Properties</h4>
      <DetailPanelWithRowClick/>
    </div>

  );
}

export default DisplayProperties;
