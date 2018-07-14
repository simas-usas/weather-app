/**
*
* QuotesForm
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/quotesForm.scss';
import scrollToComponent from 'react-scroll-to-component';

const QuoteTemplate = props => {
  return (
    <div>
      <h3 className={styles.quoteUpper}>“</h3>
      <div><FormattedMessage {...props.quoteText}/></div>
      <div className={styles.author}><FormattedMessage {...props.quoteAuthor}/></div>
      <h3 className={styles.quoteBottom}>”</h3>
    </div>
  );
};


class QuotesForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  scrollReviewComponent = () => {
    scrollToComponent(this.review, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div ref={(section) => { this.review = section; }}>
        <div className={styles.mainTitle}>
        <FormattedMessage {...messages.title}/>
          <div className={styles.subtitle}>
            <FormattedMessage {...messages.subtitle}/>
          </div>
        </div>
          
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <QuoteTemplate quoteText={messages.firstQuote} quoteAuthor={messages.firstAuthor}/>
            <QuoteTemplate quoteText={messages.thirdQuote} quoteAuthor={messages.thirdAuthor}/>
          </div>
          <div className={styles.rightSection}>
            <QuoteTemplate quoteText={messages.secondQuote} quoteAuthor={messages.secondAuthor}/>
            <QuoteTemplate quoteText={messages.fourthQuote} quoteAuthor={messages.fourthAuthor}/>
          </div>
        </div>
      
      </div>
    );
  }
}

QuotesForm.propTypes = {

};

export default QuotesForm;
