// Fetching products from API

async function fetchProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        if (!response.ok) {
            throw new Error("Can't fetch")
        };

        const data = await response.json();
        const allJackets = JSON.stringify(data.data);
        console.log(allJackets);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

fetchProducts();

// Replacing rendered HTML Content for Js
// Three functions
// 1. generateJackets(): generates the HTML
// 2. displayJackets(): loop through the data rendering div's 
//      according to the jackets info
// 3. main()
//

const displayContainer = document.getElementById('display-container');

function generateJackets(data) {
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
    displayJacket.textContent = " ";//Clears the previous line of code
    for (let i = 0; i < data.length; i++) {
        const jacketHtml = generateJackets(data[i]);
        displayJackets.append(jacketHtml);
    }
}

function main() {
    displayJackets(data);   
    console.log('Main is working and will be used later one!');
}







console.log("HI");

function main() {
    console.log('mains is working');
}

