/**
*
* FeaturesForm
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/featuresForm.scss';
import iconColors from 'images/icon-colors.png';
import iconUsability from 'images/icon-usability.png';
import iconParallax from 'images/icon-parallax.png';
import scrollToComponent from 'react-scroll-to-component';

const FeatureTemplate = props => {
  return (
    <div className={props.styleName}>
      <div className={styles.icon}><img src={props.imageSrc}/></div>
      <div className={styles.description}> 
        <div className={styles.descriptionTitle}><FormattedMessage {...props.title}/></div>
        <div className={styles.descriptionText}><FormattedMessage {...messages.description}/></div>
      </div>
    </div>
  );
};

class FeaturesForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  scrollFeatureComponent = () => {
    scrollToComponent(this.feature, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }
  
  render() {
    return (
      <div ref={(section) => { this.feature = section; }}>
        <div className={styles.mainTitle}>
        <FormattedMessage {...messages.title}/>
          <div className={styles.subtitle}>
            <FormattedMessage {...messages.subtitle}/>
          </div>
        </div>

        <div className={styles.container}>
          <FeatureTemplate styleName={styles.usabilitySection} imageSrc={iconUsability} title={messages.usability}/>
          <FeatureTemplate styleName={styles.parallaxSection} imageSrc={iconParallax} title={messages.parallax}/>
          <FeatureTemplate styleName={styles.colorsSection} imageSrc={iconColors} title={messages.colors}/>
        </div>
      </div>
    );
  }
}

FeaturesForm.propTypes = {

};

export default FeaturesForm;
