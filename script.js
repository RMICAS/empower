
// projects


function toggleTeam() {
    const teamSection = document.getElementById('team');
    const button = document.querySelector('.toggle-btn');
    if (teamSection.style.display === 'none' || teamSection.style.display === '') {
        teamSection.style.display = 'block';
        button.textContent = 'SHOW LESS';
    } else {
        teamSection.style.display = 'none';
        button.innerHTML = '<span class="plus-sign">+</span> FOR MORE PROJECTS';
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
