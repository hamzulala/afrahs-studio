import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'long_description',
      title: 'Long Description',
      type: 'text',
    }
  ],
})
