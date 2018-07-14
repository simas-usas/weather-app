/**
 *
 * Asynchronously loads the component for MainFormPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
