/**
*
* ModalForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles/modalForm.scss';

import Portal from '@material-ui/core/Portal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//import swal from 'sweetalert2';

class ModalForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  container = null;

  handleClose = () => {
    this.props.propLogin.modalOpen(!this.props.propLogin.open);
  };

  render() {
  //  const SweetAlert = withSwalInstance(swal);

    return ( 
    
      <div>
        <Portal container={this.container}>
          <Dialog
            open={this.props.propLogin.open}
            onClose={(e) => this.handleClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Missing credentials"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please enter username and password.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={(e) => this.handleClose()} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Portal>
      </div>
    );
  }
}

ModalForm.propTypes = {

};

export default ModalForm;
