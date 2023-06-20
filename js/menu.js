let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Moccacino (Petite)',
        image: '../assets/images/coffees/moccacino_petite.jpg',
        price: 50
    },
    {
        id: 2,
        name: 'Moccacino (Classic)',
        image: '../assets/images/coffees/moccacino_classic.jpg',
        price: 80
    },
    {
        id: 3,
        name: 'Moccacino (Grande)',
        image: '../assets/images/coffees/moccacino_grande.jpg',
        price: 110
    },
    {
        id: 4,
        name: 'Creamy Toffee (Petite)',
        image: '../assets/images/coffees/creamy-toffee_petite.jpg',
        price: 60
    },
    {
        id: 5,
        name: 'Creamy Toffee (Classic)',
        image: '../assets/images/coffees/creamy-toffee_classic.jpg',
        price: 90
    },
    {
        id: 6,
        name: 'Creamy Toffee (Grande)',
        image: '../assets/images/coffees/creamy-toffee_grande.jpg',
        price: 120
    },
    {
        id: 7,
        name: 'Espresso Royale (Petite)',
        image: '../assets/images/coffees/espresso-royale_petite.jpg',
        price: 50
    },
    {
        id: 8,
        name: 'Espresso Royale (Classic)',
        image: '../assets/images/coffees/espresso-royale_classic.jpg',
        price: 70
    },
    {
        id: 9,
        name: 'Espresso Royale (Grande)',
        image: '../assets/images/coffees/espresso-royale_grande.jpg',
        price: 90
    },
    {
        id: 10,
        name: 'Special Milky Latte (Petite)',
        image: '../assets/images/coffees/special-milky-latte.jpg',
        price: 100
    }
];

// List of items in menu
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button class="add" onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

// Add to Cart Functionality
function addToCard(key){
    if(listCards[key] == null) {
        // copy product form list to cart
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

// Cart Items View
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

// Changing the quantity and the price relative to quantity
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}