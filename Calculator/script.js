let profile = {
    name: 'Ernest',
    age: 20
}

localStorage.setItem('profile', JSON.stringify(profile));

profile = {
    name: null,
    age: 0
}
profile = JSON.parse(localStorage.getItem('profile'));

let megaSardines = JSON.parse(localStorage.getItem('product1'));
localStorage.removeItem('product1');
console.log(megaSardines);





