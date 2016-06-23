# Netlogix Angular2 jsonapi.org Demo Package

This project is an example on how to integrate jsonapi.org.
It was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.6.

The `DemoItemRepository` is meant to search for remote resources by `findAll()` and provide `DemoItem` objects to
the client.

This package brings dummy data in the `demo-data` folder. So advanced filter and include features of jsonapi.org are
not part of this example, but the data is just enough to show how to use the lib.

The `app.component` searchs for all `DemoItem` objects and displays them.

The first item has a relation in `DemoItem.buyThoseAsWell` pointing to the second one which loaded lazy by the template.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.