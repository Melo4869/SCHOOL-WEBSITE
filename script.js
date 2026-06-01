// Module data with composite icons (SVG paths)
const modules = [
    {
        id: 'agriculture',
        title: 'Agriculture and Animal Sciences',
        icons: {
            main: '<path d="M2 12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3M2 12a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M2 12v6M22 12v6"/><path d="m7 20-4-4M17 20l4-4"/>',
            secondary: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
        }
    },
    {
        id: 'architecture',
        title: 'Architecture, Design and Urban Planning',
        icons: {
            main: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
            secondary: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/>'
        }
    },
    {
        id: 'arts',
        title: 'Arts, Humanities and Social Sciences',
        icons: {
            main: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
            secondary: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>'
        }
    },
    {
        id: 'business',
        title: 'Business and Economics',
        icons: {
            main: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
            secondary: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'
        }
    },
    {
        id: 'communication',
        title: 'Communication, Media and Experience Design',
        icons: {
            main: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
            secondary: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
        }
    },
    {
        id: 'computer',
        title: 'Computer Science and IT',
        icons: {
            main: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01"/>',
            secondary: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>'
        }
    },
    {
        id: 'education',
        title: 'Education',
        icons: {
            main: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
            secondary: '<path d="M9 10h.01M15 10h.01"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="12" cy="12" r="10"/>'
        }
    },
    {
        id: 'engineering',
        title: 'Engineering',
        icons: {
            main: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
            secondary: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
        }
    },
    {
        id: 'environment',
        title: 'Environment',
        icons: {
            main: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
            secondary: '<path d="M12 20a8 8 0 0 1-8-8V3h16v9a8 8 0 0 1-8 8Zm0 0v4"/><path d="M8 2h8"/><path d="M12 6v4"/>'
        }
    },
    {
        id: 'health',
        title: 'Health and Medicine',
        icons: {
            main: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
            secondary: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>'
        }
    },
    {
        id: 'law',
        title: 'Law',
        icons: {
            main: '<path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"/><path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"/><path d="M3 2h18"/><path d="M3 9h18"/><path d="M3 16h18"/>',
            secondary: '<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/>'
        }
    },
    {
        id: 'science',
        title: 'Science and Mathematics',
        icons: {
            main: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
            secondary: '<rect width="4" height="16" x="6" y="4" rx="2"/><rect width="4" height="11" x="14" y="9" rx="2"/>'
        }
    }
];

let isLoggedIn = false;
let searchQuery = '';

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const courseScreen = document.getElementById('course-screen');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const modulesContainer = document.getElementById('modules-container');
const noResults = document.getElementById('no-results');
const searchTerm = document.getElementById('search-term');

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        isLoggedIn = true;
        showCourseScreen();
    }
});

// Logout Handler
logoutBtn.addEventListener('click', () => {
    isLoggedIn = false;
    showLoginScreen();
    loginForm.reset();
    searchInput.value = '';
    searchQuery = '';
});

// Search Handlers
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterModules();
});

searchBtn.addEventListener('click', () => {
    filterModules();
});

// Show/Hide Screens
function showLoginScreen() {
    loginScreen.classList.add('active');
    courseScreen.classList.remove('active');
}

function showCourseScreen() {
    loginScreen.classList.remove('active');
    courseScreen.classList.add('active');
    renderModules();
}

// Create SVG icon element
function createIcon(pathData, className) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    if (className) {
        svg.classList.add(className);
    }
    svg.innerHTML = pathData;
    return svg;
}

// Render Modules
function renderModules() {
    const filteredModules = getFilteredModules();

    if (filteredModules.length === 0) {
        modulesContainer.style.display = 'none';
        noResults.style.display = 'block';
        searchTerm.textContent = searchQuery;
    } else {
        modulesContainer.style.display = 'grid';
        noResults.style.display = 'none';

        modulesContainer.innerHTML = '';

        filteredModules.forEach(module => {
            const card = document.createElement('div');
            card.className = 'module-card';

            const iconContainer = document.createElement('div');
            iconContainer.className = 'module-icon-container';

            const iconBg = document.createElement('div');
            iconBg.className = 'module-icon-bg';

            const iconsWrapper = document.createElement('div');
            iconsWrapper.className = 'module-icons';

            const mainIcon = createIcon(module.icons.main, 'icon-main');
            const secondaryIcon = createIcon(module.icons.secondary, 'icon-secondary');

            iconsWrapper.appendChild(mainIcon);
            iconsWrapper.appendChild(secondaryIcon);
            iconContainer.appendChild(iconBg);
            iconContainer.appendChild(iconsWrapper);

            const title = document.createElement('h3');
            title.className = 'module-title';
            title.textContent = module.title;

            const arrowWrapper = document.createElement('div');
            arrowWrapper.className = 'module-arrow';
            arrowWrapper.innerHTML = `
                <div class="arrow-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            `;

            card.appendChild(iconContainer);
            card.appendChild(title);
            card.appendChild(arrowWrapper);

            card.addEventListener('click', () => {
                console.log('Selected:', module.title);
                alert('Selected: ' + module.title);
            });

            modulesContainer.appendChild(card);
        });
    }
}

// Filter modules based on search
function getFilteredModules() {
    if (!searchQuery) return modules;

    return modules.filter(module =>
        module.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

// Filter and re-render
function filterModules() {
    renderModules();
}

// Initialize
showLoginScreen();
