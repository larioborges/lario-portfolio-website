import type {
	Entry,
	EntryFieldTypes,
	UnresolvedLink,
} from 'contentful';
import type {
	Institution,
} from './Institution';

export interface AwardResponse {
	name: string;
	issuerWebsiteUrl: string;
	issuerName: string;
	date: string;
	tags: string[];
};

export interface AwardFields {
	name: string;
	issuer: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	date: string;
	tags: string[];
};
export interface Award {
	contentTypeId: 'award';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		issuer: EntryFieldTypes.EntryLink<Institution>;
		date: EntryFieldTypes.Symbol<string>;
		tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol<string>>;
	};
};
