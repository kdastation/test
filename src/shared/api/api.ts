import { HttpClient } from "./HttpClient/HttpClient";

const baseURL = "http://localhost:8000";
export const api = new HttpClient({
  baseURL,
});
