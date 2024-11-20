// JavaScript để tạo các bông tuyết ngẫu nhiên
const snowflakes = document.querySelector('.snowflakes');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Gán các thuộc tính ngẫu nhiên cho bông tuyết
  snowflake.style.left = Math.random() * 100 + '%';
  // ... các thuộc tính khác

  snowflakes.appendChild(snowflake);
}

// Tạo một số lượng bông tuyết nhất định
for (let i = 0; i < 100; i++) {
  createSnowflake();
}