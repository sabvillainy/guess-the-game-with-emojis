# 🎮 Guess The Game With Emojis

An interactive and fun web-based game where players guess popular video games based on a set of five emojis! Test your gaming knowledge and see how many games you can identify from emoji clues alone. Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Live Demo
[Play the Game](https://sabvillainy.github.io/guess-the-game-with-emojis/)

![image](https://github.com/user-attachments/assets/0a1d105d-0563-4ce7-ae4d-b56288209fa5)




## 🌟 Features

### 🎯 Core Gameplay
- **Emoji-based puzzles**: Guess popular video games from creative emoji combinations
- **Multiple attempts**: Players get 3 attempts per game
- **Hint system**: Get helpful clues when you're stuck
- **Instant feedback**: Real-time scoring and game state updates

### 👤 User Management
- **User registration**: Create and manage personalized profiles
- **Score tracking**: Individual score tracking with persistent data
- **Leaderboard**: Global ranking system showing top players
- **Session persistence**: Your progress is saved between visits

### 🎨 User Experience
- **Dark/Light theme toggle**: Switch between themes for comfortable gaming
- **Responsive design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Accessibility**: Proper contrast ratios and semantic markup

### 📊 Game Statistics
- **Real-time scoring**: +10 points for correct answers, -5 for wrong ones
- **High score tracking**: Personal best scores saved locally
- **Games played counter**: Track your gaming activity
- **Comprehensive leaderboard**: Compare your performance with other players

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone the repository:
```bash
git clone https://github.com/sabvillainy/guess-the-game-with-emojis.git
```

2. Open `index.html` in your browser

3. Start playing!

## 🎮 How to Play

1. **Login**: Enter a username to start tracking your scores
2. **Observe**: Look at the emoji combination displayed
3. **Guess**: Type your guess for the video game title
4. **Submit**: Press Enter or click Submit to check your answer
5. **Scoring**: 
   - Correct guess: +10 points
   - Wrong guess: -5 points
   - Maximum 3 attempts per game
6. **Hints**: Use the hint button for clues when needed
7. **Continue**: New games are automatically generated after each round

## 🎯 Game Collection

The game features 24 popular video games including:

- **Action/Adventure**: Red Dead Redemption 2, The Legend of Zelda: Breath of the Wild, Assassin's Creed Valhalla
- **RPGs**: The Witcher 3, Elden Ring, Cyberpunk 2077, Genshin Impact
- **Battle Royale**: Fortnite, Call of Duty: Warzone, Fall Guys
- **Simulation**: Minecraft, Stardew Valley, Animal Crossing: New Horizons
- **Sports**: FIFA 24
- **Multiplayer**: Among Us, League of Legends, Valorant
- **Indie**: Hollow Knight, Death Stranding
- **Horror**: Resident Evil 4
- **Platform**: Super Mario Odyssey

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Flexbox, Grid, CSS Variables, and responsive design
- **Vanilla JavaScript**: ES6+ features, local storage, and DOM manipulation
- **Font Awesome**: Icon library for enhanced UI
- **Google Fonts**: Poppins font family for modern typography

### Architecture
```
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Game logic and functionality
└── media/
    ├── favicon.png     # Browser tab icon
    └── sab-picrew.png  # Developer avatar
```

### Data Storage
- **Local Storage**: User data, scores, and preferences
- **No backend required**: Fully client-side application
- **Persistent data**: Scores and user information saved between sessions

## 🎨 Customization

### Adding New Games
To add new games, modify the `games` array in `script.js`:

```javascript
{
    name: "Game Title",
    emojis: ["🎮", "🌟", "⚔️"],
    hint: "A helpful hint about the game"
}
```

### Styling
- Modify `style.css` to customize colors, fonts, and layout
- CSS variables are used for easy theme customization
- Responsive breakpoints can be adjusted for different screen sizes

### Themes
The application supports light and dark themes. To modify themes, update the CSS variables in the `:root` and `[data-theme="dark"]` selectors.

## 📱 Mobile Support

The game is fully responsive and optimized for mobile devices:
- Touch-friendly interface
- Optimized typography for small screens
- Swipe and tap interactions
- Proper viewport configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🚀 Future Enhancement Ideas

### 🔐 User Authentication & Database

- Implement a real backend database system (PostgreSQL, MongoDB)
- User registration with email and password authentication
- Secure login system with password hashing
- Cross-device account synchronization
- User profile management with avatars and preferences

### 🎯 Progressive Emoji Reveal System

- Start each game with only the first emoji visible
- Show remaining 4 emojis as "?" mystery symbols
- Reveal next emoji with each wrong guess
- Progressive hint system that unlocks with each reveal:
  - Game release year
  - Game genre/category
  - Gaming platform (PC, Console, Mobile)
  - Developer/Publisher information
  - Key gameplay mechanics

### ⏱️ Timed Challenge Mode

- Speed-based scoring system — faster answers = more points
- Countdown timer for each question
- Time pressure mechanics for competitive play
- Streak multipliers for consecutive correct answers
- Rush mode with rapid-fire questions
- Daily/weekly timed challenges with special rewards

### 📊 Advanced Features

- Detailed player statistics and analytics
- Achievement badge system
- Seasonal leaderboards with periodic resets
- Tournament brackets and competitive events
- Social sharing of high scores and achievements
- Custom difficulty levels (Easy/Medium/Hard)
- Player-generated content (create your own emoji puzzles)


---

**Enjoy the game and test your video game knowledge! 🎮✨**

*If you enjoyed this project, give it a ⭐!*
