const url1 = 'https://derekearl.github.io/wdd230/chamber/directory.json';


const cardButton = document.querySelector("#cards");
const listButton = document.querySelector("#list");

async function getDirectoryData() {
    const respone = await fetch(url1);
    const data = await respone.json();
    console.table(data.directory);
    displayDirectory(data.directory);
    cardButton.addEventListener('click', () => {
        displayDirectory(data.directory1);
    });
    listButton.addEventListener('click', () => {
        displayTable(data.directory1);
    });

}

const displayDirectory = (directory) => {
        document.querySelector(".cards").innerHTML = "";
        document.querySelector(".cards").style.display = 'flex';
        document.querySelector("table").innerHTML = "";
        const cards = document.querySelector('div.cards');



    directory.forEach((directory1) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = directory1.name;
        address.textContent = directory1.address;
        phone.textContent = directory1.phone;
        website.textContent = directory1.website;
        website.href = directory1.website;

        logo.setAttribute('src', directory1.image);
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
    
        directory.forEach((directory) => {
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