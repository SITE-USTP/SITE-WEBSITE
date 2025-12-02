import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,
    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "posts",
                label: "Blog Posts",
                path: "src/content/posts",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "pubDate",
                        label: "Date Posted",
                        required: true,
                    },
                    {
                        type: "reference",
                        name: "author",
                        label: "Author",
                        collections: ["officers"],
                        required: true,
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Cover Image",
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        list: true,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
            {
                name: "events",
                label: "Events Calendar",
                path: "src/content/events",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Event Name",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "date",
                        label: "Date/Time",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "location",
                        label: "Location",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "status",
                        label: "Status",
                        options: ["Upcoming", "Completed", "Cancelled"],
                        required: true,
                    },
                    {
                        type: "image",
                        name: "flyer",
                        label: "Flyer Image",
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Details",
                        isBody: true,
                    },
                ],
            },
            {
                name: "officers",
                label: "Officer Directory",
                path: "src/content/officers",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "name",
                        label: "Name",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "role",
                        label: "Position/Role",
                        required: true,
                    },
                    {
                        type: "image",
                        name: "avatar",
                        label: "Profile Photo",
                    },
                    {
                        type: "string",
                        name: "bio",
                        label: "Bio",
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "object",
                        name: "socials",
                        label: "Social Links",
                        fields: [
                            {
                                type: "string",
                                name: "github",
                                label: "GitHub URL",
                            },
                            {
                                type: "string",
                                name: "linkedin",
                                label: "LinkedIn URL",
                            },
                        ],
                    },
                ],
            },
            {
                name: "resources",
                label: "Resources",
                path: "src/content/resources",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "string",
                        name: "fileUrl",
                        label: "File Link/URL",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "category",
                        label: "Category",
                        options: ["Academic", "Career", "Other"],
                    },
                ],
            },
        ],
    },
});
