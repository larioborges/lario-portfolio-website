import type {
	Document,
} from '@contentful/rich-text-types';
import type {
	Entry, EntryFieldTypes, UnresolvedLink,
} from 'contentful';
import type {
	Institution,
} from '@/contentful/contentTypes/Institution';
import type {
	Skill,
} from '@/contentful/contentTypes/Skill';

export interface ShowcaseProjectResponse {
	name: string;
	employerName: string;
	employerWebsiteUrl: string;
	employerLocation: string;
	employerGoogleMapsUrl: string;
	clientName: string;
	clientWebsiteUrl: string;
	clientLocation: string;
	clientGoogleMapsUrl: string;
	period: string;
	skills: string[];
	description: string;
	highlights: string;
}
export interface ShowcaseProjectFields {
	name: string;
	employer: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	client: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string> | undefined;
	period: string;
	skills: string[];
	description: Document;
	highlights: Document;
}

export interface ShowcaseProject {
	contentTypeId: 'showcaseProject';
	fields: {
		name: EntryFieldTypes.Symbol<string>
		employer:EntryFieldTypes.EntryLink<Institution>;
		client: EntryFieldTypes.EntryLink<Institution> | undefined;
		period: EntryFieldTypes.Symbol<string>;
		skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
		description: EntryFieldTypes.RichText;
		highlights: EntryFieldTypes.RichText;
	};
}
