/**
 *
 * Asynchronously loads the component for LoginFormPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
