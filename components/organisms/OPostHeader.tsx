import React from "react";

export interface Props {
  frontMatter: FrontMatter;
}

const OPostHeader: React.FC<Props> = (props: Props) => {
  const { frontMatter } = props;
  return (
    <div className="py-8">
      <div className="pb-2 text-custom-night3">{frontMatter.date}</div>
      <h1 className="text-3xl text-custom-frost1 pb-4 border-b-2 border-custom-aurora4">{frontMatter.title}</h1>
    </div>
  )
}

export default OPostHeader;
