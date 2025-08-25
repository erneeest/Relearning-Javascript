const product = {
    name: 'MEGA Sardines',
    quantity: 10
}

console.log(product);
console.log(product.name);
console.log(product.quantity);

product.color = 'red';
console.log(product);

product.quantity++;

delete product.color;
console.log(product);

console.log(JSON.stringify(product));
const jsonString = JSON.stringify(product);
console.log(JSON.parse(jsonString));