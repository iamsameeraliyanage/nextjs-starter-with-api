import { fetcher } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { GlobalContent, StrapiResponse } from "./types";

export const getGlobalContent = async (
  locale: string
): Promise<StrapiResponse<GlobalContent>> => {
  return fetcher<StrapiResponse<GlobalContent>>(
    API_ENDPOINTS.GLOBAL_CONTENT,
    locale
  );
};
