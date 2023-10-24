"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import ArticleItem from "@/components/molecules/articleItem"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { ImageProps, PropArticleItemField } from "@/components/organisms/article/type"
import { Entry, EntrySkeletonType } from "contentful"

const Article = () => {
  const [data, setData] = useState<PropArticleItemField[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful('document')
      .then((response) => {
      if (response !== null) {
        let fieldData = response.reduce((result: PropArticleItemField[], element: Entry<EntrySkeletonType, undefined, string>) => {
          let objectTest = {
            'fields': {
              'link': element.fields.link as string,
              'title':  element.fields.title as string,
              'number':  element.fields.number as number,
              'thumbnail':  element.fields.thumbnail as ImageProps,
              'targetBlank': element.fields.targetBlank as boolean
            }
          }
          result.push(objectTest)
          return result
        }, []);
        setData(fieldData)
        setChecked(false)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  function SortData(data: Array<PropArticleItemField>) {
    if (Array.isArray(data)) {
      let sortedData = data.slice(0)
      sortedData.sort( (a: PropArticleItemField, b: PropArticleItemField) => {
        let numberA = a?.fields?.number
        let numberB = b?.fields?.number
        return numberA - numberB
      })
      return sortedData
    }
    return []
  }

  return (
    <div className="article" id="ariticles">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <WakkaTitle text="関連記事＆関連資料" />
          <div className="article-list">
            {SortData(data).map((item: PropArticleItemField, index: number) => (
              <ArticleItem key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Article
