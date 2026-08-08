export const WHATSAPP_PHONE_NUMBER = "905337182524";

export function getWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text: string): void {
  const url = getWhatsAppUrl(text);
  window.open(url, "_blank", "noopener,noreferrer");
}
