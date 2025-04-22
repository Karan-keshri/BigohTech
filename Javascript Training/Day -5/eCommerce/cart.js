const cartContainer = document.getElementById("cartContainer");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (product) => `
      <div class="product-card">
        <a href="product.html?id=${product.id}">
          <img src="${product.thumbnail}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
        </a>
        <button onclick="removeFromCart(${product.id})">Remove</button>
      </div>
    `
    )
    .join("");
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
