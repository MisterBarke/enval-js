import {suiviItems} from "./data.js"
console.log(suiviItems);


const filterLot = document.getElementById("filter-lot");
const filterEtat = document.getElementById("filter-Etat");
const filterDate = document.getElementById("filter-date");
const filterRap = document.getElementById("filter-Rap");
const tableBody = document.getElementById('tbody');
const suiviTitle = document.getElementById('suiviTitle');
const titleDiv = document.getElementById('titleDiv');


function renderTable(items) {

  
 let tableContent = '';

  items.forEach((item, index) => {
    tableContent  += ` <tr>
      <td>${item.lot}</td>
      <td>${item.etat}</td>
      <td>${item.theDate}</td>
      <td id="ir">${item.rapport}</td>
      <td class="border1" >
      <a id='btn-details' href="suividetail.html/${item.id}"><button class="btn2">Voir</button></a>
      </td>
    </tr>`;

  });
  
  tableBody.innerHTML = tableContent;
}


// Afficher la table au chargement initial
renderTable(suiviItems);

function filteredLot() {
  suiviItems.sort(function(a, b) {
    return a.lot.localeCompare(b.lot, undefined, { sensitivity: 'base' });
});
  renderTable(suiviItems);
}

document.getElementById('filter-lot').addEventListener('click', () => {
  filteredLot();
});

function filteredEtat() {
  suiviItems.sort(function(a, b) {
      return a.etat.localeCompare(b.etat, undefined, { sensitivity: 'base' });
  });

  renderTable(suiviItems);
}

document.getElementById('filter-etat').addEventListener('click', () => {
  filteredEtat();
});

function filteredDate() {
  suiviItems.sort(function(a, b) {
      const dateA = parseInt(a.theDate.split('/').reverse().join(''));
      const dateB = parseInt(b.theDate.split('/').reverse().join(''));
      return dateA - dateB;
  });

  renderTable(suiviItems);
}

document.getElementById('filter-date').addEventListener('click', () => {
  filteredDate();
});

function filteredRapport() {
    suiviItems.sort(function(a, b) {
        return a.rapport.localeCompare(b.rapport, undefined, { sensitivity: 'base' });
    });
  
    renderTable(suiviItems);
  }
  
  document.getElementById('filter-rap').addEventListener('click', () => {
    filteredRapport();
  });


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredItems = suiviItems.filter(item => {
      const lotMatch = item.lot.toLowerCase().includes(searchText);
      const etatMatch = item.etat.toLowerCase().includes(searchText);
      const RapportMatch = item.rapport.toLowerCase().includes(searchText);

      return lotMatch || etatMatch || RapportMatch;
  });

  renderTable(filteredItems);
});


