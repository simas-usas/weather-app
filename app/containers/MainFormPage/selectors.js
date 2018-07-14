import { createSelector } from 'reselect';

/**
 * Direct selector to the mainFormPage state domain
 */
const selectMainFormPageDomain = (state) => state.get('mainFormPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainFormPage
 */

const makeSelectMainFormPage = () => createSelector(
  selectMainFormPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMainFormPage;
export {
  selectMainFormPageDomain,
};
