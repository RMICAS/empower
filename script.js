
// projects


function toggleTeam() {
    const teamSection = document.getElementById('team');
    const button = document.querySelector('.toggle-btn');
    if (teamSection.style.display === 'none' || teamSection.style.display === '') {
        teamSection.style.display = 'block';
        button.textContent = 'SHOW LESS';
    } else {
        teamSection.style.display = 'none';
        button.innerHTML = 'OUR KEY PROJECTS';
    }
}
// nabar

const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('header');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// header

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Change 50 to the scroll position you prefer
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// themes

function applyThemeBasedOnHash() {
  const hash = window.location.hash;

  // Remove any previously applied theme class
  document.body.classList.remove('theme-2', 'theme-3', 'theme-4');

  // Apply the corresponding theme based on the URL hash
  if (hash === '#theme-2') {
    document.body.classList.add('theme-2');
  } else if (hash === '#theme-3') {
    document.body.classList.add('theme-3');
  } else if (hash === '#theme-4') {
    document.body.classList.add('theme-4');
  } else {
    // Default theme
    document.body.classList.remove('theme-2', 'theme-3', 'theme-4');
  }
}

// Call the function when the page loads or the hash changes
window.onload = applyThemeBasedOnHash;
window.onhashchange = applyThemeBasedOnHash;

