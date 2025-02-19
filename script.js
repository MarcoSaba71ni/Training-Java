 async function fetchProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        if (!response.ok) {
          throw new Error("Can't fetch")};
 
        const data = await response.json();
       console.log(data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
} 

// Replacing rendered HTML Content for Js
// equivalent id & classes from tutorial
// class: card-container = jackets_content
//

/* 
const displayContainer = document.getElementById('display-container');
console.log(displayContainer); // The result is null because we didn't fetch the elements yet.

function generateJackets () {
    const displayContainer = document.getElementById("display-container");
    displayContainer.innerHTML = ""; 

    const productDiv = document.createElement('div');
    productDiv.classList.add('products');

    const productLink = document.createElement('a');
    productLink.href = jacket.link;

    const productImage = document.createElement('img');
    productImage.src = jacket.image
    productImage.classList.add('product-one_image');

    productLink.appendChild(productImage);


    const jacketContent = document.createElement('div');
    jacketContent.classList.add("jackets_content");

    const jacketsHeadingAndDescription = document.createElement("div");
    const jacketHeading = document.createElement('h2');
    jacketHeading.textContent = jacket.name;

    const jacketDescription = document.createElement("p");
    jacketDescription.textContent = "Water Proof";

    jacketsHeadingAndDescription.appendChild(jacketHeading);
    jacketsHeadingAndDescription.appendChild(jacketDescription);

    const priceAndBuy = document.createElement('div');
    priceAndBuy.classList.add('price-buy');
    const priceJacket = document.createElement('p');
    priceJacket.textContent = jacket.price;
    const buyLink = document.createElement("a");
    buyLink.href = jacket.link;
    buyLink.textContent = "Buy it."
    buyLink.classList.add('cta_product-one');

    priceAndBuy.appendChild(priceJacket);
    priceAndBuy.appendChild(buyLink);

    jacketContent.appendChild(jacketsHeadingAndDescription);

    productDiv.appendChild(jacketContent);
    productDiv.appendChild(priceAndBuy);

    }
*/


/*
<div id="display-container" class="products">
    <a href="products/jacket-five.html"><img src="images/RainyDays_Jacket5.jpg" class="product-one_image"></a>
        <div class="jackets_content">
            <div>
                <h2>George</h2>
                <p>Water Proof</p>
            </div>
            <div class="price-buy">
                <p>€120</p>
                <a href="products/jacket-five.html" class="cta_product-one">Buy it</a>
            </div>
        </div>
</div>
*/    
    
}

function displayCards () {
     for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
     }
}

function main () {
    
}

//




console.log("HI");

function main () {
    console.log('mains is working');
}

