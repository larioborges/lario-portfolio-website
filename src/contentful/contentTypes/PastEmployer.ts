import type { EntryFieldTypes } from 'contentful';
import type { Institution } from './Institution';

export interface PastEmployerFields {
	company: EntryFieldTypes.EntryLink<Institution>;
	position: EntryFieldTypes.Symbol;
	period: EntryFieldTypes.Symbol;
	description: EntryFieldTypes.RichText;
}

export interface PastEmployer {
	contentTypeId: 'pastEmployer';
	fields: PastEmployerFields;
}
