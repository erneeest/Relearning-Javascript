let cartQuantity = 0;

function cartQuantityFunction(){
    // console.log(`Cart Quantity: ${cartQuantity}`);
    document.querySelector('.cart-quantity-display').innerHTML = `Cart Quantity: ${cartQuantity}`;
}
function addCart(){
    (cartQuantity<10) ? cartQuantity++ : console.log('The cart is full');
    cartQuantityFunction();
}

function removeCart(){
    (cartQuantity>0) ? cartQuantity-- : console.log('the cart is empty');
    cartQuantityFunction();
}

function clearCart(){
    cartQuantity = 0;
    cartQuantityFunction();
}

function cartWithLove(){
    document.querySelector('.cat').outerHTML = `<img class="cat" src="cat-meme.png" alt="cat ni ernest" style="display: block;">`;
    cartQuantityFunction();
}