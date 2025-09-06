import { http, HttpResponse } from "msw";
import newsResponse from "./data/news";

const handlers = [
  http.get("/api/noticias", () => HttpResponse.json(newsResponse)),
];

export default handlers;
