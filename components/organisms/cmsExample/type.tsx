type ImageWH = {
  image: {
    width: number
    height: number
  }
}
type FileProps = {
  url: string
  details: ImageWH
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

export type TypeCmsExample = {
  cmsExampleTitle: string
  cmsExampleItem: ImageProps[]
}
