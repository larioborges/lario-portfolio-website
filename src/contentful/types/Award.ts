import type { Entry, EntryFieldTypes, UnresolvedLink } from 'contentful';
import type { Institution } from './Institution';

export interface AwardResponse {
	listPriority: number;
	name: string;
	issuerWebsiteUrl: string;
	issuerName: string;
	date: string;
	tags: string[];
}

export interface AwardFields {
	listPriority: number;
	name: string;
	issuer: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	date: string;
	tags: string[];
}
export interface Award {
	contentTypeId: 'award';
	fields: {
		listPriority: EntryFieldTypes.Number;
		name: EntryFieldTypes.Symbol<string>;
		issuer: EntryFieldTypes.EntryLink<Institution>;
		date: EntryFieldTypes.Symbol<string>;
		tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol<string>>;
	};
}
