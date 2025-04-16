import type { CollectionConfig } from 'payload'

export const UserPlants: CollectionConfig = {
  slug: 'user-plants',
  admin: {
    useAsTitle: 'plant',
  },
  hooks: {
    beforeRead: [
      async (args) => {
        if (args.req.routeParams?.id) {
          const { id } = args.req.routeParams
          console.log('💦 id', args.doc)

          let wetLevel = 0
          if (args.doc.lastWatered) {
            const lastWatered = new Date(args.doc.lastWatered)
            const now = new Date()
            const diff = now.getTime() - lastWatered.getTime()
            const diffInHours = diff / (1000 * 60 * 60)
            const diffInDays = diffInHours / 24

            // The `wetLevel` decreases by 2 for each full day that has passed.
            wetLevel = args.doc.wetLevel - Math.floor(diffInDays * 2)
          }

          try {
            await args.req.payload.update({
              collection: 'user-plants',
              id: id as string,
              data: {
                wetLevel,
              },
            })
            console.log('💧 wetLevel reset to 0')
          } catch (error) {
            console.error('Error updating wetLevel:', error)
          }
        }
      },
    ],
    beforeChange: [
      async (args) => {
        if (args.data.wetLevel) {
          const now = new Date()
          args.data.lastWatered = now.toISOString()
          console.log('💦 Updating wet level', args.data)
        }
      },
    ],
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
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
    {
      type: 'row',
      fields: [
        {
          name: 'wetLevel',
          type: 'number',
          required: true,
          min: 0,
          max: 8,
          defaultValue: 0,
          admin: {
            description: 'The wet level of the plant.',
            width: '10%',
          },
        },
        {
          name: 'lastWatered',
          type: 'date',
          admin: {
            description: 'The date the plant was last watered.',
            width: '10%',
          },
        },
      ],
    },
  ],
}
