 
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

