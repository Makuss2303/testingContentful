"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import AdvantageItem from "@/components/molecules/advantageItem"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { TypeAdvantages, PropAdvantageItemField } from "@/components/organisms/advantages/type"

const Advantages = () => {
  const [meritTitle, setMeritTitle] = useState('')
  const [item, setItem] = useState<PropAdvantageItemField[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful('structureMerit')
      .then((response) => {
      if (response !== null) {
        let fieldData = response[0]?.fields as TypeAdvantages
        setMeritTitle(fieldData.meritTitle)
        setItem(fieldData?.meritItem)
        setChecked(false)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <div className="advantages">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {meritTitle && <WakkaTitle text={meritTitle} />}
          <div className="advantages-list">
            {Array.isArray(item) && item.map((item:PropAdvantageItemField, index:number) => (
              <AdvantageItem key={index} order={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Advantages
