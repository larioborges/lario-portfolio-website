import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Entry } from 'contentful';
import { contentfulClient } from '@/contentful';
import type {
	Institution,
	InstitutionFields,
	Location,
	LocationFields,
	ShowcaseProject,
	ShowcaseProjectEntryFieldValues,
	ShowcaseProjectResponse,
	SkillEntry,
} from '@/contentful/types';

const getShowcaseProjectsEntries = async () =>
	(
		await contentfulClient.getEntries<ShowcaseProject>({
			content_type: 'showcaseProject',
		})
	).items.sort((a, b) => a.fields.listPriority - b.fields.listPriority);

const createShowcaseProjectResponseObj = (
	showcaseProjectEntryFields: ShowcaseProjectEntryFieldValues,
	employerEntryFields: InstitutionFields,
	clientEntryFields: InstitutionFields | undefined,
	locationEntryFields: LocationFields,
): ShowcaseProjectResponse => ({
	listPriority: showcaseProjectEntryFields.listPriority,
	name: showcaseProjectEntryFields.name,
	employerName: employerEntryFields.name,
	employerWebsiteUrl: employerEntryFields.websiteUrl,
	clientName: clientEntryFields?.name,
	clientWebsiteUrl: clientEntryFields?.websiteUrl,
	location: locationEntryFields.name,
	locationGoogleMapsUrl: locationEntryFields.googleMapsUrl,
	period: showcaseProjectEntryFields.period,
	skills: showcaseProjectEntryFields.skills.map(
		skill => (skill as SkillEntry).fields.name,
	),
	description: documentToHtmlString(showcaseProjectEntryFields.description),
	highlights: documentToHtmlString(showcaseProjectEntryFields.highlights),
});

const getLocationFieldsFromInstitution = async (
	institutionEntryFields: InstitutionFields | undefined,
) =>
	(
		await contentfulClient.getEntry<Location>(
			(
				institutionEntryFields?.location as unknown as {
					sys: {
						id: string;
					};
				}
			).sys.id,
		)
	).fields;

const getLocationFields = async (
	showcaseProjectEntryFields: ShowcaseProjectEntryFieldValues,
) =>
	getClientFields(showcaseProjectEntryFields) !== undefined
		? await getLocationFieldsFromInstitution(
				getClientFields(showcaseProjectEntryFields),
			)
		: await getLocationFieldsFromInstitution(
				getEmployerFields(showcaseProjectEntryFields),
			);

const getClientFields = (
	showcaseProjectEntryFields: ShowcaseProjectEntryFieldValues,
) =>
	(
		showcaseProjectEntryFields.client as
			| Entry<Institution, undefined, string>
			| undefined
	)?.fields as unknown as InstitutionFields | undefined;

const getEmployerFields = (
	showcaseProjectEntryFields: ShowcaseProjectEntryFieldValues,
) =>
	(showcaseProjectEntryFields.employer as Entry<Institution, undefined, string>)
		.fields as unknown as InstitutionFields;

export const getShowcaseProjects: () => Promise<ShowcaseProjectResponse[]> =
	async () =>
		await Promise.all(
			(await getShowcaseProjectsEntries()).map(
				async ({ fields: showcaseProjectEntryFields }) =>
					createShowcaseProjectResponseObj(
						showcaseProjectEntryFields,
						getEmployerFields(showcaseProjectEntryFields),
						getClientFields(showcaseProjectEntryFields),
						await getLocationFields(showcaseProjectEntryFields),
					),
			),
		);

export default getShowcaseProjects;
