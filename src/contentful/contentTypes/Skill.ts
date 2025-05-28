import type { EntryFieldTypes } from "contentful"

export interface Skill {
    contentTypeId: "skill",
    fields: {
        name: EntryFieldTypes.Symbol,
    },
};
