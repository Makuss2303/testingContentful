type FileProps = {
  url: string
}
type ImageFieldProps = {
  title: string
  description: string
  file: FileProps
}
export type ImageProps = {
  fields: ImageFieldProps
}

type ValueProps = {
  value: string
}
type ContentProps = {
  content: ValueProps[]
}
export type TextProps = {
  content: ContentProps[]
}

export type TagProps = {
  fields: {
    text: string
  }
}
type PropDevelopmentItem = {
  title: string
  clientName: string
  link: string
  thumbnail: ImageProps
  tag: TagProps
}
export type PropDevelopmentItemField = {
  fields: PropDevelopmentItem
}

export type PropDevelopment = {
  data: PropDevelopmentItemField
}
