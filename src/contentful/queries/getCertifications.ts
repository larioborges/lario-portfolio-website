import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '@/contentful';
import type {
	Certification,
	CertificationFields,
	CertificationResponse,
	InstitutionResponse,
	Location,
	LocationFields,
} from '@/contentful/types';

const getCertificationEntries = async () =>
	(
		await contentfulClient.getEntries<Certification>({
			content_type: 'certification',
		})
	).items.sort((a, b) => a.fields.listPriority - b.fields.listPriority);

const createCertResponseObj = (
	certEntryFields: CertificationFields,
	instutionEntryFields: InstitutionResponse,
	locationEntryFields: LocationFields,
): CertificationResponse => ({
	listPriority: certEntryFields.listPriority,
	institutionName: instutionEntryFields.name,
	institutionWebsiteUrl: instutionEntryFields.websiteUrl,
	institutionLocation: locationEntryFields.name,
	institutionGoogleMapsUrl: locationEntryFields.googleMapsUrl,
	timePeriod: certEntryFields.timePeriod,
	certification: certEntryFields.certification,
	description: documentToHtmlString(certEntryFields.description),
});

const getInstitutionFields = (certEntryFields: CertificationFields) =>
	(
		certEntryFields.institution as {
			fields: InstitutionResponse;
		}
	).fields;

const getLocationFields = async (certEntryFields: CertificationFields) =>
	(
		await contentfulClient.getEntry<Location>(
			(
				certEntryFields.institution as {
					fields: InstitutionResponse;
				}
			).fields.location.sys.id,
		)
	).fields;

export const getCertifications = async (): Promise<CertificationResponse[]> =>
	await Promise.all(
		(await getCertificationEntries()).map(
			async ({ fields: certEntryFields }): Promise<CertificationResponse> =>
				createCertResponseObj(
					certEntryFields,
					getInstitutionFields(certEntryFields),
					await getLocationFields(certEntryFields),
				),
		) as any,
	);

export default getCertifications;
