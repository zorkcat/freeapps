// Real-Time Search Functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const appCards = document.querySelectorAll('.app-card');

  // Filter app cards based on search input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    appCards.forEach((card) => {
      const appName = card.getAttribute('data-name').toLowerCase();
      card.style.display = appName.includes(query) ? 'block' : 'none';
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

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');

  // Save the theme preference in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true; // Ensure the toggle switch reflects the saved theme
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.checked = false;
  }
});

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  // Tab Switching Functionality
  const tabs = document.querySelectorAll('.tab-link');
  const appGrid = document.querySelector('.app-grid');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to the clicked tab
      tab.classList.add('active');
      // Get the tab type (all, apps, games)
      const tabType = tab.getAttribute('data-tab');

      // Smoothly hide the grid
      appGrid.classList.add('hidden');
      setTimeout(() => {
        // Filter app cards based on the selected tab
        const appCards = document.querySelectorAll('.app-card');
        appCards.forEach(card => {
          const cardType = card.getAttribute('data-type');
          if (tabType === 'all' || cardType === tabType) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
        // Smoothly show the grid
        appGrid.classList.remove('hidden');
      }, 300); // Match the transition duration
    });
  });
});

// Chat Support Logic
const chatSupportButton = document.getElementById('chat-support-button');
const chatSupportBox = document.getElementById('chat-support-box');
const closeChatButton = document.getElementById('close-chat');
const sendMessageButton = document.getElementById('send-message');
const chatInput = document.getElementById('chat-input');

// Open chat box
chatSupportButton.addEventListener('click', () => {
  chatSupportBox.style.display = 'block';
});

// Close chat box
closeChatButton.addEventListener('click', () => {
  chatSupportBox.style.display = 'none';
});

// Send message to Discord webhook
sendMessageButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    const webhookURL = 'https://discord.com/api/webhooks/1340768659605295261/Rc0jJBLCQxNzbfL-77sxrk4qUf9kXwaECETVzb-4Std5QDKntnn4ij4RmMVKgw7XqWZb';
    const payload = { content: `New app suggestion: ${message}` };

    fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your suggestion!');
        chatInput.value = '';
        chatSupportBox.style.display = 'none';
      } else {
        alert('Failed to send your suggestion. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  } else {
    alert('Please enter a suggestion before sending.');
  }
});
// Get elements
const newsButton = document.getElementById('news-button');
const downloadOverlay = document.getElementById('download-overlay');
const closeOverlay = document.getElementById('close-overlay');

// Show overlay when NEWS button is clicked
newsButton.addEventListener('click', () => {
  downloadOverlay.style.display = 'flex';
});

// Hide overlay when close button is clicked
closeOverlay.addEventListener('click', () => {
  downloadOverlay.style.display = 'none';
});

// Hide overlay when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === downloadOverlay) {
    downloadOverlay.style.display = 'none';
  }
});