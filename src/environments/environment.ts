/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBP2hcETIRSFvvFhgMabmDZ-RjShqDlX70',
    authDomain: 'psicologapp-84.firebaseapp.com',
    databaseURL: 'https://psicologapp-84.firebaseio.com',
    projectId: 'psicologapp-84',
    storageBucket: 'psicologapp-84.appspot.com',
    messagingSenderId: '721791562259',
  },
  firebaseTesting: {
    apiKey: 'AIzaSyDVbWeM5isevTOPK5TEyGjCZlZqulVUjJQ',
    authDomain: 'psicologapp-testing.firebaseapp.com',
    databaseURL: 'https://psicologapp-testing.firebaseio.com',
    projectId: 'psicologapp-testing',
    storageBucket: 'psicologapp-testing.appspot.com',
    messagingSenderId: '236252094290',
  },
};
