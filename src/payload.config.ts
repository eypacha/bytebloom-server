// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'

import { LSystems } from './collections/LSystems'
import { Plants } from './collections/Plants'
import { Varieties } from './collections/Varieties'
import { UserPlants } from './collections/UserPlants'

import { Images } from './collections/Images'
import { Audio } from './collections/Audio'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// const isProduction = process.env.NODE_ENV === 'production'

export default buildConfig({
  cors: '*',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/components/logo',
        Icon: '/components/icon',
      },
    },
    meta: {
      title: 'Admin panel',
      titleSuffix: '🌱 Bytebloom',
      description: 'Backend for Bytebloom',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.png',
        },
      ],
    },
  },
  collections: [Users, UserPlants, LSystems, Varieties, Plants, Images, Audio],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
