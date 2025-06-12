import type {
	EntryFieldTypes,
} from 'contentful';

export interface Seo {
	contentTypeId: 'skill';
	fields: {
		title: EntryFieldTypes.Symbol<string>;
		description: EntryFieldTypes.Symbol<string>;
		canonicalUrl: EntryFieldTypes.Symbol<string>;
		image?: EntryFieldTypes.AssetLink | undefined;
	}
};
