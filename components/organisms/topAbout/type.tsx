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

export type PropsTopAbout = {
  outlineHeading: string
  outlineImage: ImageProps
  outlineText: TextProps
}

export type TypeTopAbout = {
  data: PropsTopAbout
}
