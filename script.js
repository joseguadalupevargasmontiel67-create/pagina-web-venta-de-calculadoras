let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function renderCart() {
    document.getElementById('cart').innerHTML =
        cart.map(item => `<li>${item}</li>`).join('');

    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name) {
    cart.push(name);
    renderCart();
}

renderCart();
