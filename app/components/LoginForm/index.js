/**
*
* LoginForm
*
*/

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ModalForm from '../ModalForm/Loadable'

import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormattedMessage } from 'react-intl';
import './styles/loginForm.scss';

// import styled from 'styled-components';

import messages from './messages';

function LoginForm(props){

  const changeLang = (e) => {
    let name = document.getElementsByName("name")[0].value;
    let password = document.getElementsByName("password")[0].value;
    props.login.loginAction(name, password, e.value);
  }

  const validate = (e) => {
    let name = document.getElementsByName("name")[0].value;
    let password = document.getElementsByName("password")[0].value;

    if(!name && !password) {
      props.login.modalOpen(!props.open);   
    }
    props.login.loginAction(name, password, props.login.language);
  }

  const options = [
    {value: "lt", label: "Lietuvių"}, 
    {value: "en", label: "Enlgish"}
  ]

  return(
    <div>
      <ModalForm propLogin={props.login} />
      <Paper elevation={4} className="paperForm">
        <FormGroup>
          <TextField 
            label={<FormattedMessage {...messages.userName}/>}
            name = 'name'
            className = "inputText"
          />
          <TextField 
            label={<FormattedMessage {...messages.userPassword}/>}
            name = 'password'
            type="password"
            className = "inputText"
          />
        </FormGroup>
        <Dropdown options={options}  value={options[props.login.language == "lt" ? 0 : 1 ]} className="dropDown"
        onChange={(e) => changeLang(e)}/>
        <Button variant="raised" color="primary" className="button"
          onClick={(e) => validate(e)}
        >
          Login
        </Button>
        <FormGroup>
          <div className="checkBox">
            <FormControlLabel 
              control={
                <Checkbox value="checked" color="primary" />
              }
              label="Remember me"
            />
          </div>
        </FormGroup>

      </Paper>
    </div>
  );
}

LoginForm.propTypes = {

};

export default LoginForm;
