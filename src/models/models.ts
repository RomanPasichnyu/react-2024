export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: RootObjectAddress;
	phone: string;
	website: string;
	company: RootObjectCompany;
}
export interface RootObjectAddressGeo {
	lat: string;
	lng: string;
}
export interface RootObjectAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: RootObjectAddressGeo;
}
export interface RootObjectCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IPost {
	"userId": number,
	"id": number,
	"title": string,
	"body": string
}
export interface IComment {
	"postId": number,
	"id": number,
	"name": string,
	"email": string,
	"body": string
}