// Real-Time Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const appCards = document.querySelectorAll('.app-card');
  
    // Filter app cards based on search input
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
  
      appCards.forEach((card) => {
        const appName = card.getAttribute('data-name').toLowerCase();
        if (appName.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });