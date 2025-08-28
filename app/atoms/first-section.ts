import { atom } from "jotai";
import { CMSResponse } from "../types/reponses.types";
import { FirstSectionContentData, Section } from "../types/sections.types";

export const currentFirstSectionTextIndexAtom = atom(0);

export const firstSectionDataAtom = atom(async () => {
  const response = await fetch("http://localhost:8080/portfolio/section/1");

  const data = (await response.json()) as CMSResponse<
    Section<FirstSectionContentData>
  >;

  return data.data;
});
