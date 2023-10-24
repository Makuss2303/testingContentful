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

export type TypeWorkingFlow = {
  title: string
  structureTitle: string
  structureText: TextProps
  structureImagePC: ImageProps
  structureImageSP: ImageProps
}
