import type {
	Institution,
	Location,
	PastEmployer,
} from '@/contentful/contentTypes';
import {
	documentToHtmlString,
} from '@contentful/rich-text-html-renderer';
import {
	contentfulClient,
} from '..';

const getPastEmployerEntries = async () =>
	await contentfulClient.getEntries<PastEmployer>(
		{
			content_type: 'pastEmployer',
		},
	);

const getPastEmployerById = async (
	id: string,
) =>
	await contentfulClient.getEntry<Institution>(
		id,
	);

export const getPastEmployers = async () =>
	await Promise.all(
		(await getPastEmployerEntries()).items.map(
			async employer => {
				const {
					company, description, period, position,
				} = employer.fields;
				const {
					name: companyName,
					websiteUrl: companyWebsiteUrl,
					location: companyLocationEntry,
				} = (await getPastEmployerById(
					company.sys.id,
				)).fields;
				const locationEntry = await contentfulClient.getEntry<Location>(
					companyLocationEntry.sys.id,
				);
				const {
					name: companyLocation, googleMapsUrl: companyGoogleMapsUrl,
				} =
				locationEntry.fields;

				return {
					companyName,
					companyWebsiteUrl,
					companyLocation,
					companyGoogleMapsUrl,
					period,
					position,
					description: documentToHtmlString(
						description,
					),
				};
			},
		),
	);

export default getPastEmployers;
