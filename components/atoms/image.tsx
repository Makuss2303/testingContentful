
"use client"

import Image from "next/image"

interface DataImage {
  src: string
  alt: string
}

const Page: React.FC<DataImage>= ({src, alt}) =>  {
  return (
  <Image 
    src={'https:'+src}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
  />
  )
}

export default Page