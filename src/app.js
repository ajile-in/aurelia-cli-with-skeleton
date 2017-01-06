import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
  constructor(http) {
    this.message = 'Hello World! - Users';
    this.http = http;
    this.users = [];

    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/');
    });
  }

  activate() {
    // ensure fetch is polyfilled before we create the http client
    try {
      //await fetch;
      const response = this.http.fetch('users')
        .then(response => response.json())
        .then(users => {
          this.users = users;
          console.log("***** SUCCESS : ");
        });

    } catch (err) {
      console.log("***** Error : " + err);
    }
  }
}
