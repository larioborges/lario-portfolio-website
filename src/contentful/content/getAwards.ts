import type { Award } from '@/contentful/contentTypes';
import { contentfulClient } from '..';
import type { Institution } from '../contentTypes';

const getAwardEntries = async () =>
	await contentfulClient.getEntries<Award>({
		content_type: 'award',
	});

export const getAwards = async () =>
	await Promise.all(
		(await getAwardEntries()).items.map(async award => {
			const { name, date, tags, issuer } = award.fields;
			const issuerEntry = await contentfulClient.getEntry<Institution>(
				issuer.sys.id,
			);
			const { websiteUrl: issuerWebsiteUrl, name: issuerName } =
				issuerEntry.fields;
			return {
				name,
				issuerWebsiteUrl,
				issuerName,
				date,
				tags,
			};
		}),
	);

export default getAwards;
