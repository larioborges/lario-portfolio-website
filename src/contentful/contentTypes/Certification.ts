import type { EntryFieldTypes } from 'contentful';
import type { Institution } from './Institution';

export interface Certification {
	contentTypeId: 'certification';
	fields: {
		certification: EntryFieldTypes.Symbol;
		institution: EntryFieldTypes.EntryLink<Institution>;
		timePeriod: EntryFieldTypes.Symbol;
		description: EntryFieldTypes.RichText;
	};
}
