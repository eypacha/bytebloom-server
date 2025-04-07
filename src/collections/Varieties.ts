import type { CollectionConfig } from 'payload'

const colorPicker = '@/collections/CustomFields/ColorPicker'

export const Varieties: CollectionConfig = {
  slug: 'varieties',
  admin: {
    useAsTitle: 'name',
    group: 'Main',
    defaultColumns: ['name'],
  },
  access: {
    read: () => {
      return true
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'name',
          required: true,
          label: 'Name',
          admin: {
            description: 'The name of the variety.',
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'array',
          name: 'branchColors',
          label: 'Branch Colors',
          minRows: 1,
          maxRows: 10,
          admin: {
            width: '50%',
            description: 'The colors of the branches.',
          },
          fields: [
            {
              type: 'text',
              name: 'color',
              defaultValue: '#441100',
              admin: {
                components: {
                  Field: colorPicker,
                },
              },
            },
          ],
        },
        {
          type: 'array',
          name: 'leafColors',
          label: 'Leaf Colors',
          minRows: 1,
          maxRows: 10,
          admin: {
            width: '50%',
            description: 'The colors of the leaves.',
          },
          fields: [
            {
              type: 'text',
              name: 'color',
              defaultValue: '#003d1b',
              admin: {
                components: {
                  Field: colorPicker,
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
