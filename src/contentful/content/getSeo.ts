import type {
	Seo,
} from '@/contentful/contentTypes';
import {
	contentfulClient,
} from '..';

export const getSeoFieldsById = async (
	id: string,
) => (
	await contentfulClient.getEntry<Seo>(
		id,
	)
).fields;
