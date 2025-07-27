// const sliders = document.querySelectorAll('.slider');

// sliders.forEach(slider => {
//   const container = slider.querySelector('.product-container');
//   const prevBtn = slider.querySelector('.prev');
//   const nextBtn = slider.querySelector('.next');
//   const cardWidth = 290;

//   nextBtn.addEventListener('click', () => {
//     container.scrollBy({ left: cardWidth, behavior: 'smooth' });
//   });

//   prevBtn.addEventListener('click', () => {
//     container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
//   });
// });

//   function scrollReviews(direction) {
//     const slider = document.getElementById('reviewSlider');
//     const scrollAmount = 300;
//     slider.scrollBy({
//       left: direction * scrollAmount,
//       behavior: 'smooth'
//     });
//   }
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const container = slider.querySelector('.product-container');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  const cardWidth = 290;

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
});

// ✅ Fixed scrollReviews function for review section
function scrollReviews(direction) {
  const slider = document.getElementById('reviewContainer'); // 🔄 was 'reviewSlider', corrected to match HTML
  const scrollAmount = 300; // adjust if needed
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}


