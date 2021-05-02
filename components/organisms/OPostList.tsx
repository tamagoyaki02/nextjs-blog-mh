import React from 'react'
import MPost from "@/components/molecules/MPostList"

export interface IPostItem {
  resourceId: string;
  date: string;
  title: string;
}

interface Props {
  posts: IPostItem[];
}

const OPostList: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <ul className="p-8">
      {
        posts.map((post) => (
          <li key={post.resourceId}>
            <MPost
              resourceId={post.resourceId}
              date={post.date}
              title={post.title}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default OPostList;
