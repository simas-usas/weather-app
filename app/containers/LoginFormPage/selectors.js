import { createSelector } from 'reselect';

/**
 * Direct selector to the loginFormPage state domain
 */
const selectLoginFormPageDomain = (state) => state.get('loginFormPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginFormPage
 */

const makeSelectLoginFormPage = () => createSelector(
  selectLoginFormPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectLoginFormPage;
export {
  selectLoginFormPageDomain,
};
