import {Component} from '@angular/core';
import {DemoItem} from "./domain/demo-item";
import {DemoItemRepository} from "./domain/demo-item.repository";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [
		DemoItemRepository
	]
})
export class AppComponent {
	title = 'Data loaded through @netlogix/jsonapi';

	demoItems:DemoItem[] = [];

	constructor(demoItemRepository:DemoItemRepository) {
		demoItemRepository.findAll().then(demoItems => {
			this.demoItems = demoItems;
		});
	}
}
