"use client"

import React from "react"
import WakkaButton from "@/components/atoms/button"
import { TypeContact } from "@/components/organisms/headlessContact/type"

const Contact: React.FC<TypeContact> = ({type, data}) => {
  const title = data?.title
  const button = data?.button?.fields
  const text = data?.text?.content[0]?.content[0]?.value
  return (
    <div className="headlessContact">
      <div className={type}>
        <div className="container">
          <div className="headlessContact-wrap">
            <div className="headlessContact__text">
              {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
              {text && (
                <div
                  className="describe"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
            </div>
            <div className="headlessContact__button">
              {button && (<WakkaButton text={button.linkText} link={button.linkURL} target={button.targetBlank}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
