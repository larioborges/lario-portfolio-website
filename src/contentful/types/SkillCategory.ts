import type { EntryFieldTypes } from 'contentful';
import type { Skill } from './Skill';

export interface SkillCategoryResponse {
	listPriority: number;
	name: string;
	icon: string;
	skills: string[];
}

export interface SkillCategory {
	contentTypeId: 'skillCategory';
	fields: {
		listPriority: EntryFieldTypes.Number;
		name: EntryFieldTypes.Symbol<string>;
		icon: EntryFieldTypes.Symbol<string>;
		skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
	};
}
