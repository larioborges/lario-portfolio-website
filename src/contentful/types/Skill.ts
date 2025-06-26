import type { EntryFieldTypes } from 'contentful';

export interface SkillEntry {
	fields: {
		name: string;
	};
}

export interface Skill {
	contentTypeId: 'skill';
	fields: {
		name: EntryFieldTypes.Symbol<string>;
	};
}
