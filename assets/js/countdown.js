// Compte a rebours vers le jour J (12 juin 2027, 15h00 - heure de la messe)
(function () {
  const el = document.querySelector('[data-countdown]');
  if (!el) return;

  const targetDate = new Date('2027-06-12T15:00:00+02:00');

  const daysEl = el.querySelector('[data-days]');
  const hoursEl = el.querySelector('[data-hours]');
  const minutesEl = el.querySelector('[data-minutes]');
  const secondsEl = el.querySelector('[data-seconds]');
  const messageEl = document.querySelector('[data-countdown-message]');

  let timer;

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      el.hidden = true;
      if (messageEl) {
        messageEl.hidden = false;
      }
      clearInterval(timer);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  timer = setInterval(update, 1000);
})();
