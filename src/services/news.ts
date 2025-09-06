import type { NewsResponse } from "../types/news";

export function getNews(): Promise<NewsResponse> {
  return fetch("/api/noticias").then((res) => res.json());
}
