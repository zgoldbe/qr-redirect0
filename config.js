// Define PORTAL_LINKS with validated URLs
const PORTAL_LINKS = (() => {
  const urls = {
    staff: "https://cotsurvey.chkmkt.com/?e=445389&d=e&h=D2EA20243A6D94E&l=en",
    guest: "https://example.com/guest" // Replace with real guest URL
  };

  // Validate URLs (HTTPS and valid hostname)
  const isValidURL = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' && parsed.hostname !== '';
    } catch (e) {
      return false;
    }
  };

  // Sanitized and validated PORTAL_LINKS
  const validatedLinks = {
    staff: isValidURL(urls.staff) ? urls.staff : 'https://example.github.io/survey/staff',
    guest: isValidURL(urls.guest) ? urls.guest : 'https://example.github.io/survey/guest'
  };

  return validatedLinks;
})();
