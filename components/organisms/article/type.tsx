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
  
  export type PropArticleItem = {
    title: string
    link: string
    number: number
    thumbnail: ImageProps
    targetBlank: Boolean
  }

  export type PropArticleItemField = {
    fields: PropArticleItem
  }
  
  export type PropArticle = {
    data: PropArticleItemField
  }
  