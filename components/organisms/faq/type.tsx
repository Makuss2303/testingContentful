type PropFaqItem = {
  answer: string
  number: number
  question: string
}
export type PropFaqItemField = {
  fields: PropFaqItem
}

export type PropFaq = {
  data: PropFaqItemField
  order: number
}
