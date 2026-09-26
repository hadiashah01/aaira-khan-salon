import { business } from "@/app/data/business";

export const getWhatsAppUrl = (message = "") => {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

export const getPhoneUrl = () => {
  return `tel:${business.phone.replace(/\D/g, "")}`;
};