import type { CMSResponse } from '../types/reponses.types'
import type { FirstSectionContentData, Section } from '../types/sections.types'
import { atom } from 'jotai'

export const currentFirstSectionTextIndexAtom = atom(0)

export const firstSectionDataAtom = atom(async () => {
  const response = await fetch('http://localhost:8080/portfolio/section/1')

  const data = await response.json() as CMSResponse<
    Section<FirstSectionContentData>
  >

  return data.data
})
