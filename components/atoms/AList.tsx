import React from "react";

interface AList {
  Ul: typeof Ul;
  Li: typeof Li;
}

interface Props {
  children: React.ReactNode;
}

const Ul: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <ul className="ml-6">{children}</ul>
  )
}
const Li: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <li className="list-disc">{children}</li>
  )
}

const AList: React.FC<Props> & AList = () => null;
AList.Ul = Ul;
AList.Li = Li;

export default AList;
