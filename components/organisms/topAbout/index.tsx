"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { TypeTopAbout } from "@/components/organisms/topAbout/type"

const TopAbout: React.FC<TypeTopAbout> = (props) => {
  const outlineImage = props.data?.outlineImage?.fields?.file?.url
  const outlineHeading = props.data?.outlineHeading
  const outlineText = props.data?.outlineText?.content[0]?.content[0]?.value

  return (
    <div className="topAbout" id="about">
      <div className="container">
        <figure>
          {outlineImage && (
            <Image
            src={outlineImage}
              alt="top_about"
            />
          )}
        </figure>
        {outlineHeading && (
          <h2
            className="topAbout__title"
            dangerouslySetInnerHTML={{ __html: outlineHeading }}
          />
        )}
        {outlineText && (
          <div
            className="topAbout__content"
            dangerouslySetInnerHTML={{ __html: outlineText }}
          />
        )}
      </div>
    </div>
  )
}

export default TopAbout
