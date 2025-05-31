import type {
	EntryFieldTypes,
} from 'contentful';
import type {
	Skill,
} from './Skill';

export interface SkillCategoryResponse {
	name: string;
	icon: string;
	skills: string[];
}

export interface SkillCategory {
	contentTypeId: 'skillCategory';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		icon: EntryFieldTypes.Symbol<string>;
		skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
	};
}
