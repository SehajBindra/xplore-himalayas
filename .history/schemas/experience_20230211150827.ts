// import {defineField, defineType} from 'sanity'

export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobtitle",
      title: "Job Title",
      type: "string",
    },

    {
      name: "companyImage",

      title: "Company Image",
      type: "image",

      options: {
        hotspot: true,
      },
    },

    {
      name: "company",
      title: "Company description",
      type: "text",
    },

    {
      name: "datestarted",
      title: "Date Started",
      type: "date",
    },

    {
      name: "dateended",
      title: "Date Ended",
      type: "date",
    },
    {
      name: "currentStatus",
      title: "Current Status",
      type: "boolean",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
