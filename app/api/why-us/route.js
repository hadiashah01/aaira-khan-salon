import { reasons } from "@/app/data/why-us";

export async function GET() {
  return Response.json(reasons);
}
