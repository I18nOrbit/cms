import { useMutation } from "@tanstack/react-query";
import { _post } from "./[POST]";
import { Credentials } from "../../contracts";
import { LoginContract } from "./types";

export const postLoginQueryKey = ["me", "auth"];

export function usePostLogin() {
  return useMutation<Credentials, unknown, LoginContract, unknown>({
    mutationKey: postLoginQueryKey,
    mutationFn: (data) => _post(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
}
