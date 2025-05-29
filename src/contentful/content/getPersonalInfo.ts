import { contentfulClient } from '@/contentful';
import type {
	PersonalInfo,
	PersonalInfoFields,
} from '@/contentful/contentTypes';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const getPersonalInfo = async () => {
	const personalInfoEntry = await contentfulClient.getEntry<PersonalInfo>(
		'3VUcnT1kxkcTnaxAwSVaHf',
	);
	const personalInfoFields: PersonalInfoFields = personalInfoEntry.fields;
	personalInfoFields.introHtml = documentToHtmlString(personalInfoFields.intro);
	return {
		...personalInfoFields,
		intro: documentToHtmlString(personalInfoFields.intro),
	};
};

export default getPersonalInfo;
