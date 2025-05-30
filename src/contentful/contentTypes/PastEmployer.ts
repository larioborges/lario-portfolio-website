import type {
	Document,
} from '@contentful/rich-text-types';
import type {
	Entry, EntryFieldTypes, UnresolvedLink,
} from 'contentful';
import type {
	Institution,
} from './Institution';

export interface PastEmployerFields {
	company: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	position: string;
	period: string;
	description: Document;
	descriptionHtml?: Document;
}

export interface PastEmployer {
	contentTypeId: 'pastEmployer';
	fields: {
		company: EntryFieldTypes.EntryLink<Institution>;
		position: EntryFieldTypes.Symbol<string>;
		period: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.RichText;
	};
}
