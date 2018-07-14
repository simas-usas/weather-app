/*
 *
 * MainFormPage reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  open: false
});

function mainFormPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainFormPageReducer;
