import {Injectable} from '@angular/core';
import {ResourceProxyRepository, ConsumerBackend} from "@netlogix/jsonapi";
import {DemoItem} from "./demo-item";

@Injectable()
export class DemoItemRepository extends ResourceProxyRepository {
	protected resource = DemoItem;

	constructor(protected _consumerBackend:ConsumerBackend) {
		super(_consumerBackend);
	}

	get items():Promise<DemoItem[]> {
		return this.findAll({}, []);
	}

	findAll(filter?:{[key:string]:any;}, include?:string[]):Promise<DemoItem[]> {
		return super.findAll(filter, include);
	}

	findOne(filter?:{[key:string]:any;}, include?:string[]):Promise<DemoItem> {
		return super.findOne(filter, include);
	}

	findByIdentifier(identifier:string, include:string[]):Promise<DemoItem> {
		return super.findByIdentifier(identifier, include);
	}
}
