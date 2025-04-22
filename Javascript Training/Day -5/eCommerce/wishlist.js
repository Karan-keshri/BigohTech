const wishlistContainer = document.getElementById("wishlistContainer");
let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];

function renderWishlist() {
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlistContainer.innerHTML = wishlist
    .map(
      (product) => `
      <div class="product-card">
        <a href="product.html?id=${product.id}">
          <img src="${product.thumbnail}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
        </a>
        <button onclick="removeFromWishlist(${product.id})">Remove</button>
      </div>
    `
    )
    .join("");
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter((item) => item.id !== id);
  sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}

renderWishlist();
