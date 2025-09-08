const allAddToCartBtns = document.querySelectorAll(".add_cart_btn");
const cartCountElement = document.querySelector("#cartCount");
const cartContentElement = document.querySelector(".cart-content");

let cartItemCount = 0;
let cart = [];

allAddToCartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const productItem = btn.closest('.product_item');
        const productName = productItem.querySelector('.product_name').innerText.trim();
        const productPrice = productItem.querySelector('.product_price').innerText;
        const productImage = productItem.querySelector('img').src;

        const product = {
            name: productName.toLowerCase(),
            price: productPrice,
            image: productImage,
            quantity: 1
        };

        const productExists = cart.find(item => item.name === product.name);
        if (productExists) {
            alert(`${productName} already exists in your cart`);
            return;
        }

        cart.push(product);
        alert(`${productName} has been added to cart successfully`);
        cartItemCount = cart.length;
        cartCountElement.innerText = cartItemCount;

        // Remove "Your Cart Is Currently Empty" message if present
        const infoMsg = cartContentElement.querySelector("#info");
        if (infoMsg) {
            infoMsg.remove();
        }

        let cartContent = `
            <div class="cart-box">
                <img src="${product.image}" class="cart-img">
                <div class="details-box">
                    <div class="cart-product-title">${productName}</div>
                    <div class="cart-price">${product.price}</div>
                    <input type="number" value="${product.quantity}" min="1" class="cart-quantity">
                </div>
                <div>
                    <i class="fas fa-trash cart-remove"></i>
                </div>
            </div>`;
        cartContentElement.insertAdjacentHTML("beforeend", cartContent);
    });
});