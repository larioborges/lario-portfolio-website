import type {
	Award,
	AwardResponse,
	InstitutionFields,
	AwardFields,
} from '@/contentful/contentTypes';
import {
	contentfulClient,
} from '@/contentful';

const getAwardEntries = async () =>
	await contentfulClient.getEntries<Award>(
		{
			content_type: 'award',
		},
	);

const createPastEmployerResponseObj = (awardsEntryFields:AwardFields, issuerEntryFields: InstitutionFields): AwardResponse => ({
	name: awardsEntryFields.name,
	issuerWebsiteUrl: issuerEntryFields.websiteUrl,
	issuerName: issuerEntryFields.name,
	date: awardsEntryFields.date,
	tags: awardsEntryFields.tags,
});

const getIssuerFields = (awardsEntryFields:AwardFields) => (awardsEntryFields.issuer as { fields: InstitutionFields }).fields

export const getAwards = async () =>
	await Promise.all(
		(await getAwardEntries()).items.map(
			async ({
				fields: awardFields,
			}):Promise<AwardResponse> => createPastEmployerResponseObj(
				awardFields,
				getIssuerFields(awardFields),
			),
		),
	);

export default getAwards;
