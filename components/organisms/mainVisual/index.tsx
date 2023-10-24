"use client"

import React from "react"
import Image from "@/components/atoms/image"
import WakkaButton from "@/components/atoms/button"
import { TypeMainVisual } from "@/components/organisms/mainVisual/type"

const MainVisual: React.FC<TypeMainVisual> = (props) => {
  const button = props?.data?.button?.fields
  const mainImage = props?.data?.mainImage?.fields?.file?.url
  const mainTitle = props?.data?.mainTitle
  const subTitle = props?.data?.subTitle
  const text = props?.data?.text?.content[0]?.content[0]?.value

  return (
    <div className="mainVisual">
      <div className="container-full">
        <div className="mainVisual-wrap">
          <figure>
            {mainImage && (
              <Image src={mainImage} alt="main_visual" />
            )}
          </figure>
          <div className="mainVisual-describe">
            {mainTitle && (
              <h1
                className="mainVisual-describe__title"
                dangerouslySetInnerHTML={{ __html: mainTitle }}
              />
            )}
            {subTitle && (
              <h2
                className="mainVisual-describe__miniTitle"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            {text && (
              <div
                className="mainVisual-describe__content"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {button && (<WakkaButton text={button.linkText} link={button.linkURL} target={button.targetBlank}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVisual
