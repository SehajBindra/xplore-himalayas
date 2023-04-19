export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of your Project",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 80,
      },
    },

    {
      name: "image",

      title: "Image",
      type: "image",

      options: {
        hotspot: true,
      },
    },

    {
      name: "summary",
      title: "Summary",
      type: "blockContent",
    },

    {
      name: "shortdescription",
      title: "Short Description",
      type: "string",
    },
    {
      name: "linktoBuild",
      title: "Link to Build",
      type: "url",
    },

    {
      name: "sourcecodelink",
      title: "Source Code Link",
      type: "url",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
