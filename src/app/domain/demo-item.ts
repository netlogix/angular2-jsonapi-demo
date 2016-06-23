import {ResourceProxy, Property} from "@netlogix/jsonapi";

export class DemoItem extends ResourceProxy {
	public static _typeName:string = 'demo/item';

	public static _properties:any = {
		title: Property.attr('title'),
		price: Property.attr('price'),
		buyThoseAsWell: Property.hasMany('buyThoseAsWell'),
	};

	title:string;

	price:number;

	buyThoseAsWell:DemoItem[] = [];
}
