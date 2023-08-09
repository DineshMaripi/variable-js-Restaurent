
const dataURL = './food-item.json';
fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {



document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
  
    // Create a cart array to store selected items
    const cartItems = [];
  
    // Function to render cart items in the cart page
    function renderCartItems() {
      const cartItemsContainer = document.getElementById('cart-items');
      cartItemsContainer.innerHTML = ''; // Clear previous cart items
  
      cartItems.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <h3 class="item-name">${item.name}</h3>
          <img class="item-image" src="${item.image}" alt="${item.name}">
          <p class="item-cost">Cost: ${item.cost}</p>
          <p class="item-preparation-time">Preparation Time: ${item.preparationTime}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  
    // ... existing code ...
  
    data.forEach((item) => {
      // ... existing code ...
  
      cartButton.addEventListener('click', () => {
        const selectedCartItem = {
          name: item.name,
          image: item.image,
          cost: item.cost,
          preparationTime: item.preparationTime,
        };
  
        cartItems.push(selectedCartItem);
        renderCartItems();
      });
    });
  
    // ... existing code ...
  });
});