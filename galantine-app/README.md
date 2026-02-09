#  Galentine's Day Web App

A heartwarming, interactive web application created to ask your bestie to be your Galentine! This multi-page experience is filled with sweet messages, beautiful animations, and memorable moments.

##  Features

###  Pages

1. **index.html** - Landing Page
   - Animated pink gradient background
   - Quote carousel with rotating friendship messages
   - 4 flip cards with photos and heartwarming messages
   - Floating hearts and stars animations
   - Mobile-responsive design

2. **memories.html** - Memories Gallery
   - Beautiful purple gradient background
   - 4 clickable photo cards that reveal friendship messages
   - Floating hearts, flowers , sparkles , and cute emojis 
   - Modal popups with sweet messages
   - Fully mobile-responsive with appropriate padding

3. **question.html** - The Big Question
   - Interactive Galentine's Day proposal
   - Cute GIFs from Giphy
   - Playful "No" button that:
     - Changes text 3 times ("Are you sure? ", "But... snacks! ", "And tea ! ☕")
     - Then disappears and reappears in random positions
     - Shows random playful messages
   - Pulsing "Yes" button
   - Confetti explosion on "Yes"
   - Success screen with celebration GIF
   - "Back to Home" button to return to index.html
   - Fully mobile-responsive

## Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** (via CDN) - Styling and responsiveness
- **Vanilla JavaScript** - Interactivity and animations
- **CSS Animations** - Background gradients, floating elements, confetti

##  Design Highlights

-  Pink and purple gradient themes
-  Smooth animations and transitions
-  Fully responsive (mobile, tablet, desktop)
-  Floating elements (hearts, flowers, sparkles, emojis)
-  Interactive elements (flip cards, modals, confetti)
-  GIF integration for added cuteness

##  File Structure

```
galentine-app/
│
├── index.html           # Landing page with flip cards
├── memories.html        # Memories gallery with floating elements
├── question.html        # Galentine's Day question page
├── README.md           # This file
│
└── assets/             # Image folder
    ├── picture1.jpeg
    ├── picture2.jpeg
    ├── picture3.jpeg
    ├── picture4.jpeg
    ├── picture5.jpeg
    ├── picture6.jpeg
    ├── picture7.jpeg
    └── picture8.jpeg
```

##  Getting Started

1. **Clone or download** this repository
2. Make sure you have the `assets` folder with your photos (picture1.jpeg through picture8.jpeg)
3. Open `index.html` in your web browser
4. Navigate through the pages:
   - Click photos on the landing page to flip them
   - Click "okaaaaaaaay click me next 😝💌" to go to memories page
   - Click "Click here for a surprise question 💌 🎁" to go to the question page
   - Try clicking "No" multiple times for a fun surprise! 😝

##  How It Works

### Navigation Flow
```
index.html → memories.html → question.html → (Yes!) → Back to index.html
```

### Interactive Elements

**Flip Cards (index.html & memories.html)**
- Click any photo to reveal a sweet message on the back
- Click again to flip back to the photo

**Playful "No" Button (question.html)**
- First 3 clicks: Changes text with cute messages
- After that: Disappears and reappears randomly on the screen
- Impossible to actually say no! 

**Confetti Celebration**
- Triggers when "Yes" is clicked
- 100 colorful confetti pieces fall from the top
- Automatic cleanup after 3 seconds

##  Customization

### To personalize for your bestie:

1. **Replace photos**: Add your own photos in the `assets` folder (picture1-8.jpeg)

2. **Update messages**: Edit the messages in each HTML file:
   - Flip card messages on index.html
   - Modal messages on memories.html
   - Main question text on question.html

3. **Change names**: Replace "Nicole" with your bestie's name in question.html

4. **Customize colors**: Modify the gradient colors in the CSS sections

##  Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Color Palette

- **Pink Shades**: #fecdd3, #fda4af, #fb7185, #f472b6, #ec4899
- **Purple Shades**: #a855f7, #9333ea, #7c3aed
- **Accents**: White with transparency (backdrop-blur effects)

##  Special Features

- Animated gradient backgrounds that shift colors
- Floating animations with rotation effects
- Smooth page transitions
- Hover effects on all interactive elements
- Responsive typography and spacing
- Touch-friendly buttons for mobile devices

## Perfect For

- Galentine's Day celebrations
- Friendship appreciation
- Best friend surprises
- Fun interactive greetings
- Special occasion messages

##  License

This project is open source and free to use for personal purposes. Feel free to customize it for your own bestie! 

##  Credits

Created with love for amazing friendships! 

GIFs powered by [Giphy](https://giphy.com)

---

Made with  by a bestie for a bestie!

**Remember**: Good friends are like stars. You don't always see them, but you know they're always there. 