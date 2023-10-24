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

export type TypeAdvantages = {
  meritTitle: string
  meritItem: PropAdvantageItemField[]
}

export type PropAdvantageItemField = {
  fields: {
    title: string
    text: TextProps
    image: ImageProps
  }
}

export type PropAdvantageItem = {
  data: PropAdvantageItemField
  order: number
}
