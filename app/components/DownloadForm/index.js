/**
*
* DownloadForm
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/downloadForm.scss';
import downloadScreen from 'images/download-screen.png';
import google from 'images/google-play.png';
import apple from 'images/appstore.png';
import scrollToComponent from 'react-scroll-to-component';

class DownloadForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  scrollDownloadComponent = () => {
    scrollToComponent(this.download, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }
  
  render() {
    return (
      <div ref={(section) => { this.download = section; }} className={styles.container}>
        <img className={styles.backgroundImage} src={downloadScreen}/>
        <div className={styles.bigText}><FormattedMessage {...messages.bigText}/>
          <div className={styles.smallText}><FormattedMessage {...messages.smallText}/>
            <div className={styles.buttonContainer}>
              <img className={styles.googleButton} src={google}/> 
              <img className={styles.appleButton} src={apple}/> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DownloadForm.propTypes = {

};

export default DownloadForm;
