import type {
	EntryFieldTypes, 
} from 'contentful';

export interface Location {
	contentTypeId: 'location';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		googleMapsUrl?: EntryFieldTypes.Symbol<string>;
	};
}
