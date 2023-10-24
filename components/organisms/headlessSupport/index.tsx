"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import HeadlessSupportItem from "@/components/molecules/headlessSupportItem"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { TypeHeadlessSupport, CompatibleCmsItemField } from "@/components/organisms/headlessSupport/type"

const HeadlessSupport = () => {
  const [compatibleCMSTitle, setCompatibleCMSTitle] = useState("")
  const [compatibleCMSText, setCompatibleCMSText] = useState("")
  const [compatibleCMSItem, setCompatibleCMSItem] = useState<CompatibleCmsItemField[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful("compatibleCms")
      .then((response) => {
        if (response !== null) {
          let fieldData = response[0]?.fields as TypeHeadlessSupport
          setCompatibleCMSTitle(fieldData?.compatibleCmsTitle)
          setCompatibleCMSText(fieldData?.compatibleCmsText)
          setCompatibleCMSItem(fieldData?.compatibleCmsItem)
          setChecked(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="headlessSupport">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {compatibleCMSTitle && <WakkaTitle text={compatibleCMSTitle} />}
          {compatibleCMSText && (
            <p
              className="headlessSupport-moreinfo"
              dangerouslySetInnerHTML={{ __html: compatibleCMSText }}
            />
          )}
          <div className="headlessSupport-list">
            {Array.isArray(compatibleCMSItem) &&
              compatibleCMSItem.map((item: CompatibleCmsItemField, index: number) => (
                <HeadlessSupportItem key={index} data={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeadlessSupport
