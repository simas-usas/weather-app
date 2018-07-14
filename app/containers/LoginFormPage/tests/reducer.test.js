
import { fromJS } from 'immutable';
import loginFormPageReducer from '../reducer';

describe('loginFormPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginFormPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
