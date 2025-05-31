import type {
	Entry, EntryFieldTypes, UnresolvedLink,
} from 'contentful';
import type {
	Location,
} from './Location';

export interface InstitutionFields {
	name: string;
	websiteUrl: string;
	location: UnresolvedLink<'Entry'> | Entry<Location, undefined, string>;
}
export interface Institution {
	contentTypeId: 'institution';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		websiteUrl: EntryFieldTypes.Symbol<string>;
		location: EntryFieldTypes.EntryLink<Location>;
	};
}
