import type { CollectionConfig } from 'payload'

export const Audio: CollectionConfig = {
  slug: 'audio',
  admin: {
    group: 'Media',
  },
  upload: {
    staticDir: 'audio',
    mimeTypes: ['audio/*'],
  },
  access: {
    read: () => true,
  },
  upload: true,
}
