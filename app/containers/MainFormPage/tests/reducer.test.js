
import { fromJS } from 'immutable';
import mainFormPageReducer from '../reducer';

describe('mainFormPageReducer', () => {
  it('returns the initial state', () => {
    expect(mainFormPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
