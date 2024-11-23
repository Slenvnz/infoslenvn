// JavaScript để tạo các bông tuyết ngẫu nhiên

const snowflakes = document.querySelector('.snowflakes');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Gán các thuộc tính ngẫu nhiên cho bông tuyết
  snowflake.style.left = Math.random() * 100 + '%';
  // ... các thuộc tính khác
  
}
// Tạo một số lượng bông tuyết nhất định
for (let i = 0; i < 100; i++) {
  createSnowflake();
}

 // Tự động ẩn sau 3 giây
  window.onload = () => {
    setTimeout(() => {
   const div = document.getElementById("myDiv");
   div.classList.add("hidden"); // Thêm lớp ẩn để kích hoạt hiệu ứng
  }, 3000); // 3000ms = 3 giây
  
  };


