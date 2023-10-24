"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import FaqItem from "@/components/atoms/collapsible-content"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { PropFaqItemField } from "@/components/organisms/faq/type"
import { Entry, EntrySkeletonType } from "contentful"

const Faq = () => {
  const [data, setData] = useState<PropFaqItemField[]>([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful('faq')
    .then((response) => {
    if (response !== null) {
      let fieldData = response.reduce((result: PropFaqItemField[], element: Entry<EntrySkeletonType, undefined, string>) => {
        let objectTest = {
          'fields': {
            'answer': element.fields.answer as string,
            'number': element.fields.number as number,
            'question': element.fields.question as string,
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

  function SortData(data: Array<PropFaqItemField>) {
    if (Array.isArray(data)) {
      let sortedData = data.slice(0)
      sortedData.sort( (a: PropFaqItemField, b: PropFaqItemField) => {
        let numberA = a?.fields?.number
        let numberB = b?.fields?.number
        return numberA - numberB
      })
      return sortedData
    }
    return []
  }

  return (
    (data.length > 0) && <div className="faq" id="faq">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <WakkaTitle text="よくある質問" />
          <div className="faq-list">
            {SortData(data).map((item: PropFaqItemField, index: number) => (
              <FaqItem key={index} data={item} order={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Faq
