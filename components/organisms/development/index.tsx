"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import DevelopmentItem from "@/components/molecules/development"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { ImageProps, PropDevelopmentItemField, TagProps } from "@/components/organisms/development/type"
import { Entry, EntrySkeletonType } from "contentful"

const Development = () => {
  const [data, setData] = useState<PropDevelopmentItemField[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful('example')
    .then((response) => {
    if (response !== null) {
      let fieldData = response.reduce((result: PropDevelopmentItemField[], element: Entry<EntrySkeletonType, undefined, string>) => {
        let objectTest = {
          'fields': {
            'title':  element.fields.title as string,
            'clientName':  element.fields.clientName as string,
            'thumbnail':  element.fields.thumbnail as ImageProps,
            'link':  element.fields.link as string,
            'tag': element.fields.link as TagProps
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

  function SortData(data: Array<PropDevelopmentItemField>) {
    if (Array.isArray(data) && data.length > 0) {
      return [data[0], data[1], data[2]]
    }
    return []
  }

  return (
    (data.length > 0) && <div className="development" id="development">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <WakkaTitle text="開発事例" />
          <div className="development-list">
            {SortData(data).map((item: PropDevelopmentItemField, index: number) => (
              <DevelopmentItem key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Development
