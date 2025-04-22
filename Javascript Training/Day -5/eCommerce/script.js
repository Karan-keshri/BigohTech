const productsContainer = document.getElementById("productsContainer");
const categoryList = document.getElementById("categoryList");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const limitInput = document.getElementById("limitInput");
const offsetInput = document.getElementById("offsetInput");
const setPaginationBtn = document.getElementById("setPaginationBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let limit = parseInt(limitInput.value);
let offset = parseInt(offsetInput.value);

document.getElementById("setPaginationBtn").addEventListener("click", () => {
  const offsetInput = document.getElementById("offsetInput");

  let offset = parseInt(offsetInput.value);

  if (offset > 190) {
    offset = 190;
    offsetInput.value = 190;
  }
});



let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
let categories;
let currentCategory = "all";
let totalProducts = 0;
const productCache = {};

function updateCounts() {
  cartCount.innerText = `🛒 (${cart.length})`;
  wishlistCount.innerText = `❤️ (${wishlist.length})`;
}

async function fetchCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  categories = data;
}

async function displayCategories() {
  categoryList.innerHTML = "";
  await fetchCategories();

  const allLi = document.createElement("li");
  allLi.textContent = "All";
  allLi.addEventListener("click", () => {
    currentCategory = "all";
    offset = 0;
    offsetInput.value = offset;
    fetchProducts();
  });
  categoryList.appendChild(allLi);

  categories.forEach((category) => {
    const li = document.createElement("li");
    li.textContent = category.name;
    li.addEventListener("click", () => {
      currentCategory = category.name;
      offset = 0;
      offsetInput.value = offset;
      fetchProducts();
    });
    categoryList.appendChild(li);
  });
}

async function fetchProducts() {
  const categoryKey = currentCategory;

  // Initialize cache for this category
  if (!productCache[categoryKey]) productCache[categoryKey] = {};

  // Use cache if available
  const cacheKey = `${limit}_${offset}`;
  if (productCache[categoryKey][cacheKey]) {
    renderProducts(productCache[categoryKey][cacheKey]);
    return;
  }

  let url = "";
  if (currentCategory === "all") {
    url = `https://dummyjson.com/products?limit=${limit}&skip=${offset}`;
  } else {
    const normalizedCategory = currentCategory.trim().toLowerCase().replace(/\s+/g, '-');
    url = `https://dummyjson.com/products/category/${normalizedCategory}?limit=${limit}&skip=${offset}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  const products = data.products;
  totalProducts = data.total || products.length;

  productCache[categoryKey][cacheKey] = products;
  renderProducts(products);
}


function renderProducts(products) {
  productsContainer.innerHTML = products
    .map((product) => `
      <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        <a href="product.html?id=${product.id}"><br/>click to view details</a>
      </div>
    `)
    .join("");

  updateCounts();
  renderPagination();
}

function renderPagination() {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalProducts / limit);

  pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = offset <= 0;
  nextBtn.disabled = offset + limit >= totalProducts;
}

// --- Event Listeners ---

setPaginationBtn.addEventListener("click", () => {
  limit = parseInt(limitInput.value);
  offset = parseInt(offsetInput.value);
  fetchProducts();
});

prevBtn.addEventListener("click", () => {
  if (offset - limit >= 0) {
    offset -= limit;
    offsetInput.value = offset;
    fetchProducts();
  }
});

nextBtn.addEventListener("click", () => {
  if (offset + limit < totalProducts) {
    offset += limit;
    offsetInput.value = offset;
    fetchProducts();
  }
});

function updatePaginationButtons(totalProducts) {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Disable Prev button if on first page
  if (offset === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Disable Next button if reached the end
  if (offset + limit >= totalProducts) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

updatePaginationButtons(totalProducts);


function addToCart(id) {
  const allProducts = Object.values(productCache).flat();
  const product = allProducts.find((p) => p.id === id);
  if (product && !cart.some((item) => item.id === id)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCounts();
  }
}

function addToWishlist(id) {
  const allProducts = Object.values(productCache).flat();
  const product = allProducts.find((p) => p.id === id);
  if (product && !wishlist.some((item) => item.id === id)) {
    wishlist.push(product);
    sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateCounts();
  }
}

const debouncedSearch = debounce(() => {
  const query = searchInput.value.toLowerCase();
  const allCached = Object.values(productCache)
    .flatMap((pages) => Object.values(pages).flat());
  const filtered = allCached.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  totalProducts = filtered.length;
  currentPage = 1;
  renderProducts(filtered.slice(0, limit));
}, 100);

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

searchInput.addEventListener("input", debouncedSearch);
searchBtn.addEventListener("click", () => debouncedSearch());

searchInput.addEventListener("input", debouncedSearch);
searchBtn.addEventListener("click", () => debouncedSearch());

//const productsContainer = document.getElementById("productsContainer");

// productsContainer.addEventListener("scroll", function (e){
//   let {clientHeight, scrollHeight, scrollTop} = e.target.documentElement;
//   console.log(clientHeight, scrollHeight, scrollTop);
//   if(clientHeight + scrollTop >= scrollHeight -500){
//     limit +=limit;
//     fetchProducts();
//   }
// });

productsContainer.addEventListener("scroll", function (e) {
  let { clientHeight, scrollHeight, scrollTop } = e.target;
  console.log(clientHeight, scrollHeight, scrollTop);
  
  // Trigger the fetch when the user is near the bottom of the container
  if (clientHeight-100 + scrollTop >= scrollHeight) {
    limit += limit;  // Update limit or handle it as needed
    fetchProducts();  // Call the function to load more products
  }
});


updateCounts();
displayCategories();
fetchProducts();
