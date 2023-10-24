"use client"

import React from "react"
import Image from "@/components/atoms/image"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import WakkaTitle from "@/components/atoms/title"
import getDataContentful from "@/utils/contentful-data"
import { TypeCmsExample, ImageProps } from "@/components/organisms/cmsExample/type"


const CmsExample = () => {
  const [cmsExampleTitle, setCmsExampleTitle] = useState("")
  const [cmsExampleItem, setCmsExampleItem] = useState<ImageProps[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful("compatibleCms")
      .then((response) => {
        if (response !== null) {
          let fieldData = response[0]?.fields as TypeCmsExample
          setCmsExampleTitle(fieldData?.cmsExampleTitle)
          setCmsExampleItem(fieldData?.cmsExampleItem)
          setChecked(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="cmsExample" id="CMSexample">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {cmsExampleTitle && <WakkaTitle text={cmsExampleTitle} />}
          <div className="cmsExample-list">
            {Array.isArray(cmsExampleItem) &&
              cmsExampleItem.map((item: ImageProps, index: number) => (
                <figure
                  key={index}
                  className={"cmsExample" + (index + 1)}
                  style={{ width: item?.fields?.file?.details?.image?.width }}
                >
                  <Image src={item?.fields?.file?.url} alt="cms" />
                </figure>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CmsExample
