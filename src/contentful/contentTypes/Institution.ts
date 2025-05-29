import type { EntryFieldTypes } from 'contentful';
import type { Location } from './Location';

export interface Institution {
	contentTypeId: 'institution';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		websiteUrl: EntryFieldTypes.Symbol<string>;
		location: EntryFieldTypes.EntryLink<Location>;
	};
}
