import { loadRemoteEntry } from '@angular-architects/module-federation';

 Promise.all([
   loadRemoteEntry('../assets/mfe1/remoteEntry.js', 'mfe1')
   ])
 .catch(err => console.error('Error loading remote entries', err))
 .then(() => import('./bootstrap'))
 .catch(err => console.error(err));
