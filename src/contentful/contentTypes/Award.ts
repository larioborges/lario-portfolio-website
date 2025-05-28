import type { EntryFieldTypes } from "contentful"
import type { Institution } from "./Institution";

export interface Award {
    contentTypeId: "award",
    fields: {
        name: EntryFieldTypes.Symbol,
        issuer: EntryFieldTypes.EntryLink<Institution>,
        date: EntryFieldTypes.Symbol,
        tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
    },
};
