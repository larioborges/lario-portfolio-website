import type { EntryFieldTypes } from "contentful"
import type { Location } from "./Location";

export interface PersonalInfo {
    contentTypeId: "personalInfo",
    fields: {
        name: EntryFieldTypes.Symbol,
        profileImage: EntryFieldTypes.AssetLink,
        location: EntryFieldTypes.EntryLink<Location>,
        email: EntryFieldTypes.Symbol,
        githubUrl: EntryFieldTypes.Symbol,
        linkedInUrl: EntryFieldTypes.Symbol,
        intro: EntryFieldTypes.RichText,
    },
};
