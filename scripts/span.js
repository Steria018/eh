const clickSound = new Audio('scripts/eh.wav');

document.body.addEventListener('click', (e) => {
  // Play sound
  clickSound.currentTime = 0;
  clickSound.playbackRate = 1;
  clickSound.play().catch(err => console.error('Playback failed:', err));

  // Create ripple element
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.left = `${e.clientX - 10}px`;
  ripple.style.top = `${e.clientY - 10}px`;

  // Add and remove ripple
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});