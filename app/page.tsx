import getDataContentful from "@/utils/contentful-data"

import MainVisual from "@/components/organisms/mainVisual"
import { PropsMainVisual } from "@/components/organisms/mainVisual/type"

import TopAbout from "@/components/organisms/topAbout"
import { PropsTopAbout } from "@/components/organisms/topAbout/type"

import Contact from "@/components/organisms/headlessContact"
import { PropContact } from "@/components/organisms/headlessContact/type"

import Issues from "@/components/organisms/issues"
import Solution from "@/components/organisms/solution"
import WorkingFlow from "@/components/organisms/workingFlow"
import Advantages from "@/components/organisms/advantages"
import HeadlessSupport from "@/components/organisms/headlessSupport"
import CmsExample from "@/components/organisms/cmsExample"
import Features from "@/components/organisms/features"
import Development from "@/components/organisms/development"
import ProductionFlow from "@/components/organisms/productionFlow"
import Article from "@/components/organisms/article"
import Faq from "@/components/organisms/faq"
import Form from "@/components/organisms/form"

export const revalidate = 1 //make requests will be subject to revalidation after a certain period

async function getDataMainVisual() {
  let data = await getDataContentful('mainVisual')
  let dataItem = data[0].fields
  return dataItem ? {
    mainTitle: dataItem.mainTitle,
    mainImage: dataItem.mainImage,
    subTitle: dataItem.subTitle,
    text: dataItem.text,
    button: dataItem.button,
  } : {}
}

async function getDataTopAbout() {
  let data = await getDataContentful('mainVisual')
  let dataItem = data[0].fields
  return dataItem ? {
    outlineHeading: dataItem.outlineHeading,
    outlineImage: dataItem.outlineImage,
    outlineText: dataItem.outlineText
  } : {}
}

async function getDataCTA() {
  let data = await getDataContentful('dataCTA')
  let dataItem = data[0].fields
  return dataItem ? dataItem : {}
}


export default async function Home() {
  const dataMainVisual = await getDataMainVisual() as PropsMainVisual
  const dataTopAbout = await getDataTopAbout() as PropsTopAbout
  const dataCTA = await getDataCTA() as PropContact

  return (
    <>
      <MainVisual data={dataMainVisual}/>
      <TopAbout data={dataTopAbout} />
      {dataCTA?.ctaMainVisual && (<Contact type="background1" data={dataCTA} />)}
      <Issues />
      <Solution />
      {dataCTA?.ctaIntro && (<Contact type="background2" data={dataCTA} />)}
      <WorkingFlow />
      <Advantages />
      {dataCTA?.ctaStructureMerit && (<Contact type="background1" data={dataCTA} />)}
      <HeadlessSupport />
      <CmsExample />
      <Features />
      {dataCTA?.ctaFeature && (<Contact type="background2" data={dataCTA} />)}
      <Development />
      <ProductionFlow />
      <Contact type="background1" data={dataCTA} />
      <Article />
      <Faq />
      {dataCTA?.ctaFaq && (<Contact type="background3" data={dataCTA} />)}
      <Form />
    </>
  )
}
