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

export type FeatureItemField = {
  fields: {
    image: ImageProps
    text: TextProps
    title: string
  }
}

export type TypeFeature = {
  title: string
  featureItem: FeatureItemField[]
}

export type PropFeatureItem = {
  data: FeatureItemField
  order: number
}
