/*
 *
 * LoginFormPage actions
 *
 */

import {
  LOGIN_ACTION,
  MODAL_OPEN
} from './constants';

export function loginAction(userName, userPassword, language) {
  return {
    type: LOGIN_ACTION,
    userName: userName,
    userPassword: userPassword,
    language: language
  };
}

export function modalOpen(open) {
  return {
    type: MODAL_OPEN,
    open: open
  };
}