import {
	contentfulClient,
} from '@/contentful';
import type {
	Location, PersonalInfo,
} from '@/contentful/contentTypes';
import {
	documentToHtmlString,
} from '@contentful/rich-text-html-renderer';
import type {
	Document,
} from '@contentful/rich-text-types';
import type {
	Asset,
	Entry,
	UnresolvedLink,
} from 'contentful';

type getPersonalInfo = () => Promise<{
	introHtml: string;
	name: string;
	profileImage: UnresolvedLink<'Asset'> | Asset<undefined, string>;
	location: UnresolvedLink<'Entry'> | Entry<Location, undefined, string>;
	email: string;
	githubUrl: string;
	linkedInUrl: string;
	intro: Document;
}>;
export const getPersonalInfo: getPersonalInfo = async () => {
	const personalInfoFields = (
		await contentfulClient.getEntry<PersonalInfo>(
			'3VUcnT1kxkcTnaxAwSVaHf',
		)
	).fields;
	return {
		...personalInfoFields,
		introHtml: documentToHtmlString(
			personalInfoFields.intro,
		),
	};
};

export default getPersonalInfo;
