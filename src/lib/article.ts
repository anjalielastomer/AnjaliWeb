import { payloadGet } from "@/lib/payload";

export default async function Article() {
  return payloadGet("/articles");
}
