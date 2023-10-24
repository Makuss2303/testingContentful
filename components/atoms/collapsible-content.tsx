"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { PropFaq } from "@/components/organisms/faq/type"

const FaqItem: React.FC<PropFaq> = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const answer = props?.data?.fields?.answer
  const question = props?.data?.fields?.question
  const order = props?.order

  function toggleActive() {
    setIsActive(!isActive)
    updateContentMaxHeight(!isActive)
  }

  function updateContentMaxHeight(checkActive: boolean) {
    if (checkActive) {
      if (ref.current && ref.current.scrollHeight) {
        const height = ref.current.scrollHeight
        setHeight(height)
      }
    } else {
      setHeight(0)
    }
  }

  useEffect(() => {
    const windowResize = () => {
      updateContentMaxHeight(isActive)
    }
    window.addEventListener("resize", windowResize)
    return () => window.removeEventListener("resize", windowResize)
  }, [isActive])

  useEffect(() => {
    if (order === 0) {
      setIsActive(true)
      updateContentMaxHeight(true)
    }
  }, [])

  return (
    <div className="collapse-item">
      <figure className="faq-question-icon">
        <Image
          src="/images/faq/question-icon.png"
          alt="question"
          fill
          sizes="(max-width: 170px) 100vw"
        />
      </figure>
      <div className="faq-item">
        {question && (
          <div className="faq-itemQ-wrap" onClick={toggleActive}>
            <div className="faq-itemQ">{question}</div>
            <div className="icon-wrap">
              <div className={`toggle ${isActive ? "" : "close"}`}></div>
            </div>
          </div>
        )}
        {answer && (
          <div
            className={`faq-itemA ${isActive ? "show" : ""}`}
            ref={ref}
            style={{ maxHeight: height }}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        )}
      </div>
    </div>
  )
}

export default FaqItem
