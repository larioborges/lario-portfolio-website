import type {
	Certification,
	InstitutionFields,
	Location,
	LocationFields,
	CertificationFields,
} from '@/contentful/contentTypes';
import {
	documentToHtmlString,
} from '@contentful/rich-text-html-renderer';
import {
	contentfulClient,
} from '@/contentful';

const getCertificationEntries = async () =>
	await contentfulClient.getEntries<Certification>(
		{
			content_type: 'certification',
		},
	);

const createCertResponseObj = (certEntryFields: CertificationFields, instutionEntryFields: InstitutionFields, locationEntryFields: LocationFields) => ({
	institutionName: instutionEntryFields.name,
	institutionWebsiteUrl: instutionEntryFields.websiteUrl,
	institutionLocation: locationEntryFields.name,
	institutionGoogleMapsUrl: locationEntryFields.googleMapsUrl,
	timePeriod: certEntryFields.timePeriod,
	certification: certEntryFields.certification,
	description: documentToHtmlString(
		certEntryFields.description,
	),
});

const getInstitutionFields = (certEntryFields: CertificationFields) => (certEntryFields.institution as { fields: InstitutionFields }).fields

const getLocationFields = async (certEntryFields: CertificationFields) => (await contentfulClient.getEntry<Location>(
	(certEntryFields.institution as { fields: InstitutionFields }).fields.location.sys.id,
)).fields;

export const getCertifications = async () =>
	await Promise.all(
		(await getCertificationEntries()).items.map(
			async ({
				fields: certEntryFields,
			}) => (
				createCertResponseObj(
					certEntryFields,
					getInstitutionFields(certEntryFields),
					await getLocationFields(certEntryFields),
				)
			),
		),
	);

export default getCertifications;
