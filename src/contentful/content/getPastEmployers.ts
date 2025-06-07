import type {
	InstitutionResponse,
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
	(await contentfulClient.getEntries<PastEmployer>(
		{
			content_type: 'pastEmployer',
		},
	)).items.sort(
		(
			a, b,
		)  => (a.fields.listPriority - b.fields.listPriority),
	);

const createPastEmployerResponseObj = (
	pastEmployerEntryFields: PastEmployerFields, companyEntryFields: InstitutionResponse, locationEntryFields: LocationFields,
): PastEmployerResponse => ({
	listPriority: pastEmployerEntryFields.listPriority,
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

const getCompanyFields = (
	pastEmployerEntryFields: PastEmployerFields,
) => (pastEmployerEntryFields.company as { fields: InstitutionResponse }).fields

const getLocationFields = async (
	pastEmployerEntryFields: PastEmployerFields,
) => (await contentfulClient.getEntry<Location>(
	(pastEmployerEntryFields.company as { fields: InstitutionResponse }).fields.location.sys.id,
)).fields;

export const getPastEmployers = async () =>
	await Promise.all(
		(await getPastEmployerEntries()).map(
			async (
				{
					fields: pastEmployerEntryFields,
				},
			) => createPastEmployerResponseObj(
				pastEmployerEntryFields,
				getCompanyFields(
					pastEmployerEntryFields,
				),
				await getLocationFields(
					pastEmployerEntryFields,
				),
			),
		),
	);

export default getPastEmployers;
