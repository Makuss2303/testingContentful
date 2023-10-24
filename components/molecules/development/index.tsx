"use client"

import React from "react"
import Image from "@/components/atoms/image"
import Link from "next/link"
import { PropDevelopment, TagProps } from "@/components/organisms/development/type"

const DevelopmentItem: React.FC<PropDevelopment> = (props) => {
  const title = props?.data?.fields?.title
  const thumbnail = props?.data?.fields?.thumbnail?.fields?.file?.url
  const clientName = props?.data?.fields?.clientName
  const link = props?.data?.fields?.link
  const tag = props?.data?.fields?.tag

  return (
    (title || thumbnail) && <Link
      className="development-item"
      href={link ? link : "/"}
      target="_blank"
    >
      <figure>
        {thumbnail && (
          <Image
            src={thumbnail}
            alt="DevelopmentItem"
          />
        )}
      </figure>
      <div className="development-item__textWrap">
        {clientName && (
          <div
            className="development-item__company"
            dangerouslySetInnerHTML={{ __html: clientName }}
          />
        )}
        {title && (
          <h3 
            className="development-item__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <div className="development-item__category">
          {Array.isArray(tag) && (tag.map((item:TagProps, index:number) => (
            <span key={index}>{item?.fields?.text ? '#' + item.fields.text : ''}</span>
          )))}
        </div>
      </div>
    </Link>
  )
}

export default DevelopmentItem
