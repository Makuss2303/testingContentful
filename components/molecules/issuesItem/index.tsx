import React from "react"
import Image from "@/components/atoms/image"

type FileProps = {
  url: string
}

type FieldsImageProps = {
  file: FileProps
}

type ImageProps = {
  fields: FieldsImageProps
}

type FieldsProps = {
  image: ImageProps
  text: string
}

export type Item = {
  fields: FieldsProps
}

type ItemProps = {
  data: Item
}

const IssueItem: React.FC<ItemProps> = (props) => {
  const text = props?.data?.fields?.text
  const image = props?.data?.fields?.image?.fields?.file?.url
  return (
    <div className="issues-item">
      <figure>
        {image && (
          <Image
            src={image}
            alt="issueItem"
          />
        )}
      </figure>
      {text && (
        <h3
          className="issues-item__title"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  )
}

export default IssueItem
