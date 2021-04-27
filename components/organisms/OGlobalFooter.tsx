import React from 'react'
import siteconfig from '@/siteconfig.json'

const OGlobalFooter: React.FC = () => {
  return (
    <div className="bg-custom-night1 text-center pt-4 pb-8 ">
      {siteconfig.copyright}
    </div>
  )
}

export default OGlobalFooter;
