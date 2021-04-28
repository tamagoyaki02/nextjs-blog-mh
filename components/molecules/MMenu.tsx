import React from 'react'
import siteconfig from '@/siteconfig.json'
import ANextLink from '@/components/atoms/ANextLink'

const MMenu: React.FC = () => {
  return (
    <ul className="">
      <li className="inline-block w-28">
        <ANextLink href="/about">
          <a className="hover:text-custom-frost1">
            {siteconfig.pages.about.title}
          </a>
        </ANextLink>
      </li>
      <li className="inline-block w-28">
        <ANextLink href="/about">
          <a className="hover:text-custom-frost1">
            {`${siteconfig.pages.about.title}2`}
          </a>
        </ANextLink>
      </li>
    </ul>
  )
}

export default MMenu;
