import type {
	Document,
} from '@contentful/rich-text-types';
import type {
	Asset, Entry, EntryFieldTypes, UnresolvedLink,
} from 'contentful';
import type {
	Location,
} from './Location';

export interface PersonalInfoFieldsBase {
	name: string;
	profileImage: UnresolvedLink<'Asset'> | Asset<undefined, string>;
	location: UnresolvedLink<'Entry'> | Entry<Location, undefined, string>;
	email: string;
	githubUrl: string;
	linkedInUrl: string;
}

export interface PersonalInfoResponse extends PersonalInfoFieldsBase {
	intro: string;
}
export interface PersonalInfoFields extends PersonalInfoFieldsBase {
	intro: Document;
}
export interface PersonalInfo {
	contentTypeId: 'personalInfo';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		profileImage: EntryFieldTypes.AssetLink;
		location: EntryFieldTypes.EntryLink<Location>;
		email: EntryFieldTypes.Symbol<string>;
		githubUrl: EntryFieldTypes.Symbol<string>;
		linkedInUrl: EntryFieldTypes.Symbol<string>;
		intro: EntryFieldTypes.RichText;
	};
}
