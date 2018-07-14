/**
*
* HomeForm
*
*/

import React from 'react';
import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/homeForm.scss';
import background from 'images/first-screen.png';
import scrollToComponent from 'react-scroll-to-component';

class HomeForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  downloadBtnClick = () => {
    this.props.downloadScrollClick();
  }    

  featureBtnClick = () => {
    this.props.featureScrollClick();
  }    
  
  scrollHomeComponent = () => {
    scrollToComponent(this.home, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div ref={(section) => { this.home = section; }} className={styles.container}>
        <img className={styles.backgroundImage} src={background}></img>
        <div className={styles.bigText}><FormattedMessage {...messages.bigText}/>
          <div className={styles.smallText}><FormattedMessage {...messages.smallText}/>
            <div className={styles.buttonContainer}>
              <Button onClick={this.downloadBtnClick} className={styles.downloadButton}><FormattedMessage {...messages.download}/></Button>
              <Button onClick={this.featureBtnClick} className={styles.featuresButton}><FormattedMessage {...messages.features}/></Button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

HomeForm.propTypes = {

};

export default HomeForm;
