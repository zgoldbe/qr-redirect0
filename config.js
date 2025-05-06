// Define PORTAL_LINKS with validated URLs
const PORTAL_LINKS = (() => {
  const urls = {
    staff: "https://cotsurvey.chkmkt.com/?e=445389&d=e&h=D2EA20243A6D94E&l=en",
    guest: "https://example.com/guest"
  };

  // Validate URLs to ensure they are well-formed and use HTTPS
  const isValidURL = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' && parsed.hostname !== ''; // Enforce HTTPS and non-empty hostname
    } catch (e) {
      return false;
    }
  };

  // Sanitized and validated PORTAL_LINKS
  const validatedLinks = {
    staff: isValidURL(urls.staff) ? urls.staff : 'https://example.com/staff', // Fallback to safe default
    guest: isValidURL(urls.guest) ? urls.guest : 'https://example.com/guest' // Fallback to safe default
  };

  return validatedLinks;
})();
