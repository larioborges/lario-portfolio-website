import {
	contentfulClient,
} from '@/contentful';
import type {
	SkillCategory,
	SkillCategoryResponse,
} from '@/contentful/contentTypes';

interface SkillEntry {
	fields: {
		name: string;
	}
}

const getSkillCategoryEntries = async () =>
	await contentfulClient.getEntries<SkillCategory>(
		{
			content_type: 'skillCategory',
		},
	);

export const getSkillCategories = async () =>
	await Promise.all(
		(await getSkillCategoryEntries()).items.map(
			({
				fields: skillCatFields,
			}):SkillCategoryResponse => ({
				name: skillCatFields.name,
				icon: skillCatFields.icon,
				skills: skillCatFields.skills.map(skill => (skill as SkillEntry).fields.name),
			}),
		),
	);

export default getSkillCategories;
