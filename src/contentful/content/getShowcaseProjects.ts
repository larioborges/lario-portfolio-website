import type {
	InstitutionFields,
	Location,
	LocationFields,
	PastEmployer,
	PastEmployerFields,
	PastEmployerResponse,
} from '@/contentful/contentTypes';
import {
	documentToHtmlString,
} from '@contentful/rich-text-html-renderer';
import {
	contentfulClient,
} from '@/contentful';

const getPastEmployerEntries = async () =>
	await contentfulClient.getEntries<PastEmployer>(
		{
			content_type: 'pastEmployer',
		},
	);

const createPastEmployerResponseObj = (pastEmployerEntryFields: PastEmployerFields, companyEntryFields: InstitutionFields, locationEntryFields: LocationFields): PastEmployerResponse => ({
	companyName: companyEntryFields.name,
	companyWebsiteUrl: companyEntryFields.websiteUrl,
	companyLocation: locationEntryFields.name,
	companyGoogleMapsUrl: locationEntryFields.googleMapsUrl,
	period: pastEmployerEntryFields.period,
	position: pastEmployerEntryFields.position,
	description: documentToHtmlString(
		pastEmployerEntryFields.description,
	),
});

const getCompanyFields = (pastEmployerEntryFields: PastEmployerFields) => (pastEmployerEntryFields.company as { fields: InstitutionFields }).fields

const getLocationFields = async (pastEmployerEntryFields: PastEmployerFields) => (await contentfulClient.getEntry<Location>(
	(pastEmployerEntryFields.company as { fields: InstitutionFields }).fields.location.sys.id,
)).fields;

export const getPastEmployers = async () =>
	await Promise.all(
		(await getPastEmployerEntries()).items.map(
			async ({
				fields: pastEmployerEntryFields,
			}) => createPastEmployerResponseObj(
				pastEmployerEntryFields,
				getCompanyFields(pastEmployerEntryFields),
				await getLocationFields(pastEmployerEntryFields),
			),
		),
	);

export default getPastEmployers;
