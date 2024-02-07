export interface TranslationRaw {
  key: string;
  group: string;
  language: string;
  message: string;
}

export interface Translation {
  key: string;
  group: string;
  messages: TranslationMessage[];
}

interface TranslationMessage {
  language: string;
  message: string;
}

export interface TranslationResponse {
  data: Translation[];
  meta: {
    current_page: number;
    first_page: number;
    last_page: number;
    per_page: number;
    total: number;
    languages: string[];
  };
}
