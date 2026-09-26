import {offers } from "@/app/data/offers";

export async function GET() {
  return Response.json(offers);
}