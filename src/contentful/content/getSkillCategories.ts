import {
	contentfulClient,
} from '@/contentful';
import type {
	SkillCategory,
	SkillCategoryResponse,
	SkillEntry,
} from '@/contentful/contentTypes';

const getSkillCategoryEntries = async () =>
	(await contentfulClient.getEntries<SkillCategory>(
		{
			content_type: 'skillCategory',
		},
	)).items.sort(
		(
			a, b,
		) => a.fields.listPriority - b.fields.listPriority,
	);

export const getSkillCategories = async () =>
	await Promise.all(
		(await getSkillCategoryEntries()).map(
			(
				{
					fields: skillCatFields,
				},
			):SkillCategoryResponse => ({
				listPriority: skillCatFields.listPriority,
				name: skillCatFields.name,
				icon: skillCatFields.icon,
				skills: skillCatFields.skills.map(
					skill => (skill as SkillEntry).fields.name,
				),
			}),
		),
	);

export const getFeaturedSkills = async () =>
	[(await contentfulClient.getEntry<SkillCategory>(
		'52rmWmLPH8xh6KeamXXb5b',
	))].map(
		(
			{
				fields,
			},
		) => (
			{
				name: fields.name,
				icon: fields.icon,
				skills: fields.skills.map(
					skill => (skill as unknown as { fields: any }).fields.name,
				),
			}
		),
	)[0];

export default getSkillCategories;
