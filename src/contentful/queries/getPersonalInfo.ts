import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '@/contentful';
import type {
	PersonalInfo,
	PersonalInfoFields,
	PersonalInfoResponse,
} from '@/contentful/types';

type getPersonalInfo = () => Promise<PersonalInfoResponse>;

const getPersonalInfoResponse = (personalInfoFields: PersonalInfoFields) => ({
	...personalInfoFields,
	intro: documentToHtmlString(personalInfoFields.intro),
});

const getPersonalInfoFields = async () =>
	(await contentfulClient.getEntry<PersonalInfo>('3VUcnT1kxkcTnaxAwSVaHf'))
		.fields;

export const getPersonalInfo: getPersonalInfo = async () =>
	getPersonalInfoResponse(await getPersonalInfoFields());

export default getPersonalInfo;
