// Function to create confetti pieces
function createConfetti() {
  const confettiContainer = document.getElementById('confetti');
  
  // Clear existing confetti
  confettiContainer.innerHTML = '';
  
  // Create confetti pieces
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    
    // Randomize colors
    const colors = ['#f5576c', '#f093fb', '#4facfe', '#00f2fe', '#ffd26f', '#3677ff'];
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Random horizontal position
    piece.style.left = Math.random() * 100 + '%';
    
    // Random delay
    piece.style.animationDelay = Math.random() * 0.5 + 's';
    
    // Random rotation
    piece.style.setProperty('--rotation', Math.random() * 360);
    
    confettiContainer.appendChild(piece);
  }
}

// Trigger confetti animation
function triggerCelebration() {
  createConfetti();
  
  // Re-trigger the animation by removing and re-adding the title animation
  const title = document.querySelector('.title');
  title.style.animation = 'none';
  
  // Trigger reflow to restart animation
  setTimeout(() => {
    title.style.animation = '';
  }, 10);
  
  // Create multiple bursts of confetti
  for (let burst = 0; burst < 2; burst++) {
    setTimeout(() => {
      createConfetti();
    }, burst * 500);
  }
}

// Initialize confetti on page load
window.addEventListener('load', () => {
  createConfetti();
  
  // Optional: Auto-trigger celebration after 3 seconds
  setTimeout(() => {
    triggerCelebration();
  }, 3000);
});
