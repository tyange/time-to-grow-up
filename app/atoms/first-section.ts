import { atom } from "jotai";
import { CMSResponse } from "../types/reponses.types";
import { FirstSectionContentData, Section } from "../types/sections.types";

export const currentFirstSectionTextIndexAtom = atom(0);

export const firstSectionDataAtom = atom(null, async (_get, set) => {
  const response = await fetch("http://localhost:8080/portfolio/section/1");
  const data = (await response.json()) as CMSResponse<
    Section<FirstSectionContentData>
  >;
  set(currentFirstSectionTextIndexAtom, data.data.content_data.texts.length);
  return data.data;
});
