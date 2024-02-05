import { Translation } from "../../contracts";
import { http } from "../../http";

export async function _get(): Promise<Translation[]> {
  const response = await http.get("/me/translations");
  return response.data;
}
