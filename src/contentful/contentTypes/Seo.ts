import type {
	EntryFieldTypes,
} from 'contentful';

export interface Seo {
	title: EntryFieldTypes.Symbol<string>;
	description: EntryFieldTypes.Symbol<string>;
}
