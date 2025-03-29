import type { CollectionConfig } from 'payload'

export const Plants: CollectionConfig = {
  slug: 'plants',
  admin: {
    useAsTitle: 'name',
    group: 'Main',
     defaultColumns: ["name", "lSystem", "previewImage"],
  },
  auth: false,
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
                type: 'relationship',
                name: 'lSystem',
                label: 'L-System',
                relationTo: 'lsystems',
                required: true,
                admin: {
                    description: 'The L-System associated with this plant.',
                },
            },
            {   type: 'relationship',
                name: 'previewImage',
                label: 'Preview Image',
                relationTo: 'images',
                required: true,
                admin: {
                    description: 'Preview image of the plant.',
                },
            }
        ]
    },
    {
        type: 'group',
        name: 'params',
        label: 'Parameters',
        fields: [
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
                },
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
                        ]
                    },                    
                    {
                        type: 'row',
                        fields: [                    {
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
                            defaultValue: .1,
                            admin: {
                                description: 'The reduction of the length of a new branch.',
                                width: '33%',
                            },
                        },]
                    },                     
                ]
            }
        ]
    }
    
  ],
}