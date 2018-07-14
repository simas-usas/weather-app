/*
 *
 * LoginFormPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_ACTION,
  MODAL_OPEN
} from './constants';

const initialState = fromJS({
  userName: "",
  userPassword: "",
  language: "lt",
  open: false
});

function loginFormPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return state.set("userName", action.userName)
                  .set("userPassword", action.userPassword)
                  .set("language", action.language);
    case MODAL_OPEN:
      return state.set("open", action.open);
    default:
      return state;
  }
}

export default loginFormPageReducer;
