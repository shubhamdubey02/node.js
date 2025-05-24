(() => {
  const products = [
    {
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
    },
    {
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127,
      },
      priceCents: 2095,
    },
    {
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56,
      },
      priceCents: 799,
    },
  ];

  let cart = [];

  let productHTML = "";
  products.forEach((product, index) => {
    productHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}" alt="${
      product.name
    }">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${
            product.rating.stars * 10
          }.png" alt="${product.rating.stars} stars">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            ${[...Array(10)]
              .map(
                (_, i) =>
                  `<option value="${i + 1}" ${i === 0 ? "selected" : ""}>${
                    i + 1
                  }</option>`
              )
              .join("")}
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png" alt="Added to cart">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${index}">
          Add to Cart
        </button>
      </div>
    `;
  });

  const gridElement = document.querySelector(".js-products-grid");
  if (gridElement) {
    gridElement.innerHTML = productHTML;
  } else {
    console.error("Element with class 'js-products-grid' not found.");
  }

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.productId);
      let matchingItem = cart.find((item) => item.productId === productId);

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
      let cardQuantity = 0;
      cart.forEach((item) => {
        cardQuantity += item.quantity;
      });
      document.querySelector('.js-card-quantity').innerHTML = cardQuantity;
      console.log(cardQuantity);
      console.log(cart);
    });
  });
})();
