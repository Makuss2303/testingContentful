type ButtonFieldsProps = {
  linkText: string
  linkURL: string
  targetBlank: boolean
}
type ButtonProps = {
  fields: ButtonFieldsProps
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

export type PropContact = {
  title: string
  text: TextProps
  button: ButtonProps
  ctaMainVisual: boolean
  ctaIntro: boolean
  ctaStructureMerit: boolean
  ctaFeature: boolean
  ctaFaq: boolean
}

export type TypeContact = {
  type: string
  data: PropContact
}
