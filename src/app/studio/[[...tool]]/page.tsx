'use client'

/**
 * Sanity Studio embedded at /studio
 * Julianna logs in here to manage journal posts and services/pricing
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
