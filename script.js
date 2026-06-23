const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const statusEls = [document.querySelector('[data-status]'), document.querySelector('[data-status-small]')].filter(Boolean);

document.querySelector('[data-year]').textContent = new Date().getFullYear();

function setHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 18);
}
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const hours = {
  1: { open: '09:00', close: '17:00' },
  2: { open: '08:00', close: '17:00' },
  4: { open: '08:00', close: '17:00' },
  5: { open: '08:00', close: '16:00' },
  6: { open: '09:00', close: '14:00' }
};

function pretoriaDateParts() {
  const parts = new Intl.DateTimeFormat('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(new Date());
  return Object.fromEntries(parts.map(part => [part.type, part.value]));
}

function weekdayNumber(shortName) {
  return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[shortName];
}

function toMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function updateStatus() {
  const parts = pretoriaDateParts();
  const day = weekdayNumber(parts.weekday);
  const now = Number(parts.hour) * 60 + Number(parts.minute);
  const today = hours[day];
  let message = 'Closed today';

  if (today) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (now >= open && now < close) {
      message = `Open today until ${today.close}`;
    } else if (now < open) {
      message = `Opens today at ${today.open}`;
    } else {
      message = 'Closed now';
    }
  }

  statusEls.forEach((el) => { el.textContent = message; });
}
updateStatus();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
