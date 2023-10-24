type FileProps = {
  url: string
}
type ImageFieldProps = {
  title: string
  description: string
  file: FileProps
}
type ImageProps = {
  fields: ImageFieldProps
}

type ValueProps = {
  value: string
}
type ContentProps = {
  content: ValueProps[]
}
type TextProps = {
  content: ContentProps[]
}

type ButtonFieldsProps = {
  linkText: string
  linkURL: string
  targetBlank: boolean
}
type ButtonProps = {
  fields: ButtonFieldsProps
}

export type PropsMainVisual = {
  mainTitle: string
  mainImage: ImageProps
  subTitle: string
  text: TextProps
  button: ButtonProps
}

export type TypeMainVisual = {
  data: PropsMainVisual
}
