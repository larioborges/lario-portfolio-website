import type {
	Entry,
	EntryFieldTypes,
	UnresolvedLink,
} from 'contentful';
import type {
	Document,
} from '@contentful/rich-text-types';
import type {
	Institution,
} from './Institution';

export interface CertificationResponse {
	institutionName: string,
	institutionWebsiteUrl: string,
	institutionLocation: string,
	institutionGoogleMapsUrl: string | undefined,
	timePeriod: string,
	certification: string,
	description: string,
};
export interface CertificationFields {
	certification: string;
	institution: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	timePeriod: string;
	description: Document;
};

export interface Certification {
	contentTypeId: 'certification';
	fields: {
		certification: EntryFieldTypes.Symbol<string>;
		institution: EntryFieldTypes.EntryLink<Institution>;
		timePeriod: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.RichText;
	};
}
