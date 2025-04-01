import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <path
            d="M 25 25 L 75 25 L 75 50 L 100 50 L 100 200 L 75 200 L 75 75 L 0 75 L 0 50 L 25 50 L 25 25 Z M 125 0 L 175 0 L 175 25 L 200 25 L 200 50 L 100 50 L 100 25 L 125 25 L 125 0 Z"
            fill="rgb(14, 133, 18)"
          />
        </svg>
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
