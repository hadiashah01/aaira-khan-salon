import { business } from "@/app/data/business";

export async function GET() {
  return Response.json(business);
}