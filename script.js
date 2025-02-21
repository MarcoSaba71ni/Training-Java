/*
// Fetching products from API
let allJackets = [];



async function fetchProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        if (!response.ok) {
            throw new Error("Can't fetch")
        };

        const data = await response.json();
        allJackets = data.data;
        displayJackets(allJackets);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


// Replacing rendered HTML Content for Js
// Three functions
// 1. generateJackets(): generates the HTML
// 2. displayJackets(): loop through the data rendering div's 
//      according to the jackets info
// 3. main()
//

const displayContainer = document.getElementById('display-container');

function generateJackets(jacket) {
        const displayJacket = document.createElement('div');
        displayJacket.classList.add('products');

        // Image inside a link
        const jacketLink = document.createElement('a');
        jacketLink.href = jacket.link; // I guess there is a problem as I dont have the link for the Products
        const jacketImage = document.createElement('img');
        jacketImage.src = jacket.image;
        jacketImage.classList.add('product-one_image');
        jacketLink.appendChild(jacketImage);

        // Jacket content div
        const jacketContent = document.createElement('div');
        jacketContent.classList.add('jackets_content');

        // Heading and description
        const jacketHeadAndDesc = document.createElement('div');
        const jacketHeading = document.createElement('h2');
        jacketHeading.textContent = jacket.title; 
        const jacketDesc = document.createElement('p');
        jacketDesc.textContent = jacket.description; 
        jacketHeadAndDesc.appendChild(jacketHeading);
        jacketHeadAndDesc.appendChild(jacketDesc);

        // Price and Buy button
        const jacketPriceBuy = document.createElement('div');
        jacketPriceBuy.classList.add('price-buy');
        const jacketPrice = document.createElement('p');
        jacketPrice.textContent = "€" + jacket.price; 
        const buyLink = document.createElement('a');
        buyLink.href = jacket.link;
        buyLink.textContent = "Buy it"; // FIXED
        buyLink.classList.add('cta_product-one');

        jacketPriceBuy.appendChild(jacketPrice);
        jacketPriceBuy.appendChild(buyLink);

        // Append all sections
        jacketContent.appendChild(jacketHeadAndDesc);
        jacketContent.appendChild(jacketPriceBuy);
        displayJacket.appendChild(jacketLink); 
        displayJacket.appendChild(jacketContent);

        // Append final jacket to display container
        document.getElementById('display-container').appendChild(displayJacket);

        return displayJackets;
        }


function displayJackets (data) {
    displayJacket.innerHTML = " ";//Clears the previous line of code
    for (let i = 0; i < data.length; i++) {
        const jacketHtml = generateJackets(data[i]);
        displayContainer.appendChild(jacketHtml);
    }
}


 fetchProducts();

function main() {
    fetchProducts();
    displayJackets();
    console.log("Main is working!");
}




console.log("HI");

*/

// Fetching products from API

async function fetchProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        if (!response.ok) {
            throw new Error("Can't fetch")
        };

        const data = await response.json();
        const allJackets = data.data; //  remove stringify, we need it as an array and not a string
        console.log(allJackets);
        displayJackets(allJackets);// call displayJackets, pass in allJackets as a parameter
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

fetchProducts(); // call it so that it can execute

/* Replacing rendered HTML Content for JS - no need for main()
    1.fetchProducts(): fetches API data about jackets, once fetched it calls displayJackets()
    2. displayJackets(): loop through the data rendering div's according to the jackets info and calls generateJacketHTML()
    3. generateJackets(): generates the HTML
*/

function generateJacketHTML(jacket) {
    const displayContainer = document.getElementById('display-container');
    displayContainer.classList.add('jackets_content-one');



    // Create a new div for the jacket

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
    addToCartBtn.classList.add("add-to-cart-button");
    addToCartBtn.textContent = "Add to cart";

    displayContainer.appendChild(addToCartBtn);

    
    

    // Append to the container instead of replacing content

}


 // Function to loop through and display jackets
function displayJackets(jacketData) {
    for (let i = 0; i < jacketData.length; i++) {
        const jacket = jacketData[i]; // set jacket[i] against a variable to make it easy to understand
        console.log(jacket.title); // Verify each title in console
        generateJacketHTML(jacket); // Generate HTML for each jacket
    }
}