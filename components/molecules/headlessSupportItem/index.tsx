"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { PropCompatibleCmsItem } from "@/components/organisms/headlessSupport/type"


const HeadlessSupportItem: React.FC<PropCompatibleCmsItem> = (props) => {
  const title = props?.data?.fields?.title
  const text = props?.data?.fields?.text?.content[0]?.content[0]?.value
  const image = props?.data?.fields?.image?.fields?.file?.url
  const price = props?.data?.fields?.price
  const period = props?.data?.fields?.period
  return (
    <div className="headlessSupport-item">
      <div className="headlessSupport-item__image">
        <figure>
          {image && (
            <Image
              src={image}
              alt="HeadlessSupportItem"
            />
          )}
        </figure>
      </div>
      {title && (
        <h3
          className="headlessSupport-item__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {text && (
        <p
          className="headlessSupport-item__describe"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      <p className="headlessSupport-item__example">ページ数1枚の制作例</p>
      <div className="headlessSupport-item__pricing">
        {price && (
          <div className="price">
            <h4>予算</h4>
            <span>{price}</span>
            <span>万円〜</span>
          </div>
        )}
        {period && (
          <div className="period">
            <h4>期間</h4>
            <span>{period}</span>
            <span>ヶ月〜</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeadlessSupportItem
