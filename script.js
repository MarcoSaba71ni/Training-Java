
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
    addToCartBtn.classList.add("cta_product-one");
    addToCartBtn.classList.add("add-to-cart-button");
    addToCartBtn.textContent = "Add to cart";
    const buyItBtn = document.createElement("a");
    buyItBtn.href = "product.html?id=${jacket.id}";
    buyItBtn.classList.add("cta_product-one");
    buyItBtn.textContent= "Buy It"

    displayContainer.appendChild(addToCartBtn);
    displayContainer.appendChild(buyItBtn);
    
    

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

// Rendering each Jacket Page Individually.

