const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const fetcher = async <T>(
  endpoint: string,
  locale: string,
  options: RequestInit = {}
): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${AUTH_TOKEN}`,
    ...options.headers,
  };

  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append("locale", locale);

  const updatedURLString = url.toString();

  const response = await fetch(updatedURLString, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "An error occurred");
  }

  return response.json() as Promise<T>;
};
