
// Responsive Hamburger Menu
const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});

fetch('https://derekearl.github.io/wdd230/chamber/directory.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayProphets);
    
 });

  function displayProphets(directory) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${directory.name}`;
    address.textContent = `${directory.address}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;
    img.setAttribute('src', directory.imageurl);
    img.setAttribute('alt', `${directory.name}`);
    img.classList.add("directory");
    h2.classList.add("directory")
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  const listView = document.querySelector('#listview');
  const cardView = document.querySelector('#cardview');
  listView.addEventListener('click', clearCards);
  cardView.addEventListener('click', clearList);
//   to add list
function clearCards() {
  let div = document.createElement('div');
  div.classList.add('myDynamicTable');
 document.querySelector('main').appendChild(div);
 let table = document.createElement('table');
  div.appendChild(table);
  table.classList.add('tableDirectory');
  let cards = document.querySelectorAll('.cards');
  cards.forEach((item)=>{
      item.remove();
  });
  fetch('https://johnshirley1.github.io/wdd230/chamber/jsons/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(populateTable);
    
 });
};
function populateTable(directory) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + directory.name + '</td>' +
        '<td>' + directory.address + '</td>' +
        '<td>' + directory.phone + '</td>' +
        '<td>' + directory.website + '</td>';
        document.querySelector('.tableDirectory').appendChild(tr);

};
function clearList() {
  let cards = document.createElement('div');
  cards.classList.add('cards');
  document.querySelector('main').appendChild(cards);
  tableIdToRemove = document.querySelector(".myDynamicTable");
  tableIdToRemove.parentNode.removeChild(tableIdToRemove);
  
  
  fetch('https://johnshirley1.github.io/wdd230/chamber/jsons/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayCards);
    
 });

  function displayCards(directory) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${directory.name}`;
    address.textContent = `${directory.address}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;
    img.setAttribute('src', directory.imageurl);
    img.setAttribute('alt', `${directory.name}`);
    img.classList.add("directory");
    h2.classList.add("directory")
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
};


function changeStyles() {
//changing styles in js
if((window.innerWidth > 798 && window.innerWidth < 802) || (window.innerWidth > 1178 && window.innerWidth < 1182)){
  let div = document.createElement('div');
  div.classList.add('.myDynamicTable');
 document.querySelector('main').appendChild(div);
  let cards = document.querySelectorAll('.cards');
  cards.forEach((item)=>{
      item.remove();
  });
  fetch('https://johnshirley1.github.io/wdd230/chamber/jsons/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(populateTable);
    
 });
};
    };

// eventlisteners for resizing window and loading page
window.addEventListener('resize', changeStyles);