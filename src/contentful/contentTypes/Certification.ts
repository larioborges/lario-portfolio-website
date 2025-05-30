import type {
	EntryFieldTypes, 
} from 'contentful';
import type {
	Institution, 
} from './Institution';

export interface Certification {
	contentTypeId: 'certification';
	fields: {
		certification: EntryFieldTypes.Symbol<string>;
		institution: EntryFieldTypes.EntryLink<Institution>;
		timePeriod: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.RichText;
	};
}
