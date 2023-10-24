"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import FeatureItem from "@/components/molecules/featureItem"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { TypeFeature, FeatureItemField } from "@/components/organisms/features/type"

const Features = () => {
  const [title, setTitle] = useState('')
  const [item, setItem] = useState<FeatureItemField[]>([])
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    setChecked(true)
    getDataContentful('feature')
      .then((response) => {
      if (response !== null) {
        let fieldData = response[0]?.fields as TypeFeature
        setTitle(fieldData?.title)
        setItem(fieldData?.featureItem)
        setChecked(false)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="feature" id="feature">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {title && <WakkaTitle text={title} />}
          <div className="feature-list">
            {Array.isArray(item) && item.map((item:FeatureItemField, index:number) => (
              <FeatureItem key={index} data={item} order={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Features
