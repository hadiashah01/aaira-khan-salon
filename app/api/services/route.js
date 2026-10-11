
import { fullServiceCatalog } from "@/app/data/services";

export async function GET() {
  return Response.json(fullServiceCatalog);
}
