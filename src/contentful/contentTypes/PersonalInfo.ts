import type { EntryFieldTypes } from 'contentful';
import type { Location } from './Location';

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
