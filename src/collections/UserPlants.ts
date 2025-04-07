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
          type: 'relationship',
          relationTo: 'varieties',
          required: true,
          admin: {
            description: 'Variety of the plant.',
            width: '34%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'iterations',
          type: 'number',
          required: true,
          min: 0,
          max: 15,
          defaultValue: 0,
          admin: {
            description: 'The number of iterations to perform.',
            width: '10%',
          },
        },
        {
          name: 'lSystemString',
          type: 'textarea',
          required: true,
          defaultValue: 'S',
          admin: {
            description: 'The string of the L-System.',
            width: '90%',
          },
        },
      ],
    },
  ],
}
