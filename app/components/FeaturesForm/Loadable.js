/**
 *
 * Asynchronously loads the component for FeaturesForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
