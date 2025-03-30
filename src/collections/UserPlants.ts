import type { CollectionConfig } from 'payload'

export const UserPlants: CollectionConfig = {
  slug: 'user-plants',
  admin: {
    useAsTitle: 'plant',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'user',
          type: 'relationship',
          relationTo: 'users',
          required: true,
          admin: {
            description: 'User who owns the plant.',
            width: '33%',
          },
        },
        {
          name: 'plant',
          type: 'relationship',
          relationTo: 'plants',
          required: true,
          admin: {
            description: 'Plant associated with the user.',
            width: '33%',
          },
        },
        {
          name: 'variety',
          label: 'Variety',
          type: 'number',
          required: true,
          admin: {
            description: 'Index of the plant variety.',
            width: '33%',
          },
        },
      ],
    },
  ],
}
