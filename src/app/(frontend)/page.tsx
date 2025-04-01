import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Logo from '../../components/logo'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `https://dev.eypacha.com`

  return (
    <div className="home">
      <div className="content">
        <Logo />
        <h1>bytebloom</h1>
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
        </div>
      </div>
      <div className="footer">
        <p>by</p>
        <a className="codeLink" href={fileURL}>
          <code>@eypacha</code>
        </a>
      </div>
    </div>
  )
}
