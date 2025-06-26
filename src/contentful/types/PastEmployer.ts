import type { Document } from '@contentful/rich-text-types';
import type { Entry, EntryFieldTypes, UnresolvedLink } from 'contentful';
import type { Institution } from './Institution';

export interface PastEmployerResponse {
	listPriority: number;
	companyName: string;
	companyWebsiteUrl: string;
	companyLocation: string;
	companyGoogleMapsUrl: string | undefined;
	period: string;
	position: string;
	description: string;
}
export interface PastEmployerFields {
	listPriority: number;
	company: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	position: string;
	period: string;
	description: Document;
}

export interface PastEmployer {
	contentTypeId: 'pastEmployer';
	fields: {
		listPriority: EntryFieldTypes.Number;
		company: EntryFieldTypes.EntryLink<Institution>;
		position: EntryFieldTypes.Symbol<string>;
		period: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.RichText;
	};
}
