const toggleBtn = document.querySelector('.main-nav_toggle'),
  navContenerEl = document.querySelector('.main-nav')

toggleBtn.addEventListener('click', (e) =>
  navContenerEl.classList.toggle('expanded')
)
