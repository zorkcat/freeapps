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
    const payload = {
      content: `New app suggestion: ${message}`
    };

    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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