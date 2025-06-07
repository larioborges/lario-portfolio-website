import type {
	Award,
	AwardResponse,
	InstitutionResponse,
	AwardFields,
} from '@/contentful/contentTypes';
import {
	contentfulClient,
} from '@/contentful';

const getAwardEntries = async () =>
	(await contentfulClient.getEntries<Award>(
		{
			content_type: 'award',
		},
	)).items.sort(
		(
			a, b,
		) => a.fields.listPriority - b.fields.listPriority,
	);

const createPastEmployerResponseObj = (
	awardsEntryFields:AwardFields, issuerEntryFields: InstitutionResponse,
): AwardResponse => ({
	listPriority: awardsEntryFields.listPriority,
	name: awardsEntryFields.name,
	issuerWebsiteUrl: issuerEntryFields.websiteUrl,
	issuerName: issuerEntryFields.name,
	date: awardsEntryFields.date,
	tags: awardsEntryFields.tags,
});

const getIssuerFields = (
	awardsEntryFields:AwardFields,
) => (awardsEntryFields.issuer as { fields: InstitutionResponse }).fields

export const getAwards = async () =>
	await Promise.all(
		(await getAwardEntries()).map(
			async (
				{
					fields: awardFields,
				},
			):Promise<AwardResponse> => createPastEmployerResponseObj(
				awardFields,
				getIssuerFields(
					awardFields,
				),
			),
		),
	);

export default getAwards;
