import React from 'react';
import './AppDownload.css';
import {assets} from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download<br/>Online Medicine App</p>
      <div className='app-download-platforms'>
      <img className='store-icon' src={assets.googleplayicon} alt="Google Play" />
      <img className='store-icon1' src={assets.appstoreicon} alt=" App Store" />
    </div>
    </div>
  );
}

export default AppDownload;
