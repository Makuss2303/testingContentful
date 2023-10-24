"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { PropFlowItem } from "@/components/organisms/productionFlow/type"

const ProductionFlowItem: React.FC<PropFlowItem> = (props) => {
  const image = props?.data?.fields?.image?.fields?.file?.url
  const title = props?.data?.fields?.title
  const text = props?.data?.fields?.text?.content[0]?.content[0]?.value
  const order = props?.order
  return (
    <div className="productionFlow-item">
      <figure className="productionFlow-item__image">
        {image && <span>{order + 1}</span>}
        {image && (
          <Image
            src={image}
            alt="ProductionFlowItem"
          />
        )}
      </figure>
      <div className="productionFlow-item__text">
        {title && (
          <h3
            className="productionFlow-item__text-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {text && (
          <p
            className="productionFlow-item__text-describe"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>
      {text && (
        <p
          className="productionFlow-item__describe"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  )
}

export default ProductionFlowItem
