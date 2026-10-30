/**
 * MAIN INTERACTIVITY & APPLICATION LOGIC
 * -------------------------------------------------------------
 * Controls theme switching, navigation scrollspy, mobile menu,
 * and dynamic rendering from data.js.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initHeroContent();
  initAboutSection();
  initSkillsSection();
  initProjectsSection();
  initCertificatesSection();
  initActivitiesSection();
  initReflectionsSection();
  initContactSection();
  initScrollSpy();
  initScrollToTop();
  initDocumentModals();
});

/* ==========================================================================
   THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlEl = document.documentElement;

  // Retrieve saved theme; default to Cyber Dark mode
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light') {
    htmlEl.classList.remove('dark');
    htmlEl.classList.add('light');
    updateThemeIcons(true);
  } else {
    // Default to Cyber Dark mode
    htmlEl.classList.remove('light');
    htmlEl.classList.add('dark');
    updateThemeIcons(false);
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = htmlEl.classList.toggle('light');
      htmlEl.classList.toggle('dark', !isLight);
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      updateThemeIcons(isLight);
      showToast(isLight ? 'Switched to Light Mode ☀️' : 'Switched to Cyber Dark Mode 🌙');
    });
  });
}

function updateThemeIcons(isLight) {
  const moonIcons = document.querySelectorAll('.theme-icon-moon');
  const sunIcons = document.querySelectorAll('.theme-icon-sun');

  moonIcons.forEach(icon => {
    icon.classList.toggle('hidden', !isLight);
  });
  sunIcons.forEach(icon => {
    icon.classList.toggle('hidden', isLight);
  });
}

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile drawer controls
  const toggleMobileMenu = (open) => {
    if (!mobileMenuDrawer) return;
    if (open) {
      mobileMenuDrawer.classList.remove('translate-x-full');
      document.body.classList.add('overflow-hidden');
    } else {
      mobileMenuDrawer.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    }
  };

  mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu(true));
  closeMobileMenuBtn?.addEventListener('click', () => toggleMobileMenu(false));

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // Close drawer on clicking outside
  mobileMenuDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileMenuDrawer) {
      toggleMobileMenu(false);
    }
  });
}

/* ==========================================================================
   SCROLLSPY (Highlight active nav link)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active-nav');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-nav');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   SCROLL TO TOP BUTTON
   ========================================================================== */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-to-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   HERO / HOME SECTION DYNAMIC POPULATION
   ========================================================================== */
function initHeroContent() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  const { personal, stats } = PORTFOLIO_DATA;

  // Personal Info Bindings
  const nameEls = document.querySelectorAll('.bind-personal-name');
  const roleEls = document.querySelectorAll('.bind-personal-role');
  const badgeEls = document.querySelectorAll('.bind-personal-badge');
  const summaryEls = document.querySelectorAll('.bind-personal-summary');
  const avatarEls = document.querySelectorAll('.bind-personal-avatar');
  const emailEls = document.querySelectorAll('.bind-personal-email');
  const locationEls = document.querySelectorAll('.bind-personal-location');

  nameEls.forEach(el => el.textContent = personal.name);
  roleEls.forEach(el => el.textContent = personal.role);
  badgeEls.forEach(el => el.textContent = personal.statusBadge);
  summaryEls.forEach(el => el.textContent = personal.summary);
  emailEls.forEach(el => el.textContent = personal.email);
  locationEls.forEach(el => el.textContent = personal.location);

  avatarEls.forEach(el => {
    if (el instanceof HTMLImageElement) {
      el.src = personal.avatar;
      el.alt = `${personal.name} - Profile`;
    }
  });

  // Social Links Bindings
  const facebookLinks = document.querySelectorAll('.bind-social-facebook');
  const twitterLinks = document.querySelectorAll('.bind-social-twitter');
  const instagramLinks = document.querySelectorAll('.bind-social-instagram');

  if (personal.socials.facebook) {
    facebookLinks.forEach(link => link.setAttribute('href', personal.socials.facebook));
  }
  if (personal.socials.twitter) {
    twitterLinks.forEach(link => link.setAttribute('href', personal.socials.twitter));
  }
  if (personal.socials.instagram) {
    instagramLinks.forEach(link => link.setAttribute('href', personal.socials.instagram));
  }

  // Render Stats Grid in Hero
  const statsContainer = document.getElementById('hero-stats-container');
  if (statsContainer && stats) {
    statsContainer.innerHTML = stats.map(stat => `
      <div class="glass-panel p-4 rounded-2xl flex items-center space-x-3.5 hover:border-cyan-400/40 transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-base">
          <i class="${stat.icon}"></i>
        </div>
        <div>
          <div class="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">${stat.value}</div>
          <div class="text-xs text-gray-400 font-medium">${stat.label}</div>
        </div>
      </div>
    `).join('');
  }

  // Typewriter role title
  initTypewriter();
}

function initTypewriter() {
  const el = document.getElementById('hero-typewriter');
  if (!el) return;

  const roles = [
    "Full Stack Developer",
    "BSIT 4th Year Senior",
    "UI/UX Enthusiast",
    "Aspiring Cloud Architect",
    "System Administrator"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of word
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before typing new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'info') {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 transform transition-all duration-300 translate-y-20 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="glass-panel px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-cyan-400/40 text-sm font-medium text-white">
      <i class="fa-solid fa-circle-check text-cyan-400 text-base"></i>
      <span>${message}</span>
    </div>
  `;

  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

// Global helper for interactive buttons
window.triggerDownloadResume = function() {
  showToast("Downloading Alex Morgan - Resume.pdf (Sample)");
};

window.triggerCopyEmail = function() {
  if (typeof PORTFOLIO_DATA !== 'undefined') {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.personal.email);
    showToast("Email address copied to clipboard!");
  }
};

/* ==========================================================================
   DOCUMENT PREVIEW & MODAL SYSTEM (For Activities & Reflection Papers)
   ========================================================================== */
function initDocumentModals() {
  // Global modal trigger for documents
  window.openDocumentModal = function(docType, docId) {
    if (typeof PORTFOLIO_DATA === 'undefined') return;

    let doc = null;
    let categoryBadge = '';

    if (docType === 'activity') {
      doc = PORTFOLIO_DATA.activities.find(a => a.id === docId);
      categoryBadge = `<span class="px-2.5 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium">School Activity</span>`;
    } else if (docType === 'reflection') {
      doc = PORTFOLIO_DATA.reflectionPapers.find(r => r.id === docId);
      categoryBadge = `<span class="px-2.5 py-1 text-xs rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-medium">Seminar Reflection</span>`;
    }

    if (!doc) return;

    const modal = document.getElementById('document-preview-modal');
    const modalContent = document.getElementById('document-modal-body');
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
        <div>
          ${categoryBadge}
          <h3 class="text-xl font-bold font-heading text-white mt-2">${doc.title}</h3>
          <p class="text-sm text-gray-400 mt-1">${doc.course || doc.seminar || 'Academic Submission'}</p>
        </div>
        <button onclick="closeDocumentModal()" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-4 text-sm text-gray-300">
        <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-file-word"></i>
            </div>
            <div>
              <div class="font-medium text-white text-xs md:text-sm truncate max-w-xs">${doc.fileName}</div>
              <div class="text-xs text-gray-400">${doc.format} • ${doc.fileSize}</div>
            </div>
          </div>
          <button onclick="simulateDownload('${doc.fileName}')" class="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold flex items-center space-x-1.5 transition">
            <i class="fa-solid fa-download"></i>
            <span>Download</span>
          </button>
        </div>

        <div>
          <h4 class="font-semibold text-white text-sm mb-1.5">Document Overview & Executive Summary</h4>
          <p class="text-gray-300 leading-relaxed text-xs md:text-sm">${doc.summary}</p>
        </div>

        ${doc.previewHighlights ? `
          <div>
            <h4 class="font-semibold text-white text-sm mb-1.5">Key Laboratory Outputs</h4>
            <ul class="space-y-1.5">
              ${doc.previewHighlights.map(h => `
                <li class="flex items-center space-x-2 text-xs md:text-sm text-gray-300">
                  <i class="fa-solid fa-check text-cyan-400 text-xs"></i>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        ${doc.keyTakeaways ? `
          <div>
            <h4 class="font-semibold text-white text-sm mb-1.5">Key Seminar Learnings & Insights</h4>
            <ul class="space-y-1.5">
              ${doc.keyTakeaways.map(t => `
                <li class="flex items-center space-x-2 text-xs md:text-sm text-gray-300">
                  <i class="fa-solid fa-lightbulb text-amber-400 text-xs"></i>
                  <span>${t}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </div>

      <div class="mt-6 pt-4 border-t border-white/10 flex justify-end space-x-3">
        <button onclick="closeDocumentModal()" class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition">
          Close Preview
        </button>
        <button onclick="simulateDownload('${doc.fileName}')" class="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold flex items-center space-x-2 transition">
          <i class="fa-solid fa-file-arrow-down"></i>
          <span>Save File (.docx)</span>
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  window.closeDocumentModal = function() {
    const modal = document.getElementById('document-preview-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  window.simulateDownload = function(fileName) {
    showToast(`Downloading ${fileName}...`);
  };
}

/* ==========================================================================
   ABOUT ME & EDUCATION DYNAMIC SECTION
   ========================================================================== */
function initAboutSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.about) return;
  const container = document.getElementById('about-section-container');
  if (!container) return;

  const { about } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Narrative & Values -->
      <div class="lg:col-span-6 space-y-6">
        <div class="glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
          <div class="flex items-center space-x-3 text-cyan-400">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg">
              <i class="fa-solid fa-compass"></i>
            </div>
            <div>
              <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">My Purpose & Vision</span>
              <h3 class="text-xl sm:text-2xl font-bold font-heading text-white">${about.headline}</h3>
            </div>
          </div>

          <div class="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            <p>${about.bioParagraph1}</p>
            <p>${about.bioParagraph2}</p>
          </div>

          <!-- Academic Snapshot Grid -->
          <div class="pt-2 grid grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span class="text-gray-400 block text-[11px] font-mono">DEGREE</span>
              <span class="text-white font-semibold">BS Information Technology</span>
            </div>
            <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span class="text-gray-400 block text-[11px] font-mono">STANDING</span>
              <span class="text-emerald-400 font-semibold">4th Year Senior (Graduating)</span>
            </div>
            <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span class="text-gray-400 block text-[11px] font-mono">TRACK</span>
              <span class="text-cyan-300 font-semibold">Web Deployment & SysAd</span>
            </div>
            <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span class="text-gray-400 block text-[11px] font-mono">ACADEMIC STANDING</span>
              <span class="text-amber-300 font-semibold">Dean's Lister (1.35 GWA)</span>
            </div>
          </div>
        </div>

        <!-- Development Principles / Core Strengths -->
        <div class="space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-gray-400 pl-1 flex items-center gap-2">
            <i class="fa-solid fa-microchip text-violet-400"></i>
            <span>Core Development Principles</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${about.principles.map(p => `
              <div class="glass-panel p-4 rounded-2xl hover:border-violet-400/40 transition-all duration-300 group">
                <div class="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 flex items-center justify-center text-sm mb-3 group-hover:scale-110 transition-transform">
                  <i class="${p.icon}"></i>
                </div>
                <h5 class="text-sm font-bold text-white font-heading">${p.title}</h5>
                <p class="text-xs text-gray-400 mt-1 leading-relaxed">${p.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Education Timeline -->
      <div class="lg:col-span-6 space-y-4">
        <div class="flex items-center justify-between pl-1">
          <div class="flex items-center space-x-2.5">
            <div class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
            <h3 class="text-lg font-bold font-heading text-white">Educational Milestones</h3>
          </div>
          <span class="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">Academic Timeline</span>
        </div>

        <!-- Vertical Timeline Wrap -->
        <div class="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-transparent">
          ${about.education.map((edu, idx) => `
            <div class="relative group">
              <!-- Timeline Glowing Node Indicator -->
              <div class="absolute -left-6 sm:-left-8 top-4 w-5 h-5 rounded-full bg-[#0d121f] border-2 ${idx === 0 ? 'border-cyan-400 shadow-lg shadow-cyan-400/50' : 'border-violet-400'} flex items-center justify-center">
                <div class="w-2 h-2 rounded-full ${idx === 0 ? 'bg-cyan-400' : 'bg-violet-400'}"></div>
              </div>

              <!-- Education Glass Card -->
              <div class="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold ${idx === 0 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-violet-500/20 text-violet-300 border border-violet-500/30'}">
                    ${edu.period}
                  </span>
                  <span class="text-xs font-mono text-amber-300 flex items-center gap-1.5 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                    <i class="fa-solid fa-award text-xs"></i>
                    <span>${edu.gpa}</span>
                  </span>
                </div>

                <h4 class="text-lg sm:text-xl font-bold font-heading text-white mt-1">${edu.degree}</h4>
                <div class="text-sm text-cyan-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <i class="fa-solid fa-building-columns text-xs"></i>
                  <span>${edu.institution}</span>
                </div>
                
                <div class="text-xs text-gray-400 mt-1 mb-4 flex items-center gap-1.5 font-mono">
                  <i class="fa-solid fa-circle-check text-emerald-400 text-[10px]"></i>
                  <span>Status: ${edu.status}</span>
                </div>

                <div class="border-t border-white/10 pt-3.5 space-y-2">
                  <div class="text-xs font-mono uppercase text-gray-400 tracking-wider">Key Academic Highlights</div>
                  <ul class="space-y-1.5">
                    ${edu.highlights.map(h => `
                      <li class="flex items-start space-x-2 text-xs sm:text-sm text-gray-300">
                        <i class="fa-solid fa-chevron-right text-cyan-400 text-[10px] mt-1 shrink-0"></i>
                        <span>${h}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   SKILLS & TECHNICAL ARSENAL DYNAMIC SECTION
   ========================================================================== */
function initSkillsSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.skills) return;
  const container = document.getElementById('skills-section-container');
  if (!container) return;

  const { categories } = PORTFOLIO_DATA.skills;

  const toolbelt = [
    { name: "VS Code", icon: "fa-solid fa-code" },
    { name: "Git & GitHub", icon: "fa-brands fa-git-alt" },
    { name: "Apache", icon: "fa-solid fa-server" },
    { name: "Figma", icon: "fa-brands fa-figma" },
    { name: "Docker Basics", icon: "fa-brands fa-docker" },
    { name: "XAMPP Stack", icon: "fa-solid fa-box-open" },
    { name: "Vercel / Netlify", icon: "fa-solid fa-cloud" }
  ];

  container.innerHTML = `
    <div class="space-y-10">
      <!-- 3-Column Categorized Skills Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${categories.map((cat, catIdx) => {
          const accentColor = catIdx === 0 ? 'cyan' : catIdx === 1 ? 'purple' : 'emerald';
          return `
            <div class="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-${accentColor}-400/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <!-- Category Title Bar -->
                <div class="flex items-center space-x-3 pb-5 border-b border-white/10">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-${accentColor}-500/20 to-${accentColor}-600/20 text-${accentColor}-400 border border-${accentColor}-500/30 flex items-center justify-center text-lg shadow-sm">
                    <i class="${cat.icon}"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold font-heading text-white">${cat.name}</h3>
                    <span class="text-xs text-gray-400 font-mono">${cat.items.length} Core Competencies</span>
                  </div>
                </div>

                <!-- Skill Items List with Progress Bars -->
                <div class="space-y-4 pt-5">
                  ${cat.items.map(skill => `
                    <div class="space-y-1.5 group">
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <i class="${skill.icon} text-gray-400 group-hover:text-white transition-colors text-sm"></i>
                          <span class="font-medium text-gray-200 group-hover:text-white transition-colors">${skill.name}</span>
                        </div>
                        <span class="font-mono text-gray-400 group-hover:text-cyan-400 transition-colors font-semibold">${skill.level}%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden p-0.5">
                        <div class="h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-sm" style="width: ${skill.level}%"></div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Footer Tip Inside Card -->
              <div class="pt-5 mt-5 border-t border-white/5 flex items-center justify-end text-[11px] text-gray-400">
                <span class="font-mono text-cyan-400 flex items-center gap-1">
                  <i class="fa-solid fa-check text-[10px]"></i> Verified
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Additional Developer Toolbelt Bar -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
          <div>
            <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Workflow & Environment</span>
            <h4 class="text-lg font-bold font-heading text-white mt-0.5">Developer Tools & Infrastructure</h4>
          </div>
          <span class="text-xs text-gray-400 font-mono">Daily Driver Ecosystem</span>
        </div>

        <div class="flex flex-wrap gap-2.5">
          ${toolbelt.map(tool => `
            <div class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-white text-xs font-medium flex items-center space-x-2 transition-all duration-200 cursor-default">
              <i class="${tool.icon} text-cyan-400 text-xs"></i>
              <span>${tool.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   FEATURED PROJECTS WITH INTERACTIVE FILTERING
   ========================================================================== */
function initProjectsSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.projects) return;
  const container = document.getElementById('projects-section-container');
  if (!container) return;

  const { projects } = PORTFOLIO_DATA;

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: 'fa-solid fa-shapes' },
    { id: 'system', label: 'Systems & Capstone', icon: 'fa-solid fa-server' },
    { id: 'web', label: 'Web Applications', icon: 'fa-solid fa-globe' },
    { id: 'iot', label: 'IoT & Hardware', icon: 'fa-solid fa-microchip' }
  ];

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Filter Button Bar -->
      <div class="flex flex-wrap items-center justify-center gap-2.5 pb-2">
        ${filterTabs.map((tab, idx) => `
          <button 
            type="button" 
            data-filter="${tab.id}" 
            class="project-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${idx === 0 ? 'btn-neon-primary font-semibold shadow-md shadow-cyan-500/20' : 'glass-btn text-gray-300 hover:text-white'}">
            <i class="${tab.icon} text-xs"></i>
            <span>${tab.label}</span>
          </button>
        `).join('')}
      </div>

      <!-- Projects Grid Container -->
      <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        ${projects.map(proj => `
          <div 
            class="project-card glass-panel-interactive rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between transition-all duration-400"
            data-category="${proj.category}">
            
            <div>
              <!-- Card Image & Badge -->
              <div class="relative aspect-[21/10] overflow-hidden group bg-slate-900">
                <img 
                  src="${proj.image}" 
                  alt="${proj.title}" 
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent opacity-80"></div>
                
                <!-- Category Badge Pill -->
                <div class="absolute top-3 left-3">
                  <span class="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 backdrop-blur-md shadow-lg">
                    ${proj.badge}
                  </span>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-6 space-y-4">
                <h3 class="text-lg font-bold font-heading text-white hover:text-cyan-400 transition-colors cursor-pointer" onclick="openProjectDetailsModal('${proj.id}')">
                  ${proj.title}
                </h3>
                
                <p class="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                  ${proj.description}
                </p>

                <!-- Key Feature Bullets -->
                <ul class="space-y-1 text-xs text-gray-400">
                  ${proj.features.slice(0, 2).map(f => `
                    <li class="flex items-center space-x-1.5">
                      <i class="fa-solid fa-check text-cyan-400 text-[10px]"></i>
                      <span class="truncate">${f}</span>
                    </li>
                  `).join('')}
                </ul>

                <!-- Tech Stack Chips -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  ${proj.tags.map(tag => `
                    <span class="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px] font-mono">
                      ${tag}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Card Action Footer -->
            <div class="px-6 pb-6 pt-3 border-t border-white/5 flex items-center justify-end text-xs">
              <button 
                onclick="openProjectDetailsModal('${proj.id}')" 
                type="button" 
                class="text-gray-400 hover:text-cyan-400 font-medium flex items-center space-x-1.5 transition">
                <i class="fa-solid fa-circle-info text-xs"></i>
                <span>Details</span>
              </button>
            </div>

          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach filter event listeners
  const filterBtns = container.querySelectorAll('.project-filter-btn');
  const projectCards = container.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update button visual styles
      filterBtns.forEach(b => {
        b.classList.remove('btn-neon-primary', 'font-semibold', 'shadow-md', 'shadow-cyan-500/20');
        b.classList.add('glass-btn', 'text-gray-300');
      });
      btn.classList.remove('glass-btn', 'text-gray-300');
      btn.classList.add('btn-neon-primary', 'font-semibold', 'shadow-md', 'shadow-cyan-500/20');

      // Filter cards with smooth fade
      projectCards.forEach(card => {
        const cats = (card.getAttribute('data-category') || '').split(/\s+/);
        if (targetFilter === 'all' || cats.includes(targetFilter)) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });
}

/* Global helper for Project Details Modal */
window.openProjectDetailsModal = function(projectId) {
  if (typeof PORTFOLIO_DATA === 'undefined') return;
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('document-preview-modal');
  const modalContent = document.getElementById('document-modal-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
      <div>
        <span class="px-2.5 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium">
          ${project.badge}
        </span>
        <h3 class="text-xl font-bold font-heading text-white mt-2">${project.title}</h3>
      </div>
      <button onclick="closeDocumentModal()" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div class="space-y-4 text-sm text-gray-300">
      <div class="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
        <img src="${project.image}" alt="${project.title}" class="w-full h-auto object-contain">
      </div>

      <p class="text-sm text-gray-300 leading-relaxed font-normal">${project.description}</p>

      <div>
        <h4 class="font-semibold text-white text-sm mb-2">Core System Features & Architecture</h4>
        <ul class="space-y-1.5">
          ${project.features.map(f => `
            <li class="flex items-start space-x-2 text-xs md:text-sm text-gray-300">
              <i class="fa-solid fa-circle-check text-cyan-400 text-xs mt-0.5 shrink-0"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-white text-xs uppercase tracking-wider mb-2 font-mono text-gray-400">Technology Stack</h4>
        <div class="flex flex-wrap gap-1.5">
          ${project.tags.map(t => `
            <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
      <button onclick="closeDocumentModal()" class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition">
        Close
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
};

/* ==========================================================================
   CERTIFICATES & ACHIEVEMENTS DYNAMIC SECTION
   ========================================================================== */
function initCertificatesSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.certificates) return;
  const container = document.getElementById('certificates-section-container');
  if (!container) return;

  const { certificates } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${certificates.map(cert => `
        <div class="glass-panel-interactive rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <!-- Certificate Image Thumbnail -->
            <div class="relative aspect-[1.45/1] overflow-hidden bg-white cursor-pointer" onclick="openCertificateModal('${cert.id}')">
              <img 
                src="${cert.image}" 
                alt="${cert.title}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0d121f]/60 via-transparent to-transparent opacity-60"></div>
              <div class="absolute top-3 right-3">
                <span class="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/70 border border-white/15 text-gray-100 backdrop-blur-md shadow">
                  ${cert.issueDate}
                </span>
              </div>
            </div>

            <div class="p-6 pb-2">
              <!-- Title & Issuer -->
              <h3 class="text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors cursor-pointer" onclick="openCertificateModal('${cert.id}')">
                ${cert.title}
              </h3>

              <div class="text-xs text-amber-400 font-medium flex items-center gap-1.5 mt-1.5">
                <i class="fa-solid fa-building text-amber-400/70 text-[11px] shrink-0"></i>
                <span>${cert.issuer}</span>
              </div>

              ${cert.credentialId ? `
                <!-- Monospace Credential ID -->
                <div class="mt-2.5 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-gray-400 max-w-full">
                  <span class="text-gray-500 shrink-0">ID:</span>
                  <span class="text-cyan-300 select-all truncate">${cert.credentialId}</span>
                </div>
              ` : ''}

              <!-- Description -->
              <p class="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed font-normal">
                ${cert.description}
              </p>
            </div>
          </div>

          <!-- Bottom Action Bar -->
          <div class="px-6 pb-6 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <button 
              onclick="openCertificateModal('${cert.id}')" 
              type="button" 
              class="text-gray-300 hover:text-amber-300 font-semibold flex items-center space-x-1.5 transition">
              <i class="fa-solid fa-certificate text-amber-400"></i>
              <span>View Certificate</span>
            </button>

            <span class="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-[10px]"></i>
              <span>Verified</span>
            </span>
          </div>

        </div>
      `).join('')}
    </div>
  `;
}

/* Global helper for Certificate Modal */
window.openCertificateModal = function(certId) {
  if (typeof PORTFOLIO_DATA === 'undefined') return;
  const cert = PORTFOLIO_DATA.certificates.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('document-preview-modal');
  const modalContent = document.getElementById('document-modal-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
      <div class="flex items-center space-x-3">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-br ${cert.iconColor} text-white flex items-center justify-center text-lg shadow-lg shrink-0">
          <i class="${cert.badgeIcon}"></i>
        </div>
        <div>
          <span class="px-2.5 py-0.5 text-[10px] rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-medium">
            Official Credential • ${cert.issueDate}
          </span>
          <h3 class="text-lg sm:text-xl font-bold font-heading text-white mt-1">${cert.title}</h3>
        </div>
      </div>
      <button onclick="closeDocumentModal()" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition shrink-0">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div class="space-y-4 text-sm text-gray-300">
      <!-- Real Certificate Image Preview -->
      <div class="rounded-2xl overflow-hidden border border-white/15 bg-white shadow-lg">
        <img src="${cert.image}" alt="${cert.title}" class="w-full h-auto object-contain">
      </div>

      <div class="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
        <div class="text-gray-300">
          <span class="text-gray-400">Issued by:</span> <strong class="text-white">${cert.issuer}</strong>
        </div>
        ${cert.credentialId ? `
          <div class="px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 font-mono text-cyan-300">
            ID: <span class="select-all">${cert.credentialId}</span>
          </div>
        ` : ''}
      </div>

      <div>
        <h4 class="font-semibold text-white text-sm mb-1.5">Certification Scope & Competency</h4>
        <p class="text-gray-300 leading-relaxed text-xs sm:text-sm font-normal">${cert.description}</p>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-white/10 flex justify-end space-x-3">
      <button onclick="closeDocumentModal()" class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition">
        Close
      </button>
      ${cert.fileUrl ? `
        <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl btn-neon-primary text-xs font-semibold flex items-center space-x-2 transition">
          <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
          <span>Open Original File</span>
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
};

/* ==========================================================================
   SCHOOL ACTIVITIES (.DOCX) DYNAMIC SECTION
   ========================================================================== */
function initActivitiesSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.activities) return;
  const container = document.getElementById('activities-section-container');
  if (!container) return;

  const { activities } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${activities.map(act => `
        <div class="glass-panel-interactive rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <!-- Header: Word Doc Icon & Subject Pill -->
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-file-word"></i>
              </div>
              <span class="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300">
                ${act.course}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-blue-300 transition-colors cursor-pointer" onclick="openDocumentModal('activity', '${act.id}')">
              ${act.title}
            </h3>

            <!-- File Details Tag -->
            <div class="flex items-center space-x-2 text-xs text-gray-400 font-mono mt-1.5 mb-3">
              <span class="text-cyan-400">${act.date}</span>
              <span>•</span>
              <span>${act.fileName}</span>
              <span>•</span>
              <span class="text-gray-300 font-semibold">${act.fileSize}</span>
            </div>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              ${act.summary}
            </p>

            <!-- Highlights Checklist -->
            <div class="mt-4 pt-4 border-t border-white/10 space-y-1.5">
              <span class="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">Key Deliverables</span>
              ${act.previewHighlights.map(h => `
                <div class="flex items-start space-x-2 text-xs text-gray-300">
                  <i class="fa-solid fa-check-double text-blue-400 text-[10px] mt-0.5 shrink-0"></i>
                  <span>${h}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
            <button 
              onclick="openDocumentModal('activity', '${act.id}')" 
              type="button" 
              class="text-gray-300 hover:text-blue-300 font-semibold flex items-center space-x-1.5 transition">
              <i class="fa-solid fa-eye text-blue-400"></i>
              <span>Quick Preview</span>
            </button>

            <button 
              onclick="simulateDownload('${act.fileName}')" 
              type="button" 
              class="px-3.5 py-1.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-white border border-blue-500/30 font-semibold text-xs flex items-center space-x-1.5 transition">
              <i class="fa-solid fa-download text-xs"></i>
              <span>Download (.docx)</span>
            </button>
          </div>

        </div>
      `).join('')}
    </div>
  `;
}

/* ==========================================================================
   SEMINAR REFLECTION PAPERS (.DOCX) DYNAMIC SECTION
   ========================================================================== */
function initReflectionsSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.reflectionPapers) return;
  const container = document.getElementById('reflections-section-container');
  if (!container) return;

  const { reflectionPapers } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${reflectionPapers.map(ref => `
        <div class="glass-panel-interactive rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <!-- Header: Doc Icon & Seminar Badge -->
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 truncate max-w-[170px]">
                ${ref.seminar}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-base sm:text-lg font-bold font-heading text-white group-hover:text-purple-300 transition-colors cursor-pointer" onclick="openDocumentModal('reflection', '${ref.id}')">
              ${ref.title}
            </h3>

            <!-- Speaker & Date -->
            <div class="text-xs text-purple-400 font-medium flex items-center gap-1.5 mt-1.5">
              <i class="fa-solid fa-user-tie text-[10px]"></i>
              <span class="truncate">${ref.speaker}</span>
            </div>

            <!-- File Metadata -->
            <div class="flex items-center space-x-2 text-[11px] text-gray-400 font-mono mt-1 mb-3">
              <span>${ref.date}</span>
              <span>•</span>
              <span class="text-gray-300">${ref.fileSize}</span>
            </div>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed font-normal">
              ${ref.summary}
            </p>

            <!-- Key Takeaways Preview -->
            <div class="mt-4 pt-4 border-t border-white/10 space-y-1.5">
              <span class="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">Key Takeaway</span>
              <div class="flex items-start space-x-2 text-xs text-gray-300">
                <i class="fa-solid fa-lightbulb text-amber-400 text-xs mt-0.5 shrink-0"></i>
                <span class="line-clamp-2">${ref.keyTakeaways[0]}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
            <button 
              onclick="openDocumentModal('reflection', '${ref.id}')" 
              type="button" 
              class="text-gray-300 hover:text-purple-300 font-semibold flex items-center space-x-1.5 transition">
              <i class="fa-solid fa-file-lines text-purple-400"></i>
              <span>Read Insights</span>
            </button>

            <button 
              onclick="simulateDownload('${ref.fileName}')" 
              type="button" 
              class="px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-white border border-purple-500/30 font-semibold text-xs flex items-center space-x-1.5 transition">
              <i class="fa-solid fa-download text-xs"></i>
              <span>.docx</span>
            </button>
          </div>

        </div>
      `).join('')}
    </div>
  `;
}

/* ==========================================================================
   CONTACT SECTION & SOCIAL NETWORKS
   ========================================================================== */
function initContactSection() {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.personal) return;
  const container = document.getElementById('contact-section-container');
  if (!container) return;

  const { personal } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left Column: Contact Cards & Socials (5 Cols) -->
      <div class="lg:col-span-5 space-y-4">
        
        <!-- Status Card -->
        <div class="glass-panel rounded-3xl p-6 border border-emerald-500/30 space-y-3">
          <div class="flex items-center space-x-2.5">
            <span class="pulse-indicator w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span class="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">Opportunity Status</span>
          </div>
          <h4 class="text-lg font-bold font-heading text-white">Actively Seeking Opportunities</h4>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            Graduating BSIT senior available for full-time junior developer roles, graduation internships, and freelance web projects.
          </p>
        </div>

        <!-- Direct Email Card -->
        <div class="glass-panel rounded-2xl p-5 border border-white/10 hover:border-cyan-400/30 transition-all group">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3.5">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <span class="text-[11px] font-mono text-gray-400 block uppercase">Email Address</span>
                <a href="mailto:${personal.email}" class="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                  ${personal.email}
                </a>
              </div>
            </div>
            <button onclick="triggerCopyEmail()" type="button" aria-label="Copy Email" class="w-8 h-8 rounded-lg glass-btn flex items-center justify-center text-gray-400 hover:text-cyan-400 transition" title="Copy Email">
              <i class="fa-solid fa-copy text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Phone Card -->
        <div class="glass-panel rounded-2xl p-5 border border-white/10 hover:border-violet-400/30 transition-all group">
          <div class="flex items-center space-x-3.5">
            <div class="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div>
              <span class="text-[11px] font-mono text-gray-400 block uppercase">Phone / Mobile</span>
              <a href="tel:${personal.phone.replace(/[^0-9+]/g, '')}" class="text-sm font-semibold text-white hover:text-violet-400 transition-colors">
                ${personal.phone}
              </a>
            </div>
          </div>
        </div>

        <!-- Location Card -->
        <div class="glass-panel rounded-2xl p-5 border border-white/10 hover:border-amber-400/30 transition-all group">
          <div class="flex items-center space-x-3.5">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <span class="text-[11px] font-mono text-gray-400 block uppercase">Location & Timezone</span>
              <span class="text-sm font-semibold text-white">${personal.location} (GMT+8)</span>
            </div>
          </div>
        </div>

        <!-- Social Connect Buttons -->
        <div class="glass-panel rounded-2xl p-5 border border-white/10 space-y-3">
          <span class="text-[11px] font-mono text-gray-400 block uppercase tracking-wider">Social Profiles</span>
          <div class="grid grid-cols-3 gap-2">
            <a href="${personal.socials.facebook}" target="_blank" rel="noopener noreferrer" class="h-11 rounded-xl glass-btn flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400/40 transition group" title="Facebook">
              <i class="fa-brands fa-facebook text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="${personal.socials.twitter}" target="_blank" rel="noopener noreferrer" class="h-11 rounded-xl glass-btn flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition group" title="Twitter">
              <i class="fa-brands fa-x-twitter text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="${personal.socials.instagram}" target="_blank" rel="noopener noreferrer" class="h-11 rounded-xl glass-btn flex items-center justify-center text-gray-300 hover:text-pink-400 hover:border-pink-400/40 transition group" title="Instagram">
              <i class="fa-brands fa-instagram text-lg group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>

      </div>

      <!-- Right Column: Interactive Glassmorphic Form (7 Cols) -->
      <div class="lg:col-span-7">
        <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
          <div class="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div>
              <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Direct Message</span>
              <h3 class="text-xl font-bold font-heading text-white mt-0.5">Send a Message</h3>
            </div>
            <div class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm border border-cyan-500/20">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>

          <form id="portfolio-contact-form" onsubmit="handleContactFormSubmit(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Name Input -->
              <div>
                <label for="contact-name" class="block text-xs font-mono uppercase text-gray-400 mb-1.5 font-medium">Your Name</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <i class="fa-solid fa-user text-xs"></i>
                  </div>
                  <input 
                    type="text" 
                    id="contact-name" 
                    required 
                    placeholder="John Doe" 
                    class="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition">
                </div>
              </div>

              <!-- Email Input -->
              <div>
                <label for="contact-email" class="block text-xs font-mono uppercase text-gray-400 mb-1.5 font-medium">Your Email</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <i class="fa-solid fa-envelope text-xs"></i>
                  </div>
                  <input 
                    type="email" 
                    id="contact-email" 
                    required 
                    placeholder="john@example.com" 
                    class="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition">
                </div>
              </div>
            </div>

            <!-- Subject Select -->
            <div>
              <label for="contact-subject" class="block text-xs font-mono uppercase text-gray-400 mb-1.5 font-medium">Subject / Reason</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <i class="fa-solid fa-tag text-xs"></i>
                </div>
                <select 
                  id="contact-subject" 
                  class="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#0d121f] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition appearance-none">
                  <option value="Internship Opportunity">Internship Opportunity / Hiring</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="School / Academic Inquiry">School / Academic Inquiry</option>
                  <option value="General Question">General Question / Say Hi</option>
                </select>
                <div class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-500">
                  <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>

            <!-- Message Textarea -->
            <div>
              <label for="contact-message" class="block text-xs font-mono uppercase text-gray-400 mb-1.5 font-medium">Message</label>
              <textarea 
                id="contact-message" 
                rows="4" 
                required 
                placeholder="Hi Alex, I'd like to talk about an internship opportunity..." 
                class="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition resize-none"></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              id="contact-submit-btn" 
              type="submit" 
              class="w-full py-3.5 rounded-xl btn-neon-primary text-sm font-semibold tracking-wide flex items-center justify-center space-x-2 transition shadow-lg shadow-cyan-500/20">
              <i class="fa-solid fa-paper-plane text-xs"></i>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  `;
}

/* Global Form Handler */
window.handleContactFormSubmit = function(event) {
  event.preventDefault();
  const nameInput = document.getElementById('contact-name');
  const submitBtn = document.getElementById('contact-submit-btn');

  const senderName = nameInput ? nameInput.value.trim() : 'Friend';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i><span>Sending Message...</span>`;
  }

  setTimeout(() => {
    showToast(`Thank you, ${senderName}! Message sent successfully. 🎉`);
    const form = document.getElementById('portfolio-contact-form');
    if (form) form.reset();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane text-xs mr-2"></i><span>Send Message</span>`;
    }
  }, 900);
};






