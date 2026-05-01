// ══════════════════════════════════════════
// FRESHMART GROCERY STORE - MAIN JS
// ══════════════════════════════════════════

// ── Product Data ──
const PRODUCTS = [
  // Drinks
  { id: 1, name: 'Fresh Orange Juice', category: 'drinks', emoji: '🍊', price: 2.49, wholesale: 1.89, weight: '1L', badge: 'sale', oldPrice: 2.99 },
  { id: 2, name: 'Mineral Water Pack', category: 'drinks', emoji: '💧', price: 3.99, wholesale: 2.99, weight: '6x500ml', badge: 'wholesale' },
  { id: 3, name: 'Green Tea', category: 'drinks', emoji: '🍵', price: 1.79, wholesale: 1.29, weight: '250ml' },
  { id: 4, name: 'Cola 2L', category: 'drinks', emoji: '🥤', price: 1.99, wholesale: 1.49, weight: '2L', badge: 'sale', oldPrice: 2.49 },
  { id: 5, name: 'Apple Juice', category: 'drinks', emoji: '🍎', price: 2.29, wholesale: 1.79, weight: '1L' },
  { id: 6, name: 'Sparkling Water', category: 'drinks', emoji: '💦', price: 1.29, wholesale: 0.99, weight: '500ml' },
  // Dairy
  { id: 7, name: 'Full Cream Milk', category: 'dairy', emoji: '🥛', price: 1.49, wholesale: 1.09, weight: '2L', badge: 'sale', oldPrice: 1.79 },
  { id: 8, name: 'Natural Yogurt', category: 'dairy', emoji: '🫙', price: 1.89, wholesale: 1.39, weight: '500g' },
  { id: 9, name: 'Cheddar Cheese', category: 'dairy', emoji: '🧀', price: 3.49, wholesale: 2.79, weight: '400g', badge: 'wholesale' },
  { id: 10, name: 'Butter Unsalted', category: 'dairy', emoji: '🧈', price: 2.29, wholesale: 1.79, weight: '250g' },
  { id: 11, name: 'Sour Cream', category: 'dairy', emoji: '🥣', price: 1.69, wholesale: 1.29, weight: '300ml' },
  { id: 12, name: 'Greek Yogurt', category: 'dairy', emoji: '🫙', price: 2.49, wholesale: 1.99, weight: '400g', badge: 'sale', oldPrice: 2.99 },
  // Fruits & Veg
  { id: 13, name: 'Banana Bunch', category: 'fruits', emoji: '🍌', price: 0.89, wholesale: 0.65, weight: '~1kg' },
  { id: 14, name: 'Red Apples', category: 'fruits', emoji: '🍎', price: 1.99, wholesale: 1.49, weight: '1kg' },
  { id: 15, name: 'Broccoli', category: 'vegetables', emoji: '🥦', price: 1.29, wholesale: 0.99, weight: '~500g', badge: 'sale', oldPrice: 1.59 },
  { id: 16, name: 'Tomatoes', category: 'vegetables', emoji: '🍅', price: 1.49, wholesale: 1.09, weight: '500g' },
  { id: 17, name: 'Strawberries', category: 'fruits', emoji: '🍓', price: 2.99, wholesale: 2.29, weight: '400g', badge: 'sale', oldPrice: 3.49 },
  { id: 18, name: 'Spinach', category: 'vegetables', emoji: '🥬', price: 1.19, wholesale: 0.89, weight: '200g' },
  // Bakery
  { id: 19, name: 'Sourdough Loaf', category: 'bakery', emoji: '🍞', price: 2.49, wholesale: 1.99, weight: '800g' },
  { id: 20, name: 'Croissants 4pk', category: 'bakery', emoji: '🥐', price: 2.79, wholesale: 2.19, weight: '4 pack', badge: 'sale', oldPrice: 3.29 },
  { id: 21, name: 'Bagels 6pk', category: 'bakery', emoji: '🥯', price: 2.29, wholesale: 1.79, weight: '6 pack' },
  // Meat & Fish
  { id: 22, name: 'Chicken Breast', category: 'meat', emoji: '🍗', price: 5.49, wholesale: 4.49, weight: '500g', badge: 'sale', oldPrice: 6.49 },
  { id: 23, name: 'Salmon Fillet', category: 'meat', emoji: '🐟', price: 7.99, wholesale: 6.49, weight: '300g', badge: 'wholesale' },
  { id: 24, name: 'Beef Mince', category: 'meat', emoji: '🥩', price: 4.99, wholesale: 3.99, weight: '500g' },
  // Snacks
  { id: 25, name: 'Potato Crisps', category: 'snacks', emoji: '🥔', price: 1.49, wholesale: 0.99, weight: '175g', badge: 'sale', oldPrice: 1.79 },
  { id: 26, name: 'Dark Chocolate', category: 'snacks', emoji: '🍫', price: 1.89, wholesale: 1.39, weight: '100g' },
  { id: 27, name: 'Mixed Nuts', category: 'snacks', emoji: '🥜', price: 3.49, wholesale: 2.79, weight: '300g', badge: 'wholesale' },
  // Frozen
  { id: 28, name: 'Frozen Peas', category: 'frozen', emoji: '🫛', price: 1.29, wholesale: 0.99, weight: '900g' },
  { id: 29, name: 'Ice Cream Tub', category: 'frozen', emoji: '🍨', price: 3.99, wholesale: 3.19, weight: '1L', badge: 'sale', oldPrice: 4.49 },
  // Condiments
  { id: 30, name: 'Olive Oil', category: 'condiments', emoji: '🫒', price: 4.99, wholesale: 3.99, weight: '500ml', badge: 'wholesale' },
  { id: 31, name: 'Tomato Ketchup', category: 'condiments', emoji: '🍅', price: 1.79, wholesale: 1.29, weight: '570g' },
  { id: 32, name: 'Wholegrain Mustard', category: 'condiments', emoji: '🫙', price: 1.99, wholesale: 1.49, weight: '200g' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Products', emoji: '🛒', count: PRODUCTS.length },
  { id: 'drinks', label: 'Drinks', emoji: '🥤', count: PRODUCTS.filter(p=>p.category==='drinks').length },
  { id: 'dairy', label: 'Dairy', emoji: '🥛', count: PRODUCTS.filter(p=>p.category==='dairy').length },
  { id: 'fruits', label: 'Fruits', emoji: '🍎', count: PRODUCTS.filter(p=>p.category==='fruits').length },
  { id: 'vegetables', label: 'Vegetables', emoji: '🥦', count: PRODUCTS.filter(p=>p.category==='vegetables').length },
  { id: 'bakery', label: 'Bakery', emoji: '🍞', count: PRODUCTS.filter(p=>p.category==='bakery').length },
  { id: 'meat', label: 'Meat & Fish', emoji: '🥩', count: PRODUCTS.filter(p=>p.category==='meat').length },
  { id: 'snacks', label: 'Snacks', emoji: '🍫', count: PRODUCTS.filter(p=>p.category==='snacks').length },
  { id: 'frozen', label: 'Frozen', emoji: '❄️', count: PRODUCTS.filter(p=>p.category==='frozen').length },
  { id: 'condiments', label: 'Condiments', emoji: '🫙', count: PRODUCTS.filter(p=>p.category==='condiments').length },
];

// ── State ──
let cart = JSON.parse(localStorage.getItem('fm_cart') || '[]');
let users = JSON.parse(localStorage.getItem('fm_users') || '[]');
let currentUser = JSON.parse(localStorage.getItem('fm_user') || 'null');
let products = JSON.parse(localStorage.getItem('fm_products') || JSON.stringify(PRODUCTS));
let activeCategory = 'all';
let searchQuery = '';
let priceMode = 'retail'; // retail | wholesale
let orders = JSON.parse(localStorage.getItem('fm_orders') || '[]');

// ── Save helpers ──
const saveCart = () => localStorage.setItem('fm_cart', JSON.stringify(cart));
const saveProducts = () => localStorage.setItem('fm_products', JSON.stringify(products));
const saveOrders = () => localStorage.setItem('fm_orders', JSON.stringify(orders));
const saveUsers = () => localStorage.setItem('fm_users', JSON.stringify(users));

// ── Toast ──
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', warning: '⚠️' };
  toast.innerHTML = `<span>${icons[type] || '✅'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}

// ── Navigation ──
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) { page.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
}

// ── Auth ──
function updateAuthUI() {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const userMenu = document.getElementById('userMenu');
  if (currentUser) {
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'none';
    userMenu.style.display = 'flex';
    document.getElementById('userGreeting').textContent = `Hi, ${currentUser.firstName}`;
  } else {
    loginBtn.style.display = '';
    signupBtn.style.display = '';
    userMenu.style.display = 'none';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) { showToast('Invalid email or password', 'error'); return; }
  currentUser = user;
  localStorage.setItem('fm_user', JSON.stringify(user));
  closeModal('loginModal');
  updateAuthUI();
  showToast(`Welcome back, ${user.firstName}! 🎉`);
}

function handleSignup(e) {
  e.preventDefault();
  const firstName = document.getElementById('signupFirst').value;
  const lastName = document.getElementById('signupLast').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
  const type = document.getElementById('signupType').value;
  if (password !== confirm) { showToast('Passwords do not match', 'error'); return; }
  if (users.find(u => u.email === email)) { showToast('Email already registered', 'error'); return; }
  const user = { id: Date.now(), firstName, lastName, email, password, type };
  users.push(user);
  saveUsers();
  currentUser = user;
  localStorage.setItem('fm_user', JSON.stringify(user));
  priceMode = type === 'wholesale' ? 'wholesale' : 'retail';
  closeModal('signupModal');
  updateAuthUI();
  showToast(`Welcome to FreshMart, ${firstName}! 🛒`);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('fm_user');
  priceMode = 'retail';
  updateAuthUI();
  showToast('Logged out successfully');
}

// ── Modal ──
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// ── Cart ──
function getPrice(product) {
  return priceMode === 'wholesale' ? product.wholesale : product.price;
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += qty; }
  else { cart.push({ id: productId, qty }); }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart 🛒`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(productId, qty) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (qty <= 0) { removeFromCart(productId); return; }
  item.qty = qty;
  saveCart();
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return product ? sum + getPrice(product) * item.qty : sum;
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!cart.length) {
    container.innerHTML = `<div class="empty-state"><div class="icon">🛒</div><h3>Your cart is empty</h3><p>Add products to get started</p></div>`;
    document.getElementById('cartTotal').textContent = '£0.00';
    document.getElementById('cartSubtotal').textContent = '£0.00';
    return;
  }
  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    const price = getPrice(p);
    return `
      <div class="cart-item">
        <div class="cart-item-img">${p.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">£${(price * item.qty).toFixed(2)}</div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty(${p.id}, ${item.qty - 1})">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${p.id}, ${item.qty + 1})">+</button>
            </div>
            <button class="cart-remove" onclick="removeFromCart(${p.id})">🗑 Remove</button>
          </div>
        </div>
      </div>`;
  }).join('');
  const subtotal = getCartTotal();
  const delivery = subtotal >= 30 ? 0 : 2.99;
  const total = subtotal + delivery;
  document.getElementById('cartSubtotal').textContent = `£${subtotal.toFixed(2)}`;
  document.getElementById('cartDelivery').textContent = delivery === 0 ? 'FREE' : `£${delivery.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `£${total.toFixed(2)}`;
}

function openCart() {
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Products ──
function getFilteredProducts() {
  return products.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
}

function renderProductCard(p) {
  const price = getPrice(p);
  const cartItem = cart.find(c => c.id === p.id);
  return `
    <div class="product-card" id="product-${p.id}">
      <div class="product-img">
        ${p.badge ? `<span class="product-badge ${p.badge === 'wholesale' ? 'wholesale' : ''}">${p.badge === 'wholesale' ? 'Wholesale' : 'Sale'}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">♡</button>
        <span style="font-size:3.5rem">${p.emoji}</span>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-weight">${p.weight}</div>
        <div class="product-pricing">
          <span class="product-price">£${price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="product-old-price">£${p.oldPrice.toFixed(2)}</span>` : ''}
          ${priceMode === 'wholesale' ? '<span style="font-size:0.72rem;color:var(--green-bright);font-weight:600;">Wholesale</span>' : ''}
        </div>
        <div class="product-actions">
          ${cartItem
            ? `<div class="qty-control" style="flex:1;justify-content:center;">
                <button class="qty-btn" onclick="updateCartQty(${p.id}, ${cartItem.qty - 1})">−</button>
                <span class="qty-num">${cartItem.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${p.id}, ${cartItem.qty + 1})">+</button>
               </div>`
            : `<button class="btn-add-cart" onclick="addToCart(${p.id})">+ Add to Cart</button>`}
        </div>
      </div>
    </div>`;
}

function renderProducts(containerId = 'productsGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtered = getFilteredProducts();
  container.innerHTML = filtered.length
    ? filtered.map(renderProductCard).join('')
    : `<div class="empty-state" style="grid-column:1/-1"><div class="icon">🔍</div><h3>No products found</h3><p>Try a different search or category</p></div>`;
}

function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(c => `
    <div class="category-card ${activeCategory === c.id ? 'active' : ''}" onclick="setCategory('${c.id}')">
      <div class="cat-icon">${c.emoji}</div>
      <h3>${c.label}</h3>
      <div class="cat-count">${c.count} items</div>
    </div>`).join('');
}

function setCategory(catId) {
  activeCategory = catId;
  renderCategories();
  renderProducts();
}

function toggleWishlist(id, btn) {
  btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
  btn.style.color = btn.textContent === '♥' ? 'var(--red)' : '';
}

// ── Checkout ──
function renderOrderSummary() {
  const container = document.getElementById('checkoutItems');
  if (!container) return;
  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    const price = getPrice(p);
    return `<div class="cart-summary-row"><span>${p.emoji} ${p.name} ×${item.qty}</span><span>£${(price*item.qty).toFixed(2)}</span></div>`;
  }).join('');
  const subtotal = getCartTotal();
  const delivery = subtotal >= 30 ? 0 : 2.99;
  const total = subtotal + delivery;
  document.getElementById('checkoutSubtotal').textContent = `£${subtotal.toFixed(2)}`;
  document.getElementById('checkoutDelivery').textContent = delivery === 0 ? 'FREE' : `£${delivery.toFixed(2)}`;
  document.getElementById('checkoutTotal').textContent = `£${total.toFixed(2)}`;
}

function selectPaymentMethod(method) {
  document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-method="${method}"]`).classList.add('active');
  document.getElementById('cardFields').style.display = method === 'card' || method === 'stripe' ? 'block' : 'none';
  document.getElementById('paypalFields').style.display = method === 'paypal' ? 'block' : 'none';
}

function placeOrder() {
  if (!currentUser) { openModal('loginModal'); showToast('Please log in to place an order', 'warning'); return; }
  if (!cart.length) { showToast('Your cart is empty', 'warning'); return; }
  const order = {
    id: `FM${Date.now()}`, user: currentUser.email,
    items: [...cart], total: getCartTotal() + (getCartTotal() >= 30 ? 0 : 2.99),
    date: new Date().toLocaleDateString('en-GB'), status: 'Processing'
  };
  orders.push(order);
  saveOrders();
  cart = []; saveCart(); updateCartUI();
  navigate('confirmPage');
  document.getElementById('orderNumber').textContent = order.id;
  showToast('Order placed successfully! 🎉');
}

// ── Admin ──
let adminLoggedIn = JSON.parse(localStorage.getItem('fm_admin') || 'false');

function adminLogin(e) {
  e.preventDefault();
  const email = document.getElementById('adminEmail').value;
  const pass = document.getElementById('adminPass').value;
  if (email === 'admin@manideepika.com' && pass === 'Admin@123') {
    adminLoggedIn = true;
    localStorage.setItem('fm_admin', 'true');
    document.getElementById('adminLoginSection').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    renderAdminProducts();
    renderAdminOrders();
    updateAdminStats();
  } else {
    showToast('Invalid admin credentials', 'error');
  }
}

function adminLogout() {
  adminLoggedIn = false;
  localStorage.removeItem('fm_admin');
  document.getElementById('adminLoginSection').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
}

function showAdminSection(sec) {
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
  document.getElementById(`admin-${sec}`).style.display = 'block';
  document.querySelectorAll('.admin-nav a').forEach(a => a.classList.toggle('active', a.dataset.sec === sec));
}

function updateAdminStats() {
  document.getElementById('statProducts').textContent = products.length;
  document.getElementById('statOrders').textContent = orders.length;
  document.getElementById('statRevenue').textContent = `£${orders.reduce((s,o) => s + o.total, 0).toFixed(2)}`;
  document.getElementById('statUsers').textContent = users.length;
}

function renderAdminProducts() {
  const tbody = document.getElementById('adminProductsBody');
  if (!tbody) return;
  tbody.innerHTML = products.map(p => `
    <tr>
      <td>${p.emoji} ${p.name}</td>
      <td><span class="badge badge-green">${p.category}</span></td>
      <td>£${p.price.toFixed(2)}</td>
      <td>£${p.wholesale.toFixed(2)}</td>
      <td>${p.weight}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="openEditProduct(${p.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    </tr>`).join('');
}

function renderAdminOrders() {
  const tbody = document.getElementById('adminOrdersBody');
  if (!tbody) return;
  tbody.innerHTML = orders.length
    ? orders.map(o => `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.user}</td>
        <td>${o.date}</td>
        <td><strong>£${o.total.toFixed(2)}</strong></td>
        <td><span class="badge badge-gold">${o.status}</span></td>
        <td>
          <select onchange="updateOrderStatus('${o.id}', this.value)" class="filter-select" style="padding:0.3rem 0.5rem;font-size:0.8rem;">
            <option ${o.status==='Processing'?'selected':''}>Processing</option>
            <option ${o.status==='Dispatched'?'selected':''}>Dispatched</option>
            <option ${o.status==='Delivered'?'selected':''}>Delivered</option>
            <option ${o.status==='Cancelled'?'selected':''}>Cancelled</option>
          </select>
        </td>
      </tr>`).join('')
    : `<tr><td colspan="6" style="text-align:center;color:var(--gray-dark);padding:2rem;">No orders yet</td></tr>`;
}

function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) { order.status = status; saveOrders(); showToast(`Order ${orderId} status updated`); }
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderAdminProducts();
  updateAdminStats();
  showToast('Product deleted');
}

function openEditProduct(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  document.getElementById('editProductId').value = p.id;
  document.getElementById('editName').value = p.name;
  document.getElementById('editCategory').value = p.category;
  document.getElementById('editEmoji').value = p.emoji;
  document.getElementById('editPrice').value = p.price;
  document.getElementById('editWholesale').value = p.wholesale;
  document.getElementById('editWeight').value = p.weight;
  openModal('editProductModal');
}

function saveEditProduct(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('editProductId').value);
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  p.name = document.getElementById('editName').value;
  p.category = document.getElementById('editCategory').value;
  p.emoji = document.getElementById('editEmoji').value;
  p.price = parseFloat(document.getElementById('editPrice').value);
  p.wholesale = parseFloat(document.getElementById('editWholesale').value);
  p.weight = document.getElementById('editWeight').value;
  saveProducts();
  closeModal('editProductModal');
  renderAdminProducts();
  showToast('Product updated ✅');
}

function addNewProduct(e) {
  e.preventDefault();
  const newProduct = {
    id: Date.now(),
    name: document.getElementById('newName').value,
    category: document.getElementById('newCategory').value,
    emoji: document.getElementById('newEmoji').value || '📦',
    price: parseFloat(document.getElementById('newPrice').value),
    wholesale: parseFloat(document.getElementById('newWholesale').value),
    weight: document.getElementById('newWeight').value,
  };
  products.push(newProduct);
  saveProducts();
  closeModal('addProductModal');
  e.target.reset();
  renderAdminProducts();
  updateAdminStats();
  showToast('Product added ✅');
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateAuthUI();
  renderProducts('featuredProducts');
  renderCategories();
  renderProducts();

  // Admin
  if (adminLoggedIn) {
    document.getElementById('adminLoginSection').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    renderAdminProducts();
    renderAdminOrders();
    updateAdminStats();
  }

  // Search
  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Price mode toggle
  const priceToggle = document.getElementById('priceToggle');
  if (priceToggle) {
    priceToggle.addEventListener('change', () => {
      priceMode = priceToggle.checked ? 'wholesale' : 'retail';
      renderProducts();
    });
  }

  // Sort
  const sortSelect = document.getElementById('sortProducts');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const val = sortSelect.value;
      if (val === 'low') products.sort((a,b) => a.price - b.price);
      else if (val === 'high') products.sort((a,b) => b.price - a.price);
      else if (val === 'name') products.sort((a,b) => a.name.localeCompare(b.name));
      renderProducts();
    });
  }
});
