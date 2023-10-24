"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { PropFeatureItem } from "@/components/organisms/features/type"

const FeatureItem: React.FC<PropFeatureItem> = (props) => {
  const title = props?.data?.fields?.title
  const text = props?.data?.fields?.text?.content[0]?.content[0]?.value
  const image = props?.data?.fields?.image?.fields?.file?.url
  const order = props?.order

  return (
    <div className="feature-item">
      <figure>
        {image && (
          <Image
            src={image}
            alt="FeatureItem"
          />
        )}
      </figure>
      <div className="feature-item__text">
        <div className="feature-item__text-titleWrap">
          <span className="feature-item__text-order">0{order + 1}</span>
          <h3 className="feature-item__text-title">
            {title && (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            )}
          </h3>
        </div>
        {text && (
          <p
            className="feature-item__text-describe"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>
    </div>
  )
}

export default FeatureItem
