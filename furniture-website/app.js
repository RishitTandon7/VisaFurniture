// JavaScript to render products on the page


document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products-container");

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Add animation delay for staggered effect
    productCard.style.animationDelay = `${index * 0.15}s`;

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });

  // Text animation for landing page letters
  const letters = document.querySelectorAll(".text h1 span");
  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
    letter.classList.add("fadeInUp");
  });

  // Menu toggle animation
  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
