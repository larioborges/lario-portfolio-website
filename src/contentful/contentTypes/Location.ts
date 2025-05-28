import type { EntryFieldTypes } from 'contentful';

export interface Location {
	contentTypeId: 'location';
	fields: {
		name: EntryFieldTypes.Symbol;
		googleMapsUrl?: EntryFieldTypes.Symbol;
	};
}
