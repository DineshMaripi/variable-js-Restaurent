//adding log of Nav bar
const heading = document.getElementById('logo'); //accessing id of logo
heading.textContent = 'Variable Restorent';//providing content


//image slider
const slider = document.querySelector('.slider');//accesing class of slider
const slides = slider.querySelectorAll('li');
const slideCount = slides.length;
let activeSlide = 0;
setInterval(() => {
	slides[activeSlide].classList.remove('active');// To change the images dynamically every 5 Secs, use SetInterval() method
	activeSlide++;
	if (activeSlide === slideCount) {
		activeSlide = 0;
	}
	slides[activeSlide].classList.add('active');
}, 5000);


// Fetch and parse the JSON file
const dataURL = './food-item.json';
fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {

	console.log(data)
 // Generate HTML for menu items dynamically
    const menuContainer = document.getElementById('restaurant-menu');

    data.forEach((item) => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <h3 class="item-name">${item.name}</h3>
        <img class="item-image" src="${item.image}" alt="${item.name}">
        <p class="item-cost">Cost: ${item.cost}</p>
        <p class="item-preparation-time">Preparation Time: ${item.preparationTime}</p>
		<button class="item-button">Add To Cart</button>
      `;
      menuContainer.appendChild(menuItem);

	  const cartButton = menuItem.querySelector('.item-button');
      const cartCount = document.getElementById('cart-count');
	  const cartItems = []; // Declare the cartItems array
      cartButton.addEventListener('click', () => {
        
       let itemCount = parseInt(cartCount.textContent);
    if (menuItem.classList.contains('highlight')) {
      menuItem.classList.remove('highlight');
      itemCount--;
      const itemIndex = cartItems.findIndex((item) => item === menuItem);
      if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
      }
    } else {
      menuItem.classList.add('highlight');
      itemCount++;
      cartItems.push(menuItem);
    }
    cartCount.textContent = itemCount;
      })
 });
  })
  .catch((error) => {
    console.error('Error fetching food items:', error);
  });

  
    

 
  
  