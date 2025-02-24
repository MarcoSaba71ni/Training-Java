
 let apiUrl = "https://v2.api.noroff.dev/rainy-days"; // API URL

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
    `;*/


// Display the generated jacket HTML in the DOM
function displaySingleJacket(jacketHTML) {
   }


