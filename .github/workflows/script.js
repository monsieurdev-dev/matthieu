// Introduction Animation
document.addEventListener('DOMContentLoaded', function() {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    const loadingText = document.querySelector('.loading-text');
    
    // Loading text animation
    const loadingMessages = [
        'Initialisation du système...',
        'Chargement des données...',
        'Analyse en cours...',
        'Vérification des profils...',
        'Préparation du rapport...'
    ];
    
    let messageIndex = 0;
    const loadingInterval = setInterval(() => {
        if (messageIndex < loadingMessages.length) {
            loadingText.textContent = loadingMessages[messageIndex];
            messageIndex++;
        } else {
            clearInterval(loadingInterval);
        }
    }, 600);
    
    // Transition to main content after loading
    setTimeout(() => {
        intro.style.opacity = '0';
        intro.style.transition = 'opacity 1s ease-out';
        
        setTimeout(() => {
            intro.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Trigger section animations
            animateSections();
        }, 1000);
    }, 3500);
});

// Section Animations
function animateSections() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger specific section animations
                if (entry.target.id === 'anomaly') {
                    startScanner();
                }
                if (entry.target.id === 'ai') {
                    animateAI();
                }
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Scanner Animation
function startScanner() {
    const scanStatus = document.querySelector('.scan-status');
    const scanResult = document.querySelector('.scan-result');
    
    const scanMessages = [
        'Recherche de défauts...',
        'Analyse...',
        'Vérification...',
        'Vérification approfondie...',
        'Analyse terminée...'
    ];
    
    let messageIndex = 0;
    const scanInterval = setInterval(() => {
        if (messageIndex < scanMessages.length) {
            scanStatus.textContent = scanMessages[messageIndex];
            messageIndex++;
        } else {
            clearInterval(scanInterval);
            
            // Show result
            setTimeout(() => {
                scanResult.classList.remove('hidden');
            }, 500);
        }
    }, 800);
}

// AI Animation
function animateAI() {
    const aiAnswers = document.querySelectorAll('.ai-answer');
    
    aiAnswers.forEach((answer, index) => {
        setTimeout(() => {
            answer.classList.remove('hidden');
        }, 1500 * (index + 1));
    });
}

// Final Revelation
const revealBtn = document.getElementById('reveal-btn');
const finalMessage = document.getElementById('final-message');

revealBtn.addEventListener('click', function() {
    revealBtn.style.display = 'none';
    finalMessage.classList.remove('hidden');
    
    // Typewriter effect for messages
    const messages = [
        "Ceci n'était pas un audit officiel.",
        "Nous voulions simplement te remercier pour ta bonne humeur, ton professionnalisme et toutes les discussions sur le football et l'électronique.",
        "Continue comme ça, champion."
    ];
    
    const messageLines = document.querySelectorAll('.message-line');
    
    messageLines.forEach((line, index) => {
        setTimeout(() => {
            line.textContent = messages[index];
            line.style.animation = 'typing 3s steps(40, end) forwards';
        }, 1000 * (index + 1));
    });
    
    // Start confetti after messages
    setTimeout(() => {
        createConfetti();
    }, 4000);
});

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#00d4ff', '#00ffff', '#ff6b35', '#00ff88', '#ff0066', '#ff3399'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 6000);
}

// Engineer Mode
const engineerBtn = document.getElementById('engineer-mode');
const engineerModal = document.getElementById('engineer-modal');

engineerBtn.addEventListener('click', function() {
    engineerModal.classList.remove('hidden');
});

// Close modal on click outside
engineerModal.addEventListener('click', function(e) {
    if (e.target === engineerModal) {
        engineerModal.classList.add('hidden');
    }
});

// Stat counter animation
function animateCounters() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const targetValue = stat.textContent;
        const isInfinity = targetValue === '∞';
        
        if (!isInfinity && !isNaN(parseInt(targetValue))) {
            const finalValue = parseInt(targetValue);
            let currentValue = 0;
            const increment = finalValue / 50;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentValue);
                }
            }, 30);
        }
    });
}

// Trigger counter animation when football section is visible
const footballSection = document.getElementById('football');
const footballObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            footballObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

footballObserver.observe(footballSection);

// Diagnostic bar animation
function animateDiagnosticBars() {
    const diagnosticFills = document.querySelectorAll('.diagnostic-fill');
    
    diagnosticFills.forEach((fill, index) => {
        fill.style.animationDelay = (index * 0.3) + 's';
    });
}

// Trigger diagnostic animation when electronics section is visible
const electronicsSection = document.getElementById('electronics');
const electronicsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateDiagnosticBars();
            electronicsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

electronicsObserver.observe(electronicsSection);

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add keyboard support for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !engineerModal.classList.contains('hidden')) {
        engineerModal.classList.add('hidden');
    }
});

// Easter egg: Konami code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.querySelectorAll('.stat-card, .diagnostic-item').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Console easter egg
console.log('%c🎉 Bravo ! Tu as trouvé la console !', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cCe site a été créé avec ❤️ pour un collègue exceptionnel', 'color: #00ff88; font-size: 14px;');
