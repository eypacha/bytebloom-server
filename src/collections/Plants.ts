import type { CollectionConfig } from 'payload'

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
            width: '50%',
          },
        },
        {
          type: 'text',
          name: 'description',
          label: 'Description',
          admin: {
            description: 'Short description of the plant.',
            width: '50%',
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
      type: 'array',
      name: 'varieties',
      label: 'Varieties',
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
          name: 'Branchs',
          label: 'Branchs',
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
                  max: 100,
                  defaultValue: 10,
                  admin: {
                    description: 'The width of the branch.',
                    width: '33%',
                  },
                },
                {
                  type: 'number',
                  name: 'widthCutoff',
                  required: true,
                  label: 'Width Cutoff',
                  min: 0,
                  max: 100,
                  defaultValue: 10,
                  admin: {
                    description: 'The cutoff width of the branch.',
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
                  defaultValue: 0.1,
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
