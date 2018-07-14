/**
*
* Footer
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/footer.scss';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.line}></div>
        <div className={styles.copyright}><FormattedMessage {...messages.copyrightText}/></div>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
