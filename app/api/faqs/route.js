import { faqItems } from "@/app/data/faqs";

export async function GET() {
  return Response.json(faqItems);
}