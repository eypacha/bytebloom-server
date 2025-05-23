import type { CollectionConfig } from 'payload'

export const LSystems: CollectionConfig = {
  slug: 'lsystems',
  labels: {
    singular: 'L-System',
    plural: 'L-Systems',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Main',
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
            description: 'The name of the L-System.',
          },
        },
        {
          type: 'text',
          name: 'axiom',
          required: true,
          label: 'Axiom',
          admin: {
            description: 'The initial string of the L-System.',
          },
        },
      ],
    },
    {
      type: 'array',
      name: 'rules',
      required: true,
      label: 'Rules',
      minRows: 1,
      admin: {
        description:
          'The production rules of the L-System. S (Seed), F (Branch), L (Leaf), T (Spine),+ (Turn Right), - (Turn Left), [ (Push State), ] (Pop State).',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'predecessor',
              required: true,
              label: 'Predecessor',
              admin: {
                description: 'The predecessor string.',
              },
            },
            {
              type: 'text',
              name: 'successor',
              label: 'Successor',
              admin: {
                description: 'The successor string.',
              },
            },
            {
              type: 'number',
              name: 'odds',
              required: true,
              label: 'Odds',
              min: 0,
              max: 1,
              defaultValue: 1,
              admin: {
                description: 'The odds of this rule being applied.',
              },
            },
          ],
        },
      ],
    },
  ],
}
