import type { Document } from '@contentful/rich-text-types';
import type { Entry, EntryFieldTypes, UnresolvedLink } from 'contentful';
import type { Institution } from './Institution';

export interface CertificationResponse {
	listPriority: number;
	institutionName: string;
	institutionWebsiteUrl: string;
	institutionLocation: string;
	institutionGoogleMapsUrl: string | undefined;
	timePeriod: string;
	certification: string;
	description: string;
}
export interface CertificationFields {
	listPriority: number;
	certification: string;
	institution: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	timePeriod: string;
	description: Document;
}

export interface Certification {
	contentTypeId: 'certification';
	fields: {
		listPriority: EntryFieldTypes.Number;
		certification: EntryFieldTypes.Symbol<string>;
		institution: EntryFieldTypes.EntryLink<Institution>;
		timePeriod: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.RichText;
	};
}
