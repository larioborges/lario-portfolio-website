import {
	contentfulClient,
} from '@/contentful';
import type {
	PersonalInfoResponse,
	PersonalInfo,
	PersonalInfoFields,
} from '@/contentful/contentTypes';
import {
	documentToHtmlString,
} from '@contentful/rich-text-html-renderer';

type getPersonalInfo = () => Promise<PersonalInfoResponse>;

const getPersonalInfoResponse = (personalInfoFields: PersonalInfoFields) => ({
	...personalInfoFields,
	intro: documentToHtmlString(personalInfoFields.intro),
});

const getPersonalInfoFields = async () => (
	await contentfulClient.getEntry<PersonalInfo>(
		'3VUcnT1kxkcTnaxAwSVaHf',
	)
).fields;

export const getPersonalInfo: getPersonalInfo =
	async () => getPersonalInfoResponse(
		await getPersonalInfoFields(),
	);

export default getPersonalInfo;
