/**
 *
 * Asynchronously loads the component for QuotesForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
