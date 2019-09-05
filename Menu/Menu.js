/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuBar = document.querySelector('.header');

 

function menu (menuItems) {
  const menuM = document.createElement('div');
  console.log(menuM);
  const menuList = document.createElement('ul');
  const menuBtn = document.querySelector('.menu-button');

  menuItems.forEach(items => {
    const menuListItems = document.createElement('li');
    menuListItems.textContent = items;
    menuList.appendChild(menuListItems);
  })

  menuM.appendChild(menuList);
  menuBar.appendChild(menuM);
  menuM.classList.add('menu');

  menuBtn.addEventListener('click', e =>{
    console.log(menuBtn)
    menuM.classList.toggle('menu--open');
    console.log('Button Clicked');
  })
  return menuM;
};

menu(menuItems);

// const toggleMenu = element => {
//   // Toggle the "menu--open" class on your menu refence. 
//   menu.classList.toggle('menu--open');
//   //TweenMax.to(".menu", 3, {rotationX:360});
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', ()=> toggleMenu());

// console.log(menuBar);

// function createMenu(list){
  
//   //Defining elements
  
  // const menu = document.createElement('div');
  // const menuItem = document.createElement('ul');

//   // Append

//   menu.appendChild(menuItem);

//   // Class Names 

//   menu.classList.add('menu-button');
  
//   // Content

//   menuItem.textContent = menuItems;

//   //When Clicked 

  // menuItem.addEventListener('click', e =>{
  //   menu.classList.toggle('menu--open');
  //    menu.classList.toggle('toggle-on');
  // })

//   return createMenu
// }
