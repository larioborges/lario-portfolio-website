import type { Entry, EntryFieldTypes, UnresolvedLink } from 'contentful';
import type { Location } from './Location';

export interface InstitutionResponse {
	insitutionKey?: string;
	name: string;
	websiteUrl: string;
	location: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
}

export interface InstitutionFieldValuesWithoutLoication {
	name: string;
	websiteUrl?: string;
}

export interface InstitutionFields
	extends InstitutionFieldValuesWithoutLoication {
	location: EntryFieldTypes.EntryLink<Location>;
}

export interface Institution {
	contentTypeId: 'institution';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		websiteUrl: EntryFieldTypes.Symbol<string>;
		location: EntryFieldTypes.EntryLink<Location>;
	};
}
