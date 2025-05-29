import type { EntryFieldTypes } from 'contentful';
import type { Institution } from './Institution';

export interface Award {
	contentTypeId: 'award';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		issuer: EntryFieldTypes.EntryLink<Institution>;
		date: EntryFieldTypes.Symbol<string>;
		tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol<string>>;
	};
}
