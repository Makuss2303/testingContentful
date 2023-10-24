"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import IssueItem, { Item } from "@/components/molecules/issuesItem"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"

const Issues = () => {
  const [title, setTitle] = useState('')
  const [item, setItem] = useState([])
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(true)
    getDataContentful('intro')
      .then((response) =>{
        if (response !== null) {
          setTitle(response[0]?.fields?.introTitle as string)
          setItem(response[0]?.fields?.introItem as [])
          setChecked(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  
  return (
    <div className="issues">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {title && <WakkaTitle text={title} />}
          <div className="issues-list">
            {Array.isArray(item) && item.map((item:Item, index:number) => (
              <IssueItem key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Issues
