// Assume PORTAL_LINKS is imported from config.js
// import { PORTAL_LINKS } from './config.js'; // Uncomment if using ES modules
// For GitHub Pages, ensure config.js is included via <script src="config.js"></script> before this script

// Simple sanitization function (no external library for simplicity)
const sanitizeInput = (input) => {
  // Remove HTML tags and dangerous characters, allow alphanumeric, hyphens, and basic punctuation
  return input.replace(/[<>"'%;()&+]/g, '');
};

// Validate QR code (allow alphanumeric and hyphens for flexibility, e.g., 'ABC-123')
const validateQRCode = (code) => {
  // Ensure code is non-empty and contains only safe characters (alphanumeric, hyphens, underscores)
  return /^[a-zA-Z0-9_-]+$/.test(code) ? code : '';
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let qrCode = params.get('qr') || ''; // Default to empty string if null
  const staffLink = document.getElementById("staff-link");
  const guestLink = document.getElementById("guest-link");

  // Sanitize and validate QR code
  qrCode = sanitizeInput(qrCode);
  const cleanQRCode = validateQRCode(qrCode);

  if (cleanQRCode) {
    // Safely display QR code (use textContent to prevent XSS)
    document.getElementById("qr-code").textContent = `#${cleanQRCode}`;
    
    // Construct safe URLs with whitelisted base and encoded QR code
    staffLink.href = `${PORTAL_LINKS.staff}&qr=${encodeURIComponent(cleanQRCode)}`;
    guestLink.href = `${PORTAL_LINKS.guest}?qr=${encodeURIComponent(cleanQRCode)}`;
  } else {
    // Fallback to base URLs without QR code if invalid
    staffLink.href = PORTAL_LINKS.staff;
    guestLink.href = PORTAL_LINKS.guest;
  }
});
