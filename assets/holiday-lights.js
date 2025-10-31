/**
 * Holiday Lights Position Controller
 * Adjusts lights position based on header scroll state
 */

document.addEventListener('DOMContentLoaded', function() {
  const lights = document.querySelector('.holiday-lights');
  const header = document.querySelector('.sticky-header');
  const announcementBar = document.querySelector('.announcement_bar');

  if (!lights) return;

  // Get announcement bar height
  function getAnnouncementBarHeight() {
    if (!announcementBar) return 0;
    return announcementBar.offsetHeight;
  }

  // Update lights position
  function updateLightsPosition() {
    const headerSticked = header && header.classList.contains('sticked');

    if (headerSticked) {
      // When scrolled, position lights at top
      lights.style.top = '0px';
    } else {
      // When not scrolled, position below announcement bar
      const announcementHeight = getAnnouncementBarHeight();
      lights.style.top = announcementHeight + 'px';
    }
  }

  // Listen for header sticked event
  document.addEventListener('headerSticked', updateLightsPosition);

  // Use IntersectionObserver to detect header scroll state
  if (header && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update when header intersection changes
        setTimeout(updateLightsPosition, 50);
      },
      { threshold: [0.99, 1] }
    );
    observer.observe(header);
  }

  // Also update on scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateLightsPosition, 50);
  }, { passive: true });

  // Update on resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateLightsPosition, 100);
  });

  // Initial position
  updateLightsPosition();
});
