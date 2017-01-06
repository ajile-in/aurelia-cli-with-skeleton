import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
    constructor(http) {
        this.message = 'Hello World! - Users';

        this.http = http;

        this.users = [];
    }

    async activate() {
        // ensure fetch is polyfilled before we create the http client
        try {
            await fetch;
            const http = this.http = this.getHttpClient();

            http.configure(config => {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://localhost:3000/');
            });

            const response = await http.fetch('users');
            this.users = await response.json();
        } catch (err) {
            console.log("***** Error : " + err);
        }
    }
}