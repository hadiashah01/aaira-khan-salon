import { business } from "@/app/data/business";

export const getWhatsAppUrl = (message = "") => {
  const phone = business.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const getSafeExternalUrl = (value) => {
  if (typeof value !== "string" || value.trim().length === 0) {
    return "";
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : "";
  } catch {
    return "";
  }
};

export const getPhoneUrl = () => {
  const phone = business.phone.replace(/\D/g, "");

  return `tel:${phone}`;
};

export const getWhatsAppBaseUrl = () => {
  const phone = business.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phone}`;
};