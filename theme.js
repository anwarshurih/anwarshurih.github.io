// light/dark mode button
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

function updateIcon() {
  // show a sun in dark mode (click for light) and a moon in light mode
  toggle.innerHTML = root.classList.contains('light') ? '&#9790;' : '&#9728;';
}

toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  try {
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  } catch (e) {
    // storage can be blocked (e.g. private browsing), the toggle still works for this visit
  }
  updateIcon();
});

updateIcon();
