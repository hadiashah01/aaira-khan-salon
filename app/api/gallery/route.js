import { galleryImages } from "@/app/data/gallery";

export async function GET() {
  return Response.json(galleryImages);
}