import type { Institution } from '@/contentful/contentTypes/Institution';
import type { EntryFieldTypes } from 'contentful';

export interface Certification {
	contentTypeId: 'certification';
	fields: {
		certification: EntryFieldTypes.Symbol;
		institution: EntryFieldTypes.EntryLink<Institution>;
		timePeriod: EntryFieldTypes.Symbol;
		description: EntryFieldTypes.RichText;
	};
}
