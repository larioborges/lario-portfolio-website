import type { EntryFieldTypes } from 'contentful';
import type { Location } from './Location';

export interface Institution {
	contentTypeId: 'institution';
	fields: {
		name: EntryFieldTypes.Symbol;
		websiteUrl: EntryFieldTypes.Symbol;
		location: EntryFieldTypes.EntryLink<Location>;
	};
}
