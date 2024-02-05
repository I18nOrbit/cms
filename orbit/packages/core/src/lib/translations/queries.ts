import { useQuery } from "@tanstack/react-query";
import { _get } from "./[GET]";

export const getTranslationsQueryKey = ["me", "translations"];

export function useGetTranslations() {
  return useQuery({
    queryKey: getTranslationsQueryKey,
    queryFn: () => _get(),
  });
}
