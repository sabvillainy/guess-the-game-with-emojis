// Game data
const games = [
    {
        name: "Red Dead Redemption 2",
        emojis: ["🤠", "🌵", "🔫", "🐎", "🌅"],
        hint: "A western-themed open world game"
    },
    {
        name: "The Legend of Zelda: Breath of the Wild",
        emojis: ["🗡️", "🛡️", "🌲", "🏰", "🐉"],
        hint: "An open world adventure game with a hero in green"
    },
    {
        name: "Minecraft",
        emojis: ["⛏️", "🧱", "🌳", "🐷", "💎"],
        hint: "A sandbox game where you can build and craft"
    },
    {
        name: "Grand Theft Auto V",
        emojis: ["🚗", "💰", "🔫", "🏙️", "👥"],
        hint: "An open world crime game set in a modern city"
    },
    {
        name: "The Witcher 3",
        emojis: ["⚔️", "🐺", "🧙", "🐉", "🏰"],
        hint: "A fantasy RPG with a monster hunter protagonist"
    },
    {
        name: "Among Us",
        emojis: ["👨‍🚀", "🔪", "🚀", "❓", "🕵️"],
        hint: "A multiplayer game about finding the impostor"
    },
    {
        name: "Fortnite",
        emojis: ["🔫", "🏗️", "🌪️", "🏆", "💃"],
        hint: "A popular battle royale game with building mechanics"
    },
    {
        name: "FIFA 24",
        emojis: ["⚽", "🏟️", "🏆", "👟", "🥅"],
        hint: "The world's most popular football/soccer simulation"
    },
    {
        name: "Call of Duty: Warzone",
        emojis: ["🪂", "🔫", "💣", "🏙️", "🎖️"],
        hint: "A military-themed battle royale shooter"
    },
    {
        name: "Elden Ring",
        emojis: ["💍", "🐎", "🗡️", "👑", "💀"],
        hint: "An open world fantasy RPG known for its difficulty"
    },
    {
        name: "League of Legends",
        emojis: ["🏆", "🧙", "🔮", "🏰", "5️⃣"],
        hint: "A popular 5v5 MOBA game"
    },
    {
        name: "Cyberpunk 2077",
        emojis: ["🌃", "🤖", "🔫", "💊", "⚡"],
        hint: "A futuristic RPG set in a neon-lit dystopian city"
    },
    {
        name: "God of War: Ragnarok",
        emojis: ["⚔️", "❄️", "👨‍👦", "🪓", "🐺"],
        hint: "A Norse mythology-inspired action adventure"
    },
    {
        name: "Super Mario Odyssey",
        emojis: ["👨🏻‍🔧", "🧢", "🌟", "🌍", "🍄"],
        hint: "A plumber's 3D platforming adventure"
    },
    {
        name: "Valorant",
        emojis: ["🔫", "💨", "🔮", "💣", "🛡️"],
        hint: "A 5v5 tactical shooter with unique agent abilities"
    },
    {
        name: "Stardew Valley",
        emojis: ["🌱", "🐓", "🎣", "⛏️", "💍"],
        hint: "A relaxing farming simulation with relationship elements"
    },
    {
        name: "Fall Guys",
        emojis: ["🦴", "🏃", "🏆", "🤪", "🚧"],
        hint: "A colorful multiplayer obstacle course battle royale"
    },
    {
        name: "Horizon Forbidden West",
        emojis: ["🏹", "🤖", "🦖", "🏞️", "👩‍🦰"],
        hint: "A post-apocalyptic adventure with robot dinosaurs"
    },
    {
        name: "Genshin Impact",
        emojis: ["⚔️", "🧝", "🔮", "🌍", "🎮"],
        hint: "An open world anime-style adventure with elemental combat"
    },
    {
        name: "Animal Crossing: New Horizons",
        emojis: ["🏝️", "🦝", "🏠", "🎣", "🍎"],
        hint: "A relaxing life simulation on your own island"
    },
    {
        name: "Assassin's Creed Valhalla",
        emojis: ["⚔️", "🛡️", "🏰", "🚢", "🪓"],
        hint: "A Viking-themed historical action adventure"
    },
    {
        name: "Hollow Knight",
        emojis: ["🐛", "⚔️", "🕷️", "👑", "🌑"],
        hint: "A challenging 2D action adventure with bugs"
    },
    {
        name: "Death Stranding",
        emojis: ["👶", "📦", "👣", "☔", "👻"],
        hint: "A delivery-focused game in a post-apocalyptic world"
    },
    {
        name: "Resident Evil 4",
        emojis: ["🧟", "👨‍👧", "🏰", "🔫", "👩‍⚕️"],
        hint: "A horror survival game with a rescue mission"
    }
];

// DOM Elements
const emojisContainer = document.getElementById('emojis');
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');
const messageDiv = document.getElementById('message');
const scoreSpan = document.getElementById('score');
const highScoreSpan = document.getElementById('highScore');
const newGameButton = document.getElementById('newGame');
const hintButton = document.getElementById('hint');
const themeToggle = document.getElementById('themeToggle');
const loginModal = document.getElementById('loginModal');
const leaderboardModal = document.getElementById('leaderboardModal');
const usernameInput = document.getElementById('usernameInput');
const loginBtn = document.getElementById('loginBtn');
const leaderboardBtn = document.getElementById('leaderboardBtn');
const logoutBtn = document.getElementById('logoutBtn');
const currentUserSpan = document.getElementById('currentUser');
const leaderboardBody = document.getElementById('leaderboardBody');
const closeModalButtons = document.querySelectorAll('.close-modal');

// Game state
let currentGame = null;
let score = 0;
let highScore = 0;
let attempts = 0;
const maxAttempts = 3;
let currentUser = null;
let gamesPlayed = 0;

// User data management
function saveUserData() {
    if (!currentUser) return;

    const userData = {
        highScore: highScore,
        gamesPlayed: gamesPlayed
    };

    localStorage.setItem(`user_${currentUser}`, JSON.stringify(userData));
    updateLeaderboard();
}

function loadUserData() {
    if (!currentUser) return;

    const userData = JSON.parse(localStorage.getItem(`user_${currentUser}`)) || {
        highScore: 0,
        gamesPlayed: 0
    };

    highScore = userData.highScore;
    gamesPlayed = userData.gamesPlayed;
    highScoreSpan.textContent = highScore;
}

// Login/Logout functionality
function login() {
    const username = usernameInput.value.trim();
    if (username === '') {
        showMessage('Please enter a username!', 'error');
        return;
    }

    currentUser = username;
    currentUserSpan.textContent = username;
    loginModal.classList.remove('active');
    logoutBtn.style.display = 'block';
    loadUserData();
    initGame();
}

function logout() {
    currentUser = null;
    currentUserSpan.textContent = 'Guest';
    logoutBtn.style.display = 'none';
    score = 0;
    highScore = 0;
    gamesPlayed = 0;
    scoreSpan.textContent = '0';
    highScoreSpan.textContent = '0';
    loginModal.classList.add('active');
}

// Leaderboard functionality
function updateLeaderboard() {
    const users = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('user_')) {
            const username = key.replace('user_', '');
            const userData = JSON.parse(localStorage.getItem(key));
            users.push({
                username: username,
                highScore: userData.highScore,
                gamesPlayed: userData.gamesPlayed
            });
        }
    }

    users.sort((a, b) => b.highScore - a.highScore);

    leaderboardBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.highScore}</td>
            <td>${user.gamesPlayed}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Initialize game
function initGame() {
    currentGame = games[Math.floor(Math.random() * games.length)];
    emojisContainer.textContent = currentGame.emojis.join(' ');
    messageDiv.textContent = '';
    attempts = 0;
    scoreSpan.textContent = score;
    highScoreSpan.textContent = highScore;
}

// Check guess
function checkGuess() {
    if (!currentUser) {
        showMessage('Please login to play!', 'error');
        loginModal.classList.add('active');
        return;
    }

    const guess = guessInput.value.trim().toLowerCase();
    const correctAnswer = currentGame.name.toLowerCase();

    if (guess === '') {
        showMessage('Please enter a guess!', 'error');
        return;
    }

    attempts++;

    if (guess === correctAnswer) {
        score += 10;
        gamesPlayed++;
        if (score > highScore) {
            highScore = score;
            saveUserData();
        }
        showMessage('Correct! Well done! 🎉', 'success');
        setTimeout(() => {
            initGame();
        }, 2000);
    } else {
        if (attempts >= maxAttempts) {
            showMessage(`Game Over! The answer was ${currentGame.name}`, 'error');
            score = Math.max(0, score - 5);
            gamesPlayed++;
            saveUserData();
            setTimeout(() => {
                initGame();
            }, 2000);
        } else {
            showMessage(`Wrong! Try again. Attempts left: ${maxAttempts - attempts}`, 'error');
        }
    }

    guessInput.value = '';
    scoreSpan.textContent = score;
    highScoreSpan.textContent = highScore;
}

// Show message
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
}

// Show hint
function showHint() {
    if (!currentUser) {
        showMessage('Please login to use hints!', 'error');
        loginModal.classList.add('active');
        return;
    }
    showMessage(`Hint: ${currentGame.hint}`, 'hint');
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', newTheme);
}

// Event Listeners
submitButton.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});
newGameButton.addEventListener('click', initGame);
hintButton.addEventListener('click', showHint);
themeToggle.addEventListener('click', toggleTheme);
loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);
leaderboardBtn.addEventListener('click', () => {
    updateLeaderboard();
    leaderboardModal.classList.add('active');
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.classList.remove('active');
        leaderboardModal.classList.remove('active');
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (e.target === leaderboardModal) {
        leaderboardModal.classList.remove('active');
    }
});

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Check for saved user
const savedUser = localStorage.getItem('currentUser');
if (savedUser) {
    currentUser = savedUser;
    currentUserSpan.textContent = savedUser;
    logoutBtn.style.display = 'block';
    loadUserData();
}

// Start the game
initGame();