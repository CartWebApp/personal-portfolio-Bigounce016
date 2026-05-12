function showProject(projectName) {
  // Hide all project sections
  const sections = document.querySelectorAll('section[id^="research"], section[id^="essay"]');
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show the selected project
  const projectId = projectName.toLowerCase().replace(/ /g, '');
  const projectSection = document.getElementById(projectId);
  if (projectSection) {
    projectSection.classList.remove('hidden');
  }
}

function showContent(contentId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(c => c.classList.add('hidden'));
  document.getElementById(contentId).classList.remove('hidden');
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (contentId === 'yearinreview') {
    document.getElementById('review-btn').classList.add('active');
  } else {
    document.getElementById('plan-btn').classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const reviewBtn = document.getElementById('review-btn');
  const planBtn = document.getElementById('plan-btn');
  if (reviewBtn) {
    reviewBtn.addEventListener('click', () => showContent('yearinreview'));
  }
  if (planBtn) {
    planBtn.addEventListener('click', () => showContent('fiveyearplan'));
  }

  // Fade-in on scroll
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
});

