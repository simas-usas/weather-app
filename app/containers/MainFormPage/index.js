/**
 *
 * MainFormPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainFormPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from '../../components/Header';
import HomeForm from '../../components/HomeForm';
import DownloadForm from '../../components/DownloadForm';
import FeaturesForm from '../../components/FeaturesForm';
import QuotesForm from '../../components/QuotesForm';
import Footer from '../../components/Footer'; 

export class MainFormPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

MainFormPage.propTypes = {
 // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectMainFormPage();

function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mainFormPage', reducer });
const withSaga = injectSaga({ key: 'mainFormPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainFormPage);
