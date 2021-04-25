import React from 'react'
import ALogo from '@/components/atoms/ALogo'
import MMenu from '@/components/molecules/MMenu'

const OGlobalHeader: React.FC = () => {
  return (
    <nav>
      <div className="flex max-w-screen-md px-8 py-4 mx-auto items-end">
        <div className="flex-grow">
          <ALogo />
        </div>
        <MMenu />
      </div>
    </nav>
  )
}

export default OGlobalHeader;
