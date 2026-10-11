
const normalizePhone = (phone) =>
  typeof phone === "string" ? phone.replace(/\D/g, "") : "";

export const getWhatsAppUrl = (phone, message = "") => {
  const normalizedPhone = normalizePhone(phone);

  if (!normalizedPhone) return "";

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};

export const getSafeExternalUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value);

    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
};

export const getPhoneUrl = (phone) => {
  const normalizedPhone = normalizePhone(phone);

  return normalizedPhone ? `tel:${normalizedPhone}` : "";
};

export const getWhatsAppBaseUrl = (phone) => {
  const normalizedPhone = normalizePhone(phone);

  return normalizedPhone ? `https://wa.me/${normalizedPhone}` : "";
};
