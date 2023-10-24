"use client"

import React from "react"
import Image from "@/components/atoms/image"
import NextImage from "next/image"
import Link from "next/link"
import { PropArticle } from "@/components/organisms/article/type"

const ArticleItem: React.FC<PropArticle> = (props) => {
  const title = props?.data?.fields?.title
  const thumbnail = props?.data?.fields?.thumbnail?.fields?.file?.url
  const link = props?.data?.fields?.link
  const targetBlank = props?.data?.fields?.targetBlank

  return (
    <Link
      className="article-item"
      href={link ? link : "/"}
      target={targetBlank ? "_blank" : "_self"}
    >
      <figure>
        {thumbnail && (
          <Image
            src={thumbnail}
            alt="ArticleItem"
          />
        )}
      </figure>
      <div className="article-item__textWrap">
        {title && (
          <p
            className="article-item__describe"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <div className="article-item__seemore">
          <span>詳しく見る</span>
          <div className="icon-wrap">
            <NextImage
              src="/images/article/icon.png"
              alt="icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleItem
