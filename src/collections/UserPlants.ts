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
            width: '50%',
          },
        },
        {
          name: 'plant',
          type: 'relationship',
          relationTo: 'plants',
          required: true,
          admin: {
            description: 'Plant associated with the user.',
            width: '50%',
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
          type: 'text',
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
      type: 'group',
      name: 'params',
      label: 'Parameters',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'name',
              label: 'Name',
              required: true,
              admin: {
                description: 'The name of the variety.',
                width: '33%',
              },
            },
            {
              type: 'relationship',
              name: 'previewImage',
              label: 'Preview Image',
              relationTo: 'images',
              admin: {
                description: 'Preview image of the variety.',
                width: '33%',
              },
            },
            {
              type: 'number',
              name: 'maxIterations',
              required: true,
              label: 'Max Iterations',
              min: 1,
              max: 15,
              defaultValue: 7,
              admin: {
                description: 'The number of max iterations to perform.',
                width: '34%',
              },
            },
          ],
        },
        {
          type: 'group',
          name: 'branchs',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'number',
                  name: 'angle',
                  required: true,
                  label: 'Angle',
                  min: 0,
                  max: 360,
                  defaultValue: 25,
                  admin: {
                    description: 'The angle of a new branch.',
                    width: '33%',
                  },
                },
                {
                  type: 'number',
                  name: 'baseWidth',
                  required: true,
                  label: 'Base width',
                  min: 0,
                  max: 20,
                  defaultValue: 1,
                  admin: {
                    description: 'The width of the branch.',
                    width: '33%',
                  },
                },
                {
                  type: 'number',
                  name: 'widthFalloff',
                  required: true,
                  label: 'Width fallof',
                  min: 0,
                  max: 1,
                  defaultValue: 0,
                  admin: {
                    description: 'The fallof width of the branch.',
                    width: '33%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'number',
                  name: 'baseLength',
                  required: true,
                  label: 'Base Length',
                  min: 0,
                  max: 100,
                  defaultValue: 10,
                  admin: {
                    description: 'The length of the branch.',
                    width: '33%',
                  },
                },
                {
                  type: 'number',
                  name: 'maxLength',
                  required: true,
                  label: 'Max Length',
                  min: 0,
                  max: 100,
                  defaultValue: 10,
                  admin: {
                    description: 'The max length of a new branch.',
                    width: '33%',
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
                    width: '33%',
                  },
                },
              ],
            },
            {
              type: 'array',
              name: 'colors',
              label: 'Colors',
              minRows: 1,
              maxRows: 5,
              fields: [
                {
                  type: 'text',
                  name: 'color',
                  label: 'Color',
                  defaultValue: '#2d140b',
                  required: true,
                  admin: {
                    description: 'The color of the branchs.',
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
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'select',
                  name: 'shape',
                  required: true,
                  label: 'Shape',
                  defaultValue: 'circle',
                  options: [
                    {
                      label: 'Circle',
                      value: 'circle',
                    },
                    {
                      label: 'Square',
                      value: 'square',
                    },
                    {
                      label: 'Triangle',
                      value: 'triangle',
                    },
                  ],
                },
                {
                  type: 'number',
                  name: 'size',
                  required: true,
                  label: 'Size',
                  min: 0,
                  max: 100,
                  defaultValue: 10,
                  admin: {
                    description: 'The size of the leaves.',
                    width: '33%',
                  },
                },
                {
                  type: 'number',
                  name: 'angle',
                  required: true,
                  label: 'Angle',
                  min: 0,
                  max: 360,
                  defaultValue: 25,
                  admin: {
                    description: 'The angle of the leaves.',
                    width: '33%',
                  },
                },
              ],
            },
            {
              type: 'array',
              name: 'colors',
              label: 'Colors',
              minRows: 1,
              maxRows: 5,
              fields: [
                {
                  type: 'text',
                  name: 'color',
                  label: 'Color',
                  defaultValue: '#88ff33',
                  required: true,
                  admin: {
                    description: 'The color of the leaves.',
                    width: '100%',
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
