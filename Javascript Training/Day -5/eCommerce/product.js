const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productDetails = document.getElementById("productDetails");

async function fetchProductById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  productDetails.innerHTML = `
    <div class="product-detail">
      <img class="detail-image" src="${product.thumbnail}" alt="${product.title}" />
      <div>
        <h2>${product.title}</h2>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Rating:</strong> ${product.rating}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      </div>
    </div>
  `;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.some(p => p.id === id)) {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(product => {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
      });
  }
    else {
        alert("Already in cart!");
    }
}

function addToWishlist(id) {
  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
  if (!wishlist.some(p => p.id === id)) {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(product => {
        wishlist.push(product);
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to wishlist!");
      });
  }
  else {
    alert("Already in wishlist!");
  }
}

function goBack() {
  window.location.href = "index.html";
}

fetchProductById(productId);