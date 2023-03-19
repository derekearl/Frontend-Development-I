const url = 'https://derekearl.github.io/wdd230/chamber/directory.json';


const cardButton = document.querySelector("#cards");
const listButton = document.querySelector("#list");

async function getDirectoryData() {
    const respone = await fetch(url);
    const data = await respone.json();
    console.table(data.directory);
    displayDirectory(data.directory);
}

const displayDirectory = (directory) => {
    const cards = document.querySelector('div.cards');

    directory.forEach((directory) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = directory.name;
        address.textContent = directory.address;
        phone.textContent = directory.phone;
        website.textContent = directory.website;
        website.href = business.website;

        logo.setAttribute('src', directory.image);
        logo.setAttribute('alt', `Business Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '400');

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    }
    )}
    function displayTable(directory) {
        document.querySelector(".cards").innerHTML = "";
        document.querySelector(".cards").style.display = 'none';
        document.querySelector("table").innerHTML = "";
        const table = document.querySelector('table');
    
        businesses.forEach((directory) => {
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
    
    getDirectoryData(); 