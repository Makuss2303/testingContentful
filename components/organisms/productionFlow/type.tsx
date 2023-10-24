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
  
  export type FlowItemField = {
    fields: {
      image: ImageProps
      text: TextProps
      title: string
    }
  }
  
  export type TypeFlow = {
    title: string
    flowItem: FlowItemField[]
  }
  
  export type PropFlowItem = {
    data: FlowItemField
    order: number
  }
  