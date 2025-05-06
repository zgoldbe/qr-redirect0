document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("staff-link").href = PORTAL_LINKS.staff;
  document.getElementById("guest-link").href = PORTAL_LINKS.guest;

  const params = new URLSearchParams(window.location.search);
  const qrCode = params.get('qr');
  if (qrCode) {
    document.getElementById("qr-code").textContent = `#${qrCode}`;
  }
});
