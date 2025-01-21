
// projects


function toggleTeam() {
    const teamSection = document.getElementById('team');
    const button = document.querySelector('.toggle-btn');
    if (teamSection.style.display === 'none' || teamSection.style.display === '') {
        teamSection.style.display = 'block';
        button.textContent = 'SHOW LESS';
    } else {
        teamSection.style.display = 'none';
        button.textContent = 'ALL PROJECTS';
    }
}

// nabar

const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('header');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});