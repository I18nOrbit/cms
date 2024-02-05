import { Credentials } from "../../contracts";
import { http } from "../../http";
import { LoginContract } from "./types";

export async function _post(data: LoginContract): Promise<Credentials> {
  const response = await http.post("/auth/login", data);

  return response.data;
}
