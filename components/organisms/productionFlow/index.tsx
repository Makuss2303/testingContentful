"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import ProductionFlowItem from "@/components/molecules/productionFlowItem"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { TypeFlow, FlowItemField } from "@/components/organisms/productionFlow/type"

const ProductionFlow = () => {
  const [title, setTitle] = useState('')
  const [item, setItem] = useState<FlowItemField[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful('flow')
      .then((response) => {
      if (response !== null) {
        let fieldData = response[0].fields as TypeFlow
        setTitle(fieldData?.title)
        setItem(fieldData?.flowItem)
        setChecked(false)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="productionFlow" id="productionFlow">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {title && <WakkaTitle text={title} />}
          <div className="productionFlow-list">
            {Array.isArray(item) && item.map((item:FlowItemField, index:number) => (
              <ProductionFlowItem key={index} order={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductionFlow
