const sproducts = async () => {
  const url = 'products.json';
  const productsContainer = document.querySelector('#product-card');
  try {
    const response = await fetch(url);

    const data = await response.json();

    data.forEach((item) => {
      productsContainer.innerHTML += `
           <div class="product-header">
                <div class="product-image">
                    <img src="img/t_product_540_high.jpg.png" alt="product">
                </div>
                <button class="btn">
                    <img class="product-fav" src="img/icon/SVG.svg" alt="heart">
                </button>
                <span class="product-badge">Eksklyuziv</span>
            </div>
            <div class="product-body">
                <div class="product-info">
                    <p class="product-title">Kungaboqar yog'i Oila tanlovi, tozalangan va xidsizlantirilgan, 90…</p>
                    <div class="product-rating">
                        <img src="img/icon/Vector.svg" alt="star">
                        <span>4.9 (4092 sharsh)</span>
                    </div>
                    <b class="product-monthly">1 560 so'm/oyiga</b>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="old-price">15 000 so'm</span>
                        <b class="new-price">13 000 so'm</b>
                    </div>
                    <img class="add-to-cart" src="img/icon/SVG (1).svg" alt="shop">
                </div>
            </div>
        `;
    });
  } catch (error) {
    console.error(error);
  }
};

sproducts();

const openModal = document.getElementById('openModal');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// SWIPER js
var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const langSelect = document.getElementById('langSelect');
const langText = langSelect.querySelector('.lang-text');
const options = langSelect.querySelectorAll('.lang-options div');

langSelect.querySelector('.lang-current').addEventListener('click', (e) => {
  e.stopPropagation();
  langSelect.classList.toggle('active');
});

options.forEach((opt) => {
  opt.addEventListener('click', () => {
    const current = langText.textContent;
    langText.textContent = opt.textContent;

    options.forEach((o) => (o.style.display = 'block'));
    opt.style.display = 'none';

    langSelect.classList.remove('active');
  });
});

window.addEventListener('click', () => langSelect.classList.remove('active'));
