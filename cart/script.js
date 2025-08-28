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
    // document.querySelector('.cat').classList.remove('imageHidden');
    // document.querySelector('.cat').classList.add('imageShow');

    // document.querySelector('.cat').classList.replace('imageHidden', 'showImage');


    document.querySelector('.cat').classList.toggle('imageShow');
    cartQuantityFunction();
    console.log(document.querySelector('.cat'));
}