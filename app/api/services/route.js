import { fullServiceCatalog, categories } from "@/app/data/services";

export async function GET() {
  return Response.json({ services: fullServiceCatalog, categories });
}
