import React from 'react'
import Link from 'next/link'
import siteconfig from '@/siteconfig.json'

const ALogo: React.FC = () => {
  return (
    <Link href="/">
      <span className="font-logo text-xl hover:text-custom-frost1">
        <a>{siteconfig.name}</a>
      </span>
    </Link>
  )
}

export default ALogo;
