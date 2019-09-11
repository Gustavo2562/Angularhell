// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig : { 
    apiKey: "AIzaSyCx4eNBHKH1nG9HjjTgIU6EdWJvOGvMwYU",
    authDomain: "loja-angularmax.firebaseapp.com",
    databaseURL: "https://loja-angularmax.firebaseio.com",
    projectId: "loja-angularmax",
    storageBucket: "",
    messagingSenderId: "854927933293",
    appId: "1:854927933293:web:e56f46d2a0e70ce02e6464"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
