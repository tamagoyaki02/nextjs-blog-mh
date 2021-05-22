
import React from "react";

interface Props {
  src: string;
  alt: string;
  title?: string;
}

const AImage: React.FC<Props> = (props: Props) => {
  const { src, alt, title } = props;
  return (
    <>
      <img className="py-4" src={src} alt={alt} />
      {title && (
        <span className="block text-center text-gray-600">{title}</span>
      )}
    </>
  )
}

export default AImage;
