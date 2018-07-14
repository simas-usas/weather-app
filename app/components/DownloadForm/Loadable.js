/**
 *
 * Asynchronously loads the component for DownloadForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
