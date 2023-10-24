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

export type TypeSolution = {
  solutionTitle: string
  solutionText: TextProps
  solutionImage1: ImageProps
  solutionImage2: ImageProps
}
