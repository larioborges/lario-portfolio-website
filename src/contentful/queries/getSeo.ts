import type { Seo } from '@/contentful/types';
import { contentfulClient } from '..';

export const getSeoFieldsById = async (id: string) =>
	(await contentfulClient.getEntry<Seo>(id)).fields;
