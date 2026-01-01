const snowflakesContainer = document.getElementById('snowflakes');
const snowflakeCount = 50;
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

// moze zadziala xd
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5 + 2;
    const x = Math.random() * containerWidth;
    let y = Math.random() * -containerHeight;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    const speed = Math.random() * 1.5 + 0.5;
    const amplitude = Math.random() * 20 + 5;

    function animate() {
        y += speed;
        snowflake.style.transform = `translateX(${Math.sin(y / 20) * amplitude}px) translateY(${y}px)`;
        if (y > containerHeight) {
            y = -10;
            snowflake.style.left = `${Math.random() * containerWidth}px`;
        }
        requestAnimationFrame(animate);
    }

    animate();
    snowflakesContainer.appendChild(snowflake);
}

// spoks
for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake();
}
