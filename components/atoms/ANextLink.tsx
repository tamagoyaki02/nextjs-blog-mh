import React from 'react'
import Link from 'next/link'

interface Props {
  href: string;
  as?: string;
  children: React.ReactNode;
}

const ANextLink: React.FC<Props> = (props: Props) => {
  const { href, as, children } = props;
  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  )
}

export default ANextLink;
