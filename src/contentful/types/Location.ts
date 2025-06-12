import type {
	EntryFieldTypes,
} from 'contentful';

export interface LocationFields {
	name: string;
	googleMapsUrl?: string;
}

export interface Location {
	contentTypeId: 'location';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		googleMapsUrl?: EntryFieldTypes.Symbol<string>;
	};
}
