import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'origin',
      title: 'Origin',
      type: 'text',
    },
    {
      name: 'about_me',
      title: 'About Me',
      type: 'text',
    },
    {
      name: 'awards',
      title: 'Awards / Nominations',
      type: 'array',
      of: [
        {
          name: 'award',
          type: 'string',
          title: 'Award',
        }
      ],
    },
  ],
})
