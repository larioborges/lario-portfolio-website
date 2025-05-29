import type { EntryFieldTypes } from 'contentful';
import type { Institution } from './Institution';

export interface PastEmployer {
	contentTypeId: 'pastEmployer';
	fields: {
		company: EntryFieldTypes.EntryLink<Institution>;
		position: EntryFieldTypes.Symbol<string>;
		period: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.RichText;
	};
}
