import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
  bg: StaticImageData;
}

export default function Background(props: Props) {
  return (
    <Image
      alt="Background image"
      src={props.bg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      className='-z-50'
      style={{
        objectFit: 'cover'
      }}
    />
  )
}
