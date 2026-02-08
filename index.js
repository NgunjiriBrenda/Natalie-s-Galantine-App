 
    const emojis = ['🌸', '💖', '🌹', '💕', '🦋', '✨', '💝', '🌺', '💗', '🎀'];
    const container = document.getElementById('flowersContainer');

    function createFloatingEmoji() {
      const emoji = document.createElement('div');
      emoji.className = 'flower';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
     
      emoji.style.left = Math.random() * 100 + '%';
      
     
      emoji.style.bottom = '-50px';
      
     
      emoji.style.animationDuration = (Math.random() * 7 + 8) + 's';
      
    
      emoji.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(emoji);
      
    
      setTimeout(() => {
        emoji.remove();
      }, 17000);
    }

   
    setInterval(createFloatingEmoji, 800);
    
    
    for (let i = 0; i < 5; i++) {
      setTimeout(createFloatingEmoji, i * 300);
    }

const quotes = [
    "\"A true friend sees the pain in your eyes.\" 💕",
    "\"Friends are the family we choose.\" 🫶",
    "\"Good friends are like stars.\" ⭐",
    "\"Life is better with you by my side.\" 💖"
];

let currentQuote = 0;
const quoteText = document.querySelector('.quote-text');
const dots = document.querySelectorAll('.dot');

function updateQuote() {
    quoteText.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = quotes[currentQuote];
        quoteText.style.opacity = '1';
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentQuote);
        });
        
        currentQuote = (currentQuote + 1) % quotes.length;
    }, 300);
}

// Initialize first quote
updateQuote();
setInterval(updateQuote, 4000);

// Flip Card Function with Confetti and Sound
function flipCard(card, photoId) {
    card.classList.toggle('flipped');
    
    // Play click sound
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {}); // Ignore if sound fails
    
    // Trigger confetti
    if (!card.classList.contains('flipped')) {
        createConfetti(card);
    }
}

// Confetti Animation
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const confettiCount = window.innerWidth < 640 ? 20 : 30; // Less confetti on mobile
    const confetti = [];
    
    const colors = ['#ec4899', '#f472b6', '#fb7185', '#fda4af', '#fbbf24', '#a78bfa'];
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: centerX,
            y: centerY,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10 - 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let stillAnimating = false;
        
        confetti.forEach((piece, index) => {
            piece.vy += 0.3; // gravity
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            
            if (piece.y < canvas.height) {
                stillAnimating = true;
                
                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate(piece.rotation * Math.PI / 180);
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
                ctx.restore();
            }
        });
        
        if (stillAnimating) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// Floating hearts
const heartsEmojis = ['💖', '💕', '💗', '💝', '💘'];
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('span');
    heart.textContent = heartsEmojis[Math.floor(Math.random() * heartsEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 800);
for (let i = 0; i < 5; i++) setTimeout(createHeart, i * 300);

// Floating stars
const starsEmojis = ['⭐', '✨', '🌟', '💫'];
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('span');
    star.textContent = starsEmojis[Math.floor(Math.random() * starsEmojis.length)];
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 5 + 7) + 's';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
    
    setTimeout(() => star.remove(), 12000);
}

setInterval(createStar, 1000);
for (let i = 0; i < 4; i++) setTimeout(createStar, i * 400);

// Floating sparkles
const sparklesContainer = document.querySelector('.sparkles');

function createSparkle() {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.bottom = Math.random() * 100 + '%';
    sparkle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    sparklesContainer.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 6000);
}

setInterval(createSparkle, 600);
for (let i = 0; i < 8; i++) setTimeout(createSparkle, i * 200);


const messages = [
      "You're the kind of friend everyone dreams of having 💖✨",
      "Life is so much better with you in it, bestie 🌟💕",
      "You make even the boring days feel like an adventure 🎀😊",
      "I'm so grateful the universe brought us together 🌸💜"
    ];
    

    function openModal(index) {
      document.getElementById("modalText").innerText = messages[index];
      document.getElementById("modal").classList.add("active");
    }

    function closeModal() {
      document.getElementById("modal").classList.remove("active");
    }

let clickCount = 0;

        function moveButton() {
            const noBtn = document.getElementById('noBtn');
            clickCount++;
            
            if (clickCount === 1) {
                noBtn.textContent = "Are you sure? 🥺";
            } else if (clickCount === 2) {
                noBtn.textContent = "But... snacks! 🍿";
            } else if (clickCount === 3) {
                noBtn.textContent = "And gossip! ☕";
            } else {
                // Make the button disappear
                noBtn.style.opacity = '0';
                noBtn.style.pointerEvents = 'none';
                
                // Reappear in a random position after a short delay
                setTimeout(() => {
                    const x = (Math.random() - 0.5) * 300;
                    const y = (Math.random() - 0.5) * 300;
                    noBtn.style.transform = `translate(${x}px, ${y}px)`;
                    noBtn.style.opacity = '1';
                    noBtn.style.pointerEvents = 'auto';
                    
                    // Change text randomly
                    const texts = [
                        "Nope! 😝",
                        "Can't catch me! 🏃‍♀️",
                        "Try again! 😜",
                        "Almost! 😂",
                        "Keep trying! 💨"
                    ];
                    noBtn.textContent = texts[Math.floor(Math.random() * texts.length)];
                }, 300);
            }
        }

        function yesAnswer() {
            // Hide question section
            document.getElementById('questionSection').classList.add('hidden');
            
            // Show success section
            document.getElementById('successSection').classList.remove('hidden');
            
            // Trigger confetti
            createConfetti();
        }

        function createConfetti() {
            const colors = ['#ec4899', '#f472b6', '#fb7185', '#fda4af', '#fecdd3'];
            const confettiContainer = document.getElementById('confettiContainer');
            
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDelay = Math.random() * 0.5 + 's';
                    confettiContainer.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 30);
            }
        }
   

