/**
 * Formats full names by masking characters with asterisks for privacy.
 * Example: "kübra gül" -> "K*** G**"
 * Example: "Pinar Altintas" -> "P**** A*******"
 * Example: "S. YILMAZTÜRK" -> "S. Y*********"
 */
export function maskName(name: string): string {
  if (!name) return "G*** K*********";

  const parts = name.trim().split(/\s+/);
  return parts
    .map((part) => {
      if (part.length === 0) return "";
      const firstChar = part.charAt(0).toUpperCase();

      // If it is a single character or initial like "S."
      if (part.length === 1) {
        return `${firstChar}*`;
      }
      if (part.endsWith(".")) {
        return `${firstChar}.${"*".repeat(Math.max(2, part.length - 2))}`;
      }

      // Standard word masking
      return `${firstChar}${"*".repeat(part.length - 1)}`;
    })
    .join(" ");
}
