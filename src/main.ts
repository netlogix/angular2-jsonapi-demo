import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {HTTP_PROVIDERS, Http, RequestOptions} from "@angular/http";
import {ConsumerBackend, Uri, Type} from "@netlogix/jsonapi";
import {AppComponent, environment} from './app/';
import {DemoItem} from './app/domain/demo-item';

if (environment.production) {
	enableProdMode();
}

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	provide(ConsumerBackend, {
		useFactory: (http:Http, requestOptions:RequestOptions) => {
			let consumerBackend = new ConsumerBackend(http, requestOptions);
			consumerBackend.addType(new Type(
				DemoItem._typeName,
				DemoItem,
				DemoItem._properties
			));
			consumerBackend.registerEndpointsByEndpointDiscovery(new Uri('/demo-data/.well-known/endpoint-discovery'));
			return consumerBackend;
		},
		deps: [Http, RequestOptions]
	})
]);
