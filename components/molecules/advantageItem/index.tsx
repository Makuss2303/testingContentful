"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { PropAdvantageItem } from "@/components/organisms/advantages/type"


const AdvantageItem: React.FC<PropAdvantageItem> = (props) => {
  const image = props?.data?.fields?.image?.fields?.file?.url
  const title = props?.data?.fields?.title
  const text = props?.data?.fields?.text?.content[0]?.content[0]?.value
  const order = props?.order
  return (
    <div className="advantages-item">
      <figure>
        {image && (
          <Image
            src={image}
            alt="AdvantageItem"
          />
        )}
        <span>{order + 1}</span>
      </figure>
      {title && (
        <h3
          className="advantages-item__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {text && (
        <div
          className="advantages-item__describe"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  )
}

export default AdvantageItem
