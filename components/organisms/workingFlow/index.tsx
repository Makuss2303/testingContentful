"use client"

import React from "react"
import WakkaTitle from "@/components/atoms/title"
import Image from "@/components/atoms/image"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { TypeWorkingFlow } from "@/components/organisms/workingFlow/type"

const WorkingFlow: React.FC = () => {
  const [title, setTitle] = useState('')
  const [structureTitle, setStructureTitle] = useState('')
  const [structureText, setStructureText] = useState('')
  const [imagePC, setImagePC] = useState('')
  const [imageSP, setImageSP] = useState('')
  const [checked, setChecked] = useState(true)
  
  useEffect(() => {
    setChecked(true)
    getDataContentful('structureMerit')
      .then((response) => {
      if (response !== null) {
        let fieldData = response[0]?.fields as TypeWorkingFlow

        setTitle(fieldData?.title)
        setStructureTitle(fieldData?.structureTitle)

        let structureText= fieldData.structureText?.content[0]?.content[0]?.value
        setStructureText(structureText)

        let imagePC = fieldData?.structureImagePC?.fields?.file?.url
        setImagePC(imagePC)

        let imageSP = fieldData?.structureImageSP?.fields?.file?.url
        setImageSP(imageSP)

        setChecked(false)
      }
    })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <div className="workingFlow" id="workingflow">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          {title && <WakkaTitle text={title} />}

          <div className="workingFlow__subtitle">
            {structureTitle && <h3>{structureTitle}</h3>}
          </div>

          {structureText && (
            <p
              className="workingFlow__describe"
              dangerouslySetInnerHTML={{ __html: structureText }}
            />
          )}
          <div className="workingFlow__chart">
            <figure className="workingFlow__chart-traditional">
              {imagePC && (
                <Image
                  src={imagePC}
                  alt="workingFlow"
                />
              )}
            </figure>
            <figure className="workingFlow__chart-headless">
              {imageSP && (
                <Image
                  src={imageSP}
                  alt="workingFlow"
                />
              )}
            </figure>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkingFlow
