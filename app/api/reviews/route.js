import {  realReviews } from "@/app/data/reviews";

export async function GET() {
  return Response.json( realReviews);
}
