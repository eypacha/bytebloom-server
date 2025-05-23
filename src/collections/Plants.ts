import type { CollectionConfig } from 'payload'
const colorPicker = '@/collections/CustomFields/ColorPicker'

export const Plants: CollectionConfig = {
  slug: 'plants',
  admin: {
    useAsTitle: 'name',
    group: 'Main',
    defaultColumns: ['name', 'lSystem', 'previewImage'],
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
            description: 'The name of the plant.',
            width: '25%',
          },
        },

        {
          type: 'text',
          name: 'description',
          label: 'Description',
          admin: {
            description: 'Short description of the plant.',
            width: '75%',
          },
        },
        {
          type: 'relationship',
          name: 'lSystem',
          label: 'L-System',
          relationTo: 'lsystems',

          required: true,
          admin: {
            description: 'The L-System associated with this plant.',
            width: '50%',
          },
        },
        {
          type: 'relationship',
          name: 'previewImage',
          label: 'Preview Image',
          relationTo: 'images',
          admin: {
            description: 'Preview image of the plant.',
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'checkbox',
          name: 'isTrailing',
          label: 'Trailing plant',
          admin: {
            description: 'Is this plant a trailing plant?',
            width: '25%',
          },
        },
        {
          type: 'checkbox',
          name: 'hasLeaves',
          label: 'Has leaves',
          defaultValue: true,
          admin: {
            description: 'Does this plant have leaves?',
            width: '25%',
          },
        },
        {
          type: 'checkbox',
          name: 'isDeciduous',
          label: 'Deciduous plant',
          defaultValue: false,
          admin: {
            description: 'Is this plant deciduous?',
            width: '25%',
            condition: (data, siblingData) => {
              return siblingData?.hasLeaves
            },
          },
        },
        {
          type: 'checkbox',
          name: 'hasFruits',
          label: 'Has fruits',
          defaultValue: false,
          admin: {
            description: 'Does this plant have fruits?',
            width: '25%',
          },
        },
      ],
    },
    {
      name: 'varieties',
      type: 'relationship',
      relationTo: 'varieties',
      required: true,
      hasMany: true,
      admin: {
        description: 'Varieties of this plant',
        width: '33%',
      },
    },
    {
      type: 'group',
      name: 'params',
      label: 'Parameters',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'number',
              name: 'iterations',
              required: true,
              label: 'Iterations',
              min: 1,
              max: 15,
              defaultValue: 7,
              admin: {
                description: 'The number of iterations to perform.',
              },
            },
          ],
        },
        {
          type: 'group',
          name: 'branches',
          label: 'Branches',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'number',
                  name: 'angle',
                  required: true,
                  label: 'BaseAngle',
                  min: 0,
                  max: 360,
                  defaultValue: 25,
                  admin: {
                    description: 'The angle of a new branch.',
                    width: '25%',
                  },
                },
                {
                  type: 'number',
                  name: 'angleReduction',
                  required: true,
                  label: 'Angle Reduction',
                  min: 0,
                  max: 1,
                  defaultValue: 1,
                  admin: {
                    description: 'The reduction of the angle of a new branch.',
                    width: '25%',
                  },
                },
                {
                  type: 'number',
                  name: 'baseWidth',
                  required: true,
                  label: 'Base width',
                  min: 0,
                  max: 40,
                  defaultValue: 1,
                  admin: {
                    description: 'The width of the branch.',
                    width: '25%',
                  },
                },
                {
                  type: 'number',
                  name: 'widthReduction',
                  required: true,
                  label: 'Width Reduction',
                  min: 0,
                  max: 1,
                  defaultValue: 0,
                  admin: {
                    description: 'The with reduction width of the branch.',
                    width: '25%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'number',
                  name: 'length',
                  required: true,
                  label: 'Length',
                  min: 0,
                  max: 100,
                  defaultValue: 10,
                  admin: {
                    description: 'The length of the branch.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'lengthReduction',
                  required: true,
                  label: 'Length Reduction',
                  min: 0,
                  max: 1,
                  defaultValue: 0.9,
                  admin: {
                    description: 'The reduction of the length of a new branch.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'iterationReduction',
                  required: true,
                  label: 'Iteration reduction',
                  min: 0,
                  max: 1,
                  defaultValue: 1,
                  admin: {
                    description: 'The reduction after each iteration.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'growthRate',
                  required: true,
                  label: 'Growth rate',
                  min: 0,
                  max: 2,
                  defaultValue: 0.5,
                  admin: {
                    description: 'Growth rate of the branches after each watering.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'randomness',
                  required: true,
                  label: 'Randomnes',
                  min: 0,
                  max: 1,
                  defaultValue: 0.5,
                  admin: {
                    description: 'The randomness of the three.',
                    width: '20%',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'group',
          name: 'leaves',
          label: 'Leaves',
          admin: {
            condition: (data) => {
              return data.hasLeaves
            },
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'select',
                  name: 'shape',
                  required: true,
                  options: [
                    {
                      label: 'Triangle',
                      value: 'triangle',
                    },
                    {
                      label: 'Rectangle',
                      value: 'rectangle',
                    },
                    {
                      label: 'Ellipse',
                      value: 'ellipse',
                    },
                  ],
                  defaultValue: 'rectangle',
                  admin: {
                    description: 'The shape of the leaves.',
                    width: '25%',
                  },
                },
                {
                  type: 'number',
                  name: 'sizeX',
                  required: true,
                  min: 1,
                  max: 10,
                  defaultValue: 4,
                  admin: {
                    description: 'The width of the leaves.',
                    width: '25%',
                  },
                },
                {
                  type: 'number',
                  name: 'sizeY',
                  required: true,
                  min: 1,
                  max: 10,
                  defaultValue: 4,
                  admin: {
                    description: 'The height of the leaves.',
                    width: '25%',
                  },
                },
                {
                  type: 'number',
                  name: 'afterIteration',
                  required: true,
                  min: 1,
                  max: 20,
                  defaultValue: 6,
                  admin: {
                    description: 'The iteration after which the leaves are created.',
                    width: '25%',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'group',
          name: 'fruits',
          label: 'Fruits',
          admin: {
            condition: (data) => {
              return data.hasFruits
            },
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'number',
                  name: 'afterIteration',
                  required: true,
                  min: 1,
                  max: 15,
                  defaultValue: 5,
                  admin: {
                    description: 'The iteration after which the fruits are created.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'density',
                  required: true,
                  min: 0,
                  max: 1,
                  defaultValue: 0.5,
                  admin: {
                    description: 'The density of the fruits.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'sizeX',
                  required: true,
                  min: 1,
                  max: 10,
                  defaultValue: 4,
                  admin: {
                    description: 'The width of the fruits.',
                    width: '20%',
                  },
                },
                {
                  type: 'number',
                  name: 'sizeY',
                  required: true,
                  min: 1,
                  max: 10,
                  defaultValue: 4,
                  admin: {
                    description: 'The height of the fruits.',
                    width: '20%',
                  },
                },
                {
                  type: 'text',
                  name: 'color',
                  defaultValue: '#441100',
                  admin: {
                    components: {
                      Field: colorPicker,
                    },
                    description: 'The color of the fruits.',
                    width: '20%',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
