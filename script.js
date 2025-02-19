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

const displayContainer = document.getElementById('display-container');
console.log(displayContainer); // The result is null because we didn't fetch the elements yet.

function main () {
    console.log('mains is working');
}
//




console.log("HI");

function main () {
    console.log('mains is working');
}

