import React from 'react'
import ALogo from '@/components/atoms/ALogo'
import MMenu from '@/components/molecules/MMenu'

const OGlobalHeader: React.FC = () => {
  return (
    <nav>
      <div className="flex max-w-screen-md pl-12 pt-4 mx-auto justify-between">
        <div className="">
          <ALogo />
        </div>
        <MMenu />
      </div>
    </nav>
  )
}

export default OGlobalHeader;
