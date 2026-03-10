* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    font-family: Arial, sans-serif;
    color: white;
    overflow-x: hidden;
}

/* Центрирование */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.profile-section {
    text-align: center;
}

/* ===== AVATAR ===== */
.avatar-container {
    margin-bottom: 15px;
}

.avatar-wrapper {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}

.avatar-wrapper::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid #a855f7;
    pointer-events: none;
}

.avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* ===== USERNAME ===== */
.username {
    font-size: 26px;
    margin-bottom: 15px;
}

/* ===== SOCIALS ===== */
.social-links {
    display: grid;
    grid-template-columns: repeat(5, 50px);
    gap: 15px;
    justify-content: center;
    padding: 10px;
}

.social-link {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #a855f7;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.social-link:hover {
    transform: scale(1.1);
}

.social-link img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* ===== SNOW ===== */
#snowCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

/* ===== ФУТЕР ===== */
footer {
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border-top: 2px solid rgba(168, 85, 247, 0.5);
    padding: 50px 20px;
    margin-top: 100px;
    position: relative;
    z-index: 10;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Социальные сети в футере */
.social-links-footer {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.social-link-footer {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(168, 85, 247, 0.1);
    border: 2px solid #a855f7;
    color: #a855f7;
    font-size: 24px;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
    position: relative;
    overflow: hidden;
}

.social-link-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6), transparent);
    transition: left 0.5s;
}

.social-link-footer:hover {
    transform: scale(1.2) rotate(360deg);
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), inset 0 0 20px rgba(168, 85, 247, 0.5);
    background: rgba(168, 85, 247, 0.3);
    border-color: #00ffff;
    color: #00ffff;
}

.social-link-footer:hover::before {
    left: 100%;
}

/* Вертикальный ряд правовых ссылок */
.legal-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.legal-link {
    display: inline-block;
    padding: 12px 24px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 255, 0.05));
    border: 2px solid #a855f7;
    border-radius: 8px;
    color: #a855f7;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.3), inset 0 0 10px rgba(168, 85, 247, 0.1);
    position: relative;
    overflow: hidden;
    white-space: nowrap;
}

.legal-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6), transparent);
    transition: left 0.6s;
    z-index: -1;
}

.legal-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.8), 
                inset 0 0 15px rgba(168, 85, 247, 0.6),
                0 0 40px rgba(0, 255, 255, 0.4);
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(0, 255, 255, 0.2));
    border-color: #00ffff;
    color: #fff;
    text-shadow: 0 0 10px #a855f7;
}

.legal-link:hover::before {
    left: 100%;
}

.legal-link:active {
    transform: translateY(-1px);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.4);
}

/* Пульсирующий неон эффект */
@keyframes neonPulse {
    0%, 100% {
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.3), inset 0 0 10px rgba(168, 85, 247, 0.1);
    }
    50% {
        box-shadow: 0 0 25px rgba(168, 85, 247, 0.6), inset 0 0 15px rgba(168, 85, 247, 0.3);
    }
}

.legal-link:not(:hover) {
    animation: neonPulse 2s ease-in-out infinite;
}

/* Footer текст */
.footer-text {
    text-align: center;
    color: rgba(168, 85, 247, 0.6);
    font-size: 12px;
    border-top: 1px solid rgba(168, 85, 247, 0.2);
    padding-top: 20px;
    position: relative;
    z-index: 10;
}

/* Адаптивность */
@media (max-width: 768px) {
    .legal-link {
        font-size: 12px;
        padding: 10px 20px;
    }

    .social-link-footer {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }

    footer {
        padding: 30px 15px;
    }
}
