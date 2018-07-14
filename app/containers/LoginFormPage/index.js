/**
 *
 * LoginFormPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginFormPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from '../../components/Header';
import HomeForm from '../../components/HomeForm';
import DownloadForm from '../../components/DownloadForm';
import FeaturesForm from '../../components/FeaturesForm';
import QuotesForm from '../../components/QuotesForm';
import Footer from '../../components/Footer'; 

import {loginAction, modalOpen} from './actions'

export class LoginFormPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  homeScroll = () => {
    this.refs.homeRef.scrollHomeComponent();
  }
  
  downloadScroll = () => {
    this.refs.downloadRef.scrollDownloadComponent();
  }

  featureScroll = () => {
    this.refs.featureRef.scrollFeatureComponent();
  }

  reviewScroll = () => {
    this.refs.reviewsRef.scrollReviewComponent();
  }
  
  render() {
    return (
        <div>
          <Header 
            downloadScrollClick={this.downloadScroll} 
            featureScrollClick={this.featureScroll} 
            reviewScrollClick={this.reviewScroll} 
            homeScrollClick={this.homeScroll}
            position={"top"} 
            header={this.props}
          />
          <HomeForm 
            ref="homeRef"
            downloadScrollClick={this.downloadScroll} 
            featureScrollClick={this.featureScroll} 
            home={this.props}
          />
          <FeaturesForm ref="featureRef" features={this.props}/>
          <QuotesForm ref="reviewsRef" quote={this.props}/>
          <DownloadForm ref="downloadRef" download={this.props}/>
          <Header 
            downloadScrollClick={this.downloadScroll} 
            featureScrollClick={this.featureScroll} 
            reviewScrollClick={this.reviewScroll} 
            homeScrollClick={this.homeScroll}
            position={"bottom"} 
            header={this.props}
          />
          <Footer footer={this.props}/>
        </div>
    );
  }
}

LoginFormPage.propTypes = {
 // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectLoginFormPage();

function mapDispatchToProps(dispatch) {
  return {
    loginAction: (userName, userPassword, language) => dispatch(loginAction(userName, userPassword, language)),
    modalOpen: (open) => dispatch(modalOpen(open)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginFormPage', reducer });
const withSaga = injectSaga({ key: 'loginFormPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginFormPage);
