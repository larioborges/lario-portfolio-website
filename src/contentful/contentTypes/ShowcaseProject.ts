import type {
	Document,
} from '@contentful/rich-text-types';
import type {
	Entry, EntryFieldTypes, UnresolvedLink,
} from 'contentful';
import type {
	Institution,
	Skill,
} from '@/contentful/contentTypes';

export type ShowcaseProjectKeyClientOrEmployer = 'client' | 'employer';

export type ShowcaseProjectKeysWithoutClientOrEmployer = 'name' | 'period' | 'skills' | 'description' | 'highlights';

export interface ShowcaseProjectResponse {
	name: string;
	employerName: string;
	employerWebsiteUrl?: string | undefined;
	clientName?: string | undefined;
	clientWebsiteUrl?: string | undefined;
	location: string;
	locationGoogleMapsUrl?: string | undefined;
	period: string;
	skills: string[];
	description: string;
	highlights: string;
}
export interface ShowcaseProjectFields {
	name: string;
	employer: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	client?: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string> | undefined;
	period: string;
	skills: string[];
	description: Document;
	highlights: Document;
}

export interface ShowcaseProjectFieldsWithoutClientAndEmployer {
	employerName: EntryFieldTypes.Symbol<string>;
	employerWebsiteUrl?: EntryFieldTypes.Symbol<string>;
	clientName?: EntryFieldTypes.Symbol<string> | undefined;
	clientWebsiteUrl?: EntryFieldTypes.Symbol<string> | undefined;
}

export interface ShowcaseProjectEntryFieldsWithClientAndEmployer {
	name: EntryFieldTypes.Symbol<string>;
	period: EntryFieldTypes.Symbol<string>;
	skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
	description: EntryFieldTypes.RichText;
	highlights: EntryFieldTypes.RichText
};

export interface ShowcaseProjectEntryFieldsWithoutClientAndEmployer {
	name: EntryFieldTypes.Symbol<string>;
	period: EntryFieldTypes.Symbol<string>;
	skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
	description: EntryFieldTypes.RichText;
	highlights: EntryFieldTypes.RichText
};


export interface ShowcaseProjectEntryFieldValues {
	name: string;
	employer: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string>;
	client?: UnresolvedLink<'Entry'> | Entry<Institution, undefined, string> | undefined;
	period: string;
	skills: (UnresolvedLink<'Entry'> | Entry<Skill, undefined, string>)[];
	description: Document;
	highlights: Document;
}

export interface ShowcaseProjectEntryFields {
	name: EntryFieldTypes.Symbol<string>
	employer:EntryFieldTypes.EntryLink<Institution>;
	client?: EntryFieldTypes.EntryLink<Institution> | undefined;
	period: EntryFieldTypes.Symbol<string>;
	skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
	description: EntryFieldTypes.RichText;
	highlights: EntryFieldTypes.RichText;
}

export interface ShowcaseProject {
	contentTypeId: 'showcaseProject';
	fields: ShowcaseProjectEntryFields;
}
