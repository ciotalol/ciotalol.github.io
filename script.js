/*
const snowflakesContainer = document.getElementById('snowflakes');
const snowflakeCount = 50;

let containerWidth = window.innerWidth;
let containerHeight = window.innerHeight;

// pls niech to dziala jak nie to mnie jebac
window.addEventListener('resize', () => {
    containerWidth = window.innerWidth;
    containerHeight = window.innerHeight;
});

// moze zadziala xd
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5 + 2;
    let x = Math.random() * containerWidth;
    let y = Math.random() * -containerHeight;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    const speed = Math.random() * 1.5 + 0.5;
    const amplitude = Math.random() * 20 + 5;

    let outOfViewSince = null;

    function animate(timestamp) {
        y += speed;

        snowflake.style.transform =
            `translateX(${Math.sin(y / 20) * amplitude}px) translateY(${y}px)`;

        if (y > containerHeight) {
            if (outOfViewSince === null) {
                outOfViewSince = performance.now();
            }

            if (performance.now() - outOfViewSince >= 3000) {
                y = -10;
                x = Math.random() * containerWidth;
                snowflake.style.left = `${x}px`;
                outOfViewSince = null;
            }
        } else {
            outOfViewSince = null;
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
*/
