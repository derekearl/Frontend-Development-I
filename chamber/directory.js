const url = 'https://derekearl.github.io/wdd230/chamber/directory.json';
const cardButton = document.querySelector("#cards");
const listButton = document.querySelector("#list");

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the business array of the data object given thestructure of the json file
    displayBusinesses(data.businesses);
    cardButton.addEventListener('click', () => {        
        displayBusinesses(data.businesses);
    });
    listButton.addEventListener('click', () => {        
        displayTable(data.businesses);
    });
}



const displayBusinesses = (businesses) => {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".cards").style.display = 'flex';
    document.querySelector("table").innerHTML = "";
    cards = document.querySelector('div.cards'); // select the output container element

    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a');
  
      // Build the h2 content out to show the business's full name - finish the template string
      h2.textContent = business.name;
      address.textContent = business.address;
      phone.textContent = business.phone;
      website.textContent = business.website;
      website.href = business.website;
  
      // Build the image logo by setting all the relevant attribute
      logo.setAttribute('src', business.image);
      logo.setAttribute('alt', `Business Logo`);
      logo.setAttribute('loading', 'lazy');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

function displayTable(businesses) {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".cards").style.display = 'none';
    document.querySelector("table").innerHTML = "";
    const table = document.querySelector('table');

    businesses.forEach((business) => {
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_address = document.createElement('td');
    let td_phone = document.createElement('td');
    let td_website = document.createElement('td');
    let td_website_link = document.createElement('a');

    td_name.textContent = business.name;
    td_phone.textContent = business.phone;
    td_address.textContent = business.address;
    td_website_link.textContent = business.website;
    td_website_link.href = business.website;

    tr.appendChild(td_name);
    tr.appendChild(td_phone);
    tr.appendChild(td_address);
    tr.appendChild(td_website_link);

    table.appendChild(tr);
  })
}

getBusinessData();