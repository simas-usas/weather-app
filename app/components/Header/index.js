/**
*
* Header
*
*/

import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/header.scss';
import Facebook from 'images/facebook.svg';
import Instagram from 'images/instagram.svg';
import Twitter from 'images/twitter.svg';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  homeBtnClick = () => {
    this.props.homeScrollClick();
  }  
  
  downloadBtnClick = () => {
    this.props.downloadScrollClick();
  }  
 
  featureBtnClick = () => {
    this.props.featureScrollClick();
  }   

  reviewBtnClick = () => {
    this.props.reviewScrollClick();
  }    

  render() {
    const componentClass = cx('headlineGlobal', {
      "headlineGlobalTop": this.props.position === 'top',
      "headlineGlobalBottom": this.props.position === 'bottom'
    });

    const svgClass = cx('socialImage', {
      "socialImageTop": this.props.position === 'top',
      "socialImageBottom": this.props.position === 'bottom'
    });

    const buttonClass = cx({
      "buttonTop": this.props.position === 'top',
      "buttonBottom": this.props.position === 'bottom'
    });

    const headlineClassFun = cx({
      "headlineTop": this.props.position === 'top',
      "headlineBottomFun": this.props.position === 'bottom'
    });

    const headlineClassWeather = cx({
      "headlineTop": this.props.position === 'top',
      "headlineBottomWeather": this.props.position === 'bottom'
    });

    return (
        <div className={componentClass} >
          <div className={styles.headlineContainer}>
            <span className={headlineClassFun}> <FormattedMessage {...messages.headlineFun}/> </span> 
            <span className={headlineClassWeather}> <FormattedMessage {...messages.headlineWeather}/> </span> 
          </div>
          <div className={styles.buttonContainer}>
          <Button onClick={this.homeBtnClick} className={buttonClass}><FormattedMessage {...messages.home}/></Button>
          <Button onClick={this.featureBtnClick} className={buttonClass}><FormattedMessage {...messages.features}/></Button>
          <Button onClick={this.reviewBtnClick} className={buttonClass}><FormattedMessage {...messages.reviews}/></Button>
          <Button onClick={this.downloadBtnClick} className={buttonClass}><FormattedMessage {...messages.download}/></Button>
          </div>
          <div className={styles.socialButton}>
            <IconButton><Facebook className={svgClass}/></IconButton >
            <IconButton ><Instagram className={svgClass}/></IconButton >
            <IconButton ><Twitter className={svgClass}/></IconButton >
          </div>
        </div>

    );
  }
}

Header.propTypes = {

};

export default Header;
