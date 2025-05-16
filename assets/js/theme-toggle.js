// Dark mode toggle with localStorage
(function() {
  const toggle = document.getElementById('dark-mode-toggle');
  const currentTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggle?.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
})();
