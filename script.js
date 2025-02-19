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
const displayContainer = document.getElementById('display-container');
console.log(displayContainer); // The result is null because we didn't fetch the elements yet.

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

