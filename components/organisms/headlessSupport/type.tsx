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

export type CompatibleCmsItemField = {
  fields: {
    exampleHeading: string
    text: TextProps
    image: ImageProps
    title: string
    price: number
    period: number
  }
}

export type TypeHeadlessSupport = {
  compatibleCmsTitle: string
  compatibleCmsText: string
  compatibleCmsItem: CompatibleCmsItemField[]
  cmsExampleTitle: string
  cmsExampleItem: ImageProps
}

export type PropCompatibleCmsItem = {
  data: CompatibleCmsItemField
}
