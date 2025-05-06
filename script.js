// Assume PORTAL_LINKS is loaded from config.js via <script src="config.js">

// Simple sanitization function
const sanitizeInput = (input) => {
  // Remove HTML tags and dangerous characters, allow alphanumeric, hyphens, underscores
  return input.replace(/[<>"'%;()&+]/g, '');
};

// Validate QR code (allow alphanumeric, hyphens, underscores)
const validateQRCode = (code) => {
  // Ensure code is non-empty and contains only safe characters
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
    // Safely display QR code
    document.getElementById("qr-code").textContent = `#${cleanQRCode}`;
    // Set safe URLs with encoded QR code
    staffLink.href = `${PORTAL_LINKS.staff}&qr=${encodeURIComponent(cleanQRCode)}`;
    guestLink.href = `${PORTAL_LINKS.guest}?qr=${encodeURIComponent(cleanQRCode)}`;
  } else {
    // Fallback to base URLs
    staffLink.href = PORTAL_LINKS.staff;
    guestLink.href = PORTAL_LINKS.guest;
    // Display default or error message
    document.getElementById("qr-code").textContent = '#Invalid';
  }
});
