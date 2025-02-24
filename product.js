/*
// Fetch API Data
async function fetchSingleProduct() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const jackets = data.data;

        showDetail(jackets); // Call showDetail with the fetched products
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}

fetchSingleProduct();

// Find the matching jacket by ID
function showDetail(jackets) {
    const jacketId = new URLSearchParams(window.location.search).get("id");


    const jacket = jackets.find(jacket => jacket.Id === jacketId);

    if (!jacket) {
        console.error("Jacket not found!");
    }

    const jacketHTML = generateSingleJacket(jacket);
    displaySingleJacket(jacketHTML);
}

// Generate the single jacket HTML structure
function generateSingleJacket(jacket) {
    const productContainer = document.getElementById("product-container");
    productContainer.classList.add('product_display-image');

    const imgDiv = document.createElement('div');
    const jacketImage = document.createElement('img');
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt;

    imgDiv.appendChild(jacketImage);
    productContainer.appendChild(imgDiv);
}
    /*return `
        <div class="product-detail">
            <img src="${jacket.image.url}" alt="${jacket.image.alt}" class="jacket-image">
            <h2 class="jacket-title">${jacket.title}</h2>
            <p class="jacket-description">${jacket.description}</p>
            <p class="jacket-price">€${jacket.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
        `product.html?id=${jacket.id}`

    `;*/



/*    
async function fetchSingleProduct() {
    const response = await fetch(`https://docs.noroff.dev/docs/v2/e-commerce/rainy-days#single-product`);
    const data = await response.json();
    const jackets = data.data;
    displaySingleJacket();

} // A function to fetch any data according to the url

fetchSingleProduct();



const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const productId = searchParameters.get("id");




function createJacketDetail(jackets) {

    const productContainer = document.getElementById('product-container');

    const jacketDetail = document.createElement("div");
    const jacketName = document.createElement("h2");
    jacketName.textContent = jacket.title;

    jacketDetail.appendChild(jacketName);
    productContainer.appendChild(jacketDetail);
}

function displaySingleJacket() {

}


*/


const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const productId = searchParameters.get("id");

async function fetchSingleProduct() {
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${productId}`);
        const jacket = await response.json(); 
        displaySingleJacket(jacket);
    } catch (error) {
        console.error("Error fetching jacket details:", error);
    }
}

function displaySingleJacket(jacket) {
    const productContainer = document.getElementById("product-container");

    if (!productContainer) {
        console.error("Product container not found");
        return;
    }

    productContainer.innerHTML = ""; // Clear previous content

    const jacketDetail = document.createElement("div");
    jacketDetail.classList.add("jacket-detail");

    const jacketName = document.createElement("h2");
    jacketName.textContent = jacket.title;

    const jacketImage = document.createElement("img");
    jacketImage.src = jacket.image;
    jacketImage.alt = jacket.title;

    const jacketDescription = document.createElement("p");
    jacketDescription.textContent = jacket.description;

    const jacketPrice = document.createElement("p");
    jacketPrice.textContent = `Price: $${jacket.price}`;

    jacketDetail.appendChild(jacketName);
    jacketDetail.appendChild(jacketImage);
    jacketDetail.appendChild(jacketDescription);
    jacketDetail.appendChild(jacketPrice);
    productContainer.appendChild(jacketDetail);
}

// Call the fetch function to start the process
fetchSingleProduct();
