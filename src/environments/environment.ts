// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDpRtGU5laAKheqxg88XlUk9lRMv6Ohpng',
    authDomain: 'emprestei-fb.firebaseapp.com',
    databaseURL: 'https://emprestei-fb.firebaseio.com',
    projectId: 'emprestei-fb',
    storageBucket: 'emprestei-fb.appspot.com',
    messagingSenderId: '623676604903'
  }
};
