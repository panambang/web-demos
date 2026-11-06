/** Prefix a path with the configured base (works at / and at a sub-path like /demos). */
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

/** Format a number as Rupiah, e.g. 115000 -> "Rp115.000". */
export const rupiah = (n: number) => 'Rp' + n.toLocaleString('id-ID');

/**
 * WhatsApp share link with a prefilled message. No phone number on purpose:
 * these are demos of fictional businesses, so the visitor picks the chat.
 * In a client build, put the shop's number after wa.me/.
 */
export const wa = (text: string) => `https://wa.me/?text=${encodeURIComponent(text)}`;

export const PORTFOLIO = 'https://panambang.github.io';
