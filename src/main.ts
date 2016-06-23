import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {HTTP_PROVIDERS, Http, RequestOptions} from "@angular/http";
import {ConsumerBackend} from "@netlogix/jsonapi";
import {AppComponent, environment} from './app/';

if (environment.production) {
	enableProdMode();
}

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	provide(ConsumerBackend, {
		useFactory: (http:Http, requestOptions:RequestOptions) => {
			let consumerBackend = new ConsumerBackend(http, requestOptions);
			return consumerBackend;
		},
		deps: [Http, RequestOptions]
	})
]);
