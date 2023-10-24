"use client"

import React from "react"
import Image from "@/components/atoms/image"
import NextImage from "next/image"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import getDataContentful from "@/utils/contentful-data"
import { TypeSolution } from "@/components/organisms/solution/type"


const Solution: React.FC = () => {
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    setChecked(true)
    getDataContentful('intro')
      .then((response) => {
        if (response !== null) {
          let fieldData = response[0]?.fields as TypeSolution

          setTitle(fieldData?.solutionTitle)

          let solutionImage1 = fieldData?.solutionImage1?.fields?.file?.url
          setImage1(solutionImage1)

          let solutionImage2 = fieldData?.solutionImage2?.fields?.file?.url
          setImage2(solutionImage2)

          let solutionText= fieldData.solutionText?.content[0]?.content[0]?.value
          setText(solutionText)

          setChecked(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <div className="solution">
      {checked ? (
        <div className="container">
          <Skeleton count={10} height={30} />
        </div>
      ) : (
        <div className="container">
          <div className="solution__transition">
            <figure>
              <NextImage
                src="/images/solution/solution-transition.png"
                alt="transition"
                fill
                sizes="(max-width: 170px) 100vw"
              />
            </figure>
          </div>
          <div className="solution__content">
            <div className="solution__content-textwrap">
              {title && (
                <h2
                  className="solution__title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {text && (
                <p
                  className="solution__describe"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
            </div>
            <div className="solution__content-imgwrap">
              <figure>
                {image1&& (
                  <Image
                    src={image1}
                    alt="transition"
                  />
                )}
              </figure>
              <figure>
                {image2 && (
                  <Image
                    src={image2}
                    alt="transition"
                  />
                )}
              </figure>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Solution
