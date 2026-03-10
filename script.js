const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const snowflakes = [];
const maxFlakes = 150;

for (let i = 0; i < maxFlakes; i++) {
    snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.beginPath();

    for (let f of snowflakes) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    }

    ctx.fill();
    updateSnow();
}

function updateSnow() {
    for (let f of snowflakes) {
        f.y += f.speed;
        f.x += Math.sin(f.y / height * Math.PI * 2) * 0.5;

        if (f.y > height) f.y = 0;
        if (f.x > width) f.x = 0;
        if (f.x < 0) f.x = width;
    }

    requestAnimationFrame(drawSnow);
}

drawSnow();

// ===== ДОПОЛНИТЕЛЬНЫЕ СПЕЦЭФФЕКТЫ =====

// Частицы при движении мыши
document.addEventListener('mousemove', (e) => {
    createMouseParticles(e.clientX, e.clientY);
});

function createMouseParticles(x, y) {
    if (Math.random() > 0.8) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '3';
        particle.style.boxShadow = '0 0 10px #a855f7';
        particle.style.animation = 'particleFloat 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// CSS анимация для частиц
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, -50px) scale(0);
        }
    }

    @keyframes floatingGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
document.head.appendChild(style);

// Звёзды мерцающие случайно
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.insertBefore(starsContainer, document.body.firstChild);
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 50 + '%';
        star.style.backgroundColor = '#fff';
        star.style.opacity = Math.random() * 0.5 + 0.3;
        star.style.zIndex = '0';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        star.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(168, 85, 247, 0.8)`;
        
        starsContainer.appendChild(star);
    }
}

const twinkleStyle = document.createElement('style');
twinkleStyle.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(twinkleStyle);

createStars();

// Светящиеся линии между элементами при наведении
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        link.style.filter = 'drop-shadow(0 0 20px rgba(168, 85, 247, 1))';
    });

    link.addEventListener('mouseleave', () => {
        link.style.filter = 'none';
    });
});

// Дополнительный эффект - волны от клика
document.addEventListener('click', (e) => {
    createClickWave(e.clientX, e.clientY);
});

function createClickWave(x, y) {
    const wave = document.createElement('div');
    wave.style.position = 'fixed';
    wave.style.left = x + 'px';
    wave.style.top = y + 'px';
    wave.style.width = '10px';
    wave.style.height = '10px';
    wave.style.borderRadius = '50%';
    wave.style.border = '2px solid #a855f7';
    wave.style.pointerEvents = 'none';
    wave.style.zIndex = '3';
    wave.style.transform = 'translate(-50%, -50%)';
    wave.style.animation = 'ripple 0.6s ease-out forwards';
    
    document.body.appendChild(wave);
    
    setTimeout(() => wave.remove(), 600);
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Плавающие огоньки вокруг курсора
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Создание аура вокруг курсора
function createCursorAura() {
    const aura = document.createElement('div');
    aura.style.position = 'fixed';
    aura.style.pointerEvents = 'none';
    aura.style.zIndex = '2';
    aura.style.width = '100px';
    aura.style.height = '100px';
    aura.style.borderRadius = '50%';
    aura.style.background = 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)';
    aura.style.filter = 'blur(20px)';
    aura.style.left = (mouseX - 50) + 'px';
    aura.style.top = (mouseY - 50) + 'px';
    aura.style.opacity = '0.5';
    
    document.body.appendChild(aura);
    
    // Удаляем старую ауру если её больше 1
    const auras = document.querySelectorAll('div[style*="radial-gradient"]');
    if (auras.length > 1) {
        auras[0].remove();
    }
}

setInterval(createCursorAura, 50);

// Эффект при скролле
window.addEventListener('scroll', () => {
    const scrollParticle = document.createElement('div');
    scrollParticle.style.position = 'fixed';
    scrollParticle.style.left = Math.random() * width + 'px';
    scrollParticle.style.top = Math.random() * height + 'px';
    scrollParticle.style.width = '3px';
    scrollParticle.style.height = '3px';
    scrollParticle.style.borderRadius = '50%';
    scrollParticle.style.backgroundColor = '#00ffc8';
    scrollParticle.style.pointerEvents = 'none';
    scrollParticle.style.zIndex = '1';
    scrollParticle.style.boxShadow = '0 0 10px #00ffc8';
    scrollParticle.style.animation = 'scrollParticleFloat 2s ease-out forwards';
    
    document.body.appendChild(scrollParticle);
    
    setTimeout(() => scrollParticle.remove(), 2000);
});

const scrollParticleStyle = document.createElement('style');
scrollParticleStyle.textContent = `
    @keyframes scrollParticleFloat {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px);
        }
    }
`;
document.head.appendChild(scrollParticleStyle);

// Эффект для кнопок в футере
const legalLinks = document.querySelectorAll('.legal-link');

legalLinks.forEach((link) => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        link.style.setProperty('--x', x + 'px');
        link.style.setProperty('--y', y + 'px');
    });
});
