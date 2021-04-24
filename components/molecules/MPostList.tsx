import React from 'react'
import Link from 'next/link'

interface IPostItem {
  resourceId: string;
  date: string;
  title: string;
}

const MPostList: React.FC<IPostItem> = (post: IPostItem) => {
  const { resourceId, date, title } = post;
  return (
    <Link href={"/blog/[...id]"} as={`/blog/${resourceId}`}>
      <div className="p-4 cursor-pointer hover:bg-custom-night1">
        <p className="pb-2 text-custom-night3">{date}</p>
        <h2>{title}</h2>
      </div >
    </Link >
  )
}

export default MPostList;
