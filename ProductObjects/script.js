let product1 = {
    name: 'Basketball',
    quantity: 10,
    price: 2095
}

let product2 = {
    name: 'Ring',
    price: 1523
}

product1.price += 500;

product1['delivery-time'] = '3 days';
product1.quality = 'very good';
console.log(product1);

function comparePrice(product1, product2){
    if(product1.price < product2.price){
        return product1.price;
    }
        return product2.price;
}

console.log(comparePrice(product1, product2));

function isSameProduct(product1, product2){
    if(product1.name === product2.name && product2.price === product2.price){
        return true
    }
    return false;
}

console.log('ERNEST'.toLowerCase());
console.log('ernest'.repeat(5));