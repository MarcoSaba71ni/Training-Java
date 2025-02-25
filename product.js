
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


fetchSingleProduct();
