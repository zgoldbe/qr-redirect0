document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const qrCode = params.get('qr');
  const staffLink = document.getElementById("staff-link");
  const guestLink = document.getElementById("guest-link");

  if (qrCode) {
    document.getElementById("qr-code").textContent = `#${qrCode}`;
    staffLink.href = `${PORTAL_LINKS.staff}&qr=${encodeURIComponent(qrCode)}`;
    guestLink.href = `${PORTAL_LINKS.guest}?qr=${encodeURIComponent(qrCode)}`;
  } else {
    staffLink.href = PORTAL_LINKS.staff;
    guestLink.href = PORTAL_LINKS.guest;
  }
});
