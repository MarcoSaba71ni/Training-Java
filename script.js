let filteredJackets = [];

async function fetchProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        if (!response.ok) {
            throw new Error("Can't fetch")
        };

        const data = await response.json();
        const allJackets = data.data; 
        console.log(allJackets);
        displayJackets(allJackets);
        filteredJackets = allJackets;
        console.log(filteredJackets);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

fetchProducts(); 



const searchBar = document.getElementById("search-bar");
searchBar.addEventListener ('input', event => {
    event.preventDefault()
    const term = event.target.value.toLowerCase()
    let searchResult = filteredJackets.filter(filteredJacket => {
        return filteredJacket.title.toLowerCase().includes(term)
    })
    displayJackets(searchResult)
})

function generateJacketHTML(jacket) {

    const displayContainer = document.getElementById('display-container');
    displayContainer.classList.add('jackets_content-one');
    
    const jacketContainer = document.createElement('div');
    const jacketImage = document.createElement('img');
    jacketImage.classList.add('product-one_image');
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt;

    jacketContainer.appendChild(jacketImage);
    displayContainer.appendChild(jacketContainer);

    const jacketHeadAndDesc = document.createElement('div');
    const jacketHeading = document.createElement('h2');
    jacketHeading.textContent = jacket.title;
    const jacketDesc = document.createElement('p');
    jacketDesc.textContent = jacket.description;


    displayContainer.appendChild(jacketHeadAndDesc);
    jacketHeadAndDesc.appendChild(jacketHeading);
    jacketHeadAndDesc.appendChild(jacketDesc);


    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("cta_product-one");
    addToCartBtn.classList.add("add-to-cart-button");
    addToCartBtn.addEventListener("click", () => addToCart(jacket.id));
    addToCartBtn.textContent = "Add to cart";
    const buyItBtn = document.createElement("a");
    buyItBtn.href = `product.html?id=${jacket.id}`;
    buyItBtn.classList.add("cta_product-one");
    buyItBtn.textContent= "Buy It"

    displayContainer.appendChild(addToCartBtn);
    displayContainer.appendChild(buyItBtn);
}

function displayJackets(jacketData) {
    for (let i = 0; i < jacketData.length; i++) {
        const jacket = jacketData[i]; 
        console.log(jacket.title); 
        generateJacketHTML(jacket);
    }
}


// My Cart Page



let cart = JSON.parse(localStorage.getItem("cart")) || [];

// A function that finds a jacket on the cart storage. 

function addToCart(jacketId) {
    const jackets = jackets.find(jacket => jacket.id === jacketId);
    const itemInCart = cart.find(item => item.id === jacketId);

    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push({...productId, quantity: 1})
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount ();
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    let totalQuantity = 0;

    for (let item of cart ) {
        totalQuantity += item.quantity;
    }

    cartCount.textContent = totalQuantity;
} 
// Displaying the selected items.
const cartContainer = document.getElementById("cardContainer");
const totalPriceElement = document.getElementById("totalPrice");

function displayCart () {
    cartContainer.innerHTML = "";
    
    if (cart.length === 0) {
        cartContainer.innerHTML= "<p>Your cart is empty!</p>"
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const price = item.price * item.quantity;
        totalPrice += price; // totalPrice = totalPrice + price;

        cartContainer.innerHTML += `
         <div class="cartItem">
        <img src=${item.image} alt=${item.name}>
        <h3>${item.name}</h3>
        <p>$${item.price} x ${item.quantity} = $${price.toFixed(2)}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
        `;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

    displayCart();
// Removes items from the cart if found a jacket with the specific id.
    function removeFromCart(jacketId) {
        cart = cart.filter(item => item.id !== jacketId);

        updateCartCount();
        displayCart();
    }

    const emptyCartButton = document.getElementById("emptyCart");

    emptyCartButton.addEventListener("click", () => {
        cart = [];
        updateCartCount();
        displayCart();
    });

    // 
function addToCart(productId) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

