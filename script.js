// hamburger

    document.getElementById('menu-icon').addEventListener('click', () => {
        alert('Menu icon clicked!');
    });


    // Select hamburger icon and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav');

// Toggle 'active' class when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


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