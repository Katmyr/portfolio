const projectData = {
    "Landmark": {
        title: "LANDMARK",
        subtitle: "Future of Retail Loyalty",
        img: "images/landmark-preview.png",
        desc: "Strategic UX project for TCC Global to transform transactional loyalty into emotional engagement.",
        group: "Group",
        duration: "4 month",
        tools: "Figma, After Effects",
        tags: ["UX Strategy", "Retail", "Phygital"],
        link: "landmark.html"
    },
    "Dogliday": {
        title: "DOGLIDAY",
        subtitle: "Dog-sitting Platform",
        img: "images/dogliday-preview.png",
        desc: "Creation of a comprehensive Design System and mobile app for stress-free dog-sitting.",
        group: "Duo project",
        duration: "1 month",
        tools: "Figma, After Effects",
        tags: ["Design System", "Mobile UX", "Motion Design"],
        link: "dogliday.html"
    },
    "KissMarryKill": {
        title: "KissMarryKill",
        subtitle: "Web Gaming project",
        img: "images/kmk-preview.png",
        desc: "Full-stack development and UX/UI overhaul of a viral online game (2021-2026).",
        group: "Solo",
        duration: "Ongoing",
        tools: "HTML-CSS-JS coding",
        tags: ["Full-stack", "Gamification", "Product Design"],
        link: "kmk.html"
    },
    "NIX": {
        title: "NIX",
        subtitle: "Entertainment Casino Platform",
        img: "images/nix-preview.png",
        desc: "Branding and UI Design for a recreational online casino from scratch.",
        group: "Solo (freelance project)",
        duration: "2 weeks",
        tools: "Figma, After Effects",
        tags: ["Branding", "UI Design"],
        link: "nix.html"
    },
    "Maestro": {
        title: "Maestro",
        subtitle: "Smart audio ecosystem",
        img: "images/maestro-preview.png",
        desc: "UX/UI Design of a B2B hardware & software solution to streamline live music logistics.",
        group: "Solo",
        duration: "3 weeks",
        tools: "Figma, Blender, Vizcom (AI)",
        tags: ["Hardware UX", "B2B", "3D Design"],
        link: "maestro.html"
    }
    // Tu peux en ajouter autant que tu veux !
};

function openProject(name) {
    const data = projectData[name];
    if(!data) return;

    document.getElementById('inner-title').innerText = data.title;
    document.getElementById('inner-subtitle').innerText = data.subtitle;
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-group').innerText = data.group;
    document.getElementById('modal-duration').innerText = data.duration;
    document.getElementById('modal-tools').innerText = data.tools;
    document.getElementById('modal-link').href = data.link;

    const tagContainer = document.getElementById('modal-tags');
    tagContainer.innerHTML = "";
    data.tags.forEach(tag => {
        const s = document.createElement('span');
        s.className = 'tag';
        s.innerText = tag;
        tagContainer.appendChild(s);
    });

    document.getElementById('project-overlay').style.display = 'flex';
}

function closeProject() {
    document.getElementById('project-overlay').style.display = 'none';
}



window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const menuLink = document.querySelector(`.project-sidebar a[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                // On retire la classe active de tous les liens
                document.querySelectorAll('.project-sidebar a').forEach(link => {
                    link.classList.remove('active');
                });
                // On l'ajoute au lien de la section visible
                if (menuLink) menuLink.classList.add('active');
            }
        });
    }, { 
        threshold: 0.5, // La section est considérée active quand 50% est visible
        rootMargin: "-10% 0px -70% 0px" // Ajuste la zone de détection
    });

    // On observe chaque section qui a un ID correspondant au sommaire
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});

document.querySelectorAll('.comparison-slider').forEach((slider) => {
    const input = slider.querySelector('.slider-input');
    const beforeWrapper = slider.querySelector('.image-before-wrapper');
    const sliderLine = slider.querySelector('.slider-line');
    const sliderButton = slider.querySelector('.slider-button');

    if (input) {
        input.addEventListener('input', (e) => {
            const value = e.target.value + "%";
            beforeWrapper.style.width = value;
            sliderLine.style.left = value;
            sliderButton.style.left = value;
        });
    }
});

function openContact() {
  document.getElementById('contactOverlay').classList.add('open');
}

function closeContact(e) {
  if (!e || e.target === document.getElementById('contactOverlay')) {
    document.getElementById('contactOverlay').classList.remove('open');
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeContact();
});

// Dropdown
function toggleDropdown(e) {
  e.preventDefault();
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('projectDropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    document.getElementById('dropdownMenu').style.display = 'none';
  }
});

// Sommaire actif au scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.project-sidebar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});