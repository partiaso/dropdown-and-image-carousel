import './dropdown.css';

function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((currentDropdown) => {
    const dropdownMenu = currentDropdown.querySelector('.dropdown-menu');
    const trigger = currentDropdown.dataset.trigger;

    if (trigger === 'click') {
      currentDropdown.addEventListener('click', () => {
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== currentDropdown) {
            const otherMenu = otherDropdown.querySelector('.dropdown-menu');
            otherMenu.classList.remove('visible');
          }
        });

        dropdownMenu.classList.toggle('visible');
      });
    }

    if (trigger === 'hover') {
      currentDropdown.addEventListener('mouseenter', () => {
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown.dataset.trigger === 'click') {
            const otherMenu = otherDropdown.querySelector('.dropdown-menu');
            otherMenu.classList.remove('visible');
          }
        });
        dropdownMenu.classList.add('visible');
      });
      currentDropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('visible');
      });
    }
  });
}

initDropdowns();
