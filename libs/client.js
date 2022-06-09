import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tajimura",
  apiKey: process.env.API_KEY,
});
