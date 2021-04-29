import React from 'react'

interface ABlogHeading {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
}

interface Props {
  children: React.ReactNode;
}

const H1: React.FC<Props> = (props: Porps) => {
  const { children } = props;
  return (
    <h1 className="py-12 text-custom-frost1 font-bold">{children}</h1>
  )
}
const H2: React.FC<Props> = (props: Porps) => {
  const { children } = props;
  return (
    <h2 className="pt-12 text-custom-frost1 pb-4 font-bold">{children}</h2>
  )
}
const H3: React.FC<Props> = (props: Porps) => {
  const { children } = props;
  return (
    <h3 className="pt-12 text-custom-frost1 font-bold">{children}</h3>
  )
}
const H4: React.FC<Props> = (props: Porps) => {
  const { children } = props;
  return (
    <h4 className="py-8 text-custom-frost1 font-bold">{children}</h4>
  )
}
const H5: React.FC<Props> = (props: Porps) => {
  const { children } = props;
  return (
    <h5 className="py-8 text-custom-frost1 font-bold">{children}</h5>
  )
}

const ABlogHeading: React.FC<Props> & ABlogHeading = () => {
  ABlogHeading.H1 = H1;
  ABlogHeading.H2 = H2;
  ABlogHeading.H3 = H3;
  ABlogHeading.H4 = H4;
  ABlogHeading.H5 = H5;
}

export default ABlogHeading;
