import type {
	EntryFieldTypes,
} from 'contentful';
import type {
	Skill,
} from './Skill';

export interface SkillCategory {
	contentTypeId: 'skillCategory';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
		skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Skill>>;
	};
}
