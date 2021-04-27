import React from 'react'
import siteconfig from '@/siteconfig.json'

const OIndexHeader: React.FC = () => {
  return (
    <div className="pt-8 flex justify-center">
      <h1 className="text-3xl text-custom-frost1 pb-2 pt-8 border-b-2 border-custom-aurora4">
        {siteconfig.pages.blog.title}
      </h1>
    </div>
  )
}

export default OIndexHeader;
