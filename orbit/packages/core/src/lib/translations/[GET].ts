import {
  Translation,
  TranslationRaw,
  TranslationResponse,
} from "../../contracts";
import { http } from "../../http";

export async function _get(): Promise<TranslationResponse> {
  // todo: remove TranslationRaw when backend is ready
  // const response: TranslationRaw[] = await http.get("/translations");
  const mock: TranslationResponse = {
    data: [
      {
        key: "hello_there",
        group: "shared",
        messages: [
          {
            language: "en-US",
            message: "Hello there",
          },
          {
            language: "es-ES",
            message: "Hola",
          },
        ],
      },
    ],
    meta: {
      current_page: 1,
      first_page: 1,
      last_page: 1,
      per_page: 10,
      total: 1,
      languages: ["en-US", "es-ES"],
    },
  };

  return mock;
}
