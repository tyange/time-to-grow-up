export interface Section<T> {
  section_id: number;
  section_type: string;
  content_data: T;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface TextDisplayStyling {
  background_color: string;
  font_size: string;
  text_align: string;
  text_color: string;
}

interface TextDisplayTiming {
  auto_advance: boolean;
  delay_between_texts: number;
  fade_duration: number;
}

export interface FirstSectionContentData {
  styling: TextDisplayStyling;
  texts: string[];
  timing: TextDisplayTiming;
}
