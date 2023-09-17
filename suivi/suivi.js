const suiviItems = [
  {
      lot : 'C02 Libre',
      etat : 'Reçu',
      theDate : "10/02/2023",
      rapport : "Non Disponible",
      id : 1
  },
  {
      lot : 'Carbonate',
      etat : 'Non Reçu',
      theDate : "10/02/2023",
      rapport : "disponible",
      id : 2
  },
  {
      lot : 'Chlore',
      etat : 'Non Reçu',
      theDate : "12/04/2023",
      rapport : "disponible",
      id : 3
  },
  {
      lot : 'Conductivité Electrique',
      etat : 'Reçu',
      theDate : "14/08/2023",
      rapport : "Non Disponible",
      id : 4
  },
  {
      lot : 'Cyanure Libre',
      etat : 'Non Reçu',
      theDate : "22/02/2023",
      rapport : "Disponible",
      id : 5
  },
  {
      lot : 'E2002039200',
      etat : 'Reçu',
      theDate : "10/04/2023",
      rapport : "Non Disponible",
      id : 6
  },
  {
      lot : 'TEL2336336763',
      etat : 'Reçu',
      theDate : "28/06/2023",
      rapport : "Non Disponible",
      id : 7
  },
  {
      lot : 'TEL263636363',
      etat : 'Reçu',
      theDate : "06/02/2023",
      rapport : "Non Disponible",
      id : 8
  },
  {
      lot : 'E252626R2F2',
      etat : 'Non Reçu',
      theDate : "03/02/2024",
      rapport : "Disponible",
      id : 9
  },

] 
const suiviItemsJSON = JSON.stringify(suiviItems);
localStorage.setItem('suiviItems', suiviItemsJSON);
const filterLot = document.getElementById("filter-lot");
const filterEtat = document.getElementById("filter-Etat");
const filterDate = document.getElementById("filter-date");
const filterRap = document.getElementById("filter-Rap");
const tableBody = document.getElementById('tbody');
const suiviTitle = document.getElementById('suiviTitle');
const titleDiv = document.getElementById('titleDiv');
const imgNav = document.getElementById('imgNav');
const storedImage = localStorage.getItem('profileImage');
window.addEventListener('load', function () {  
if (storedImage) {
imgNav.src = storedImage;
}
});



function renderTable(items) {

  
 let tableContent = '';

  items.forEach((item, index) => {
    tableContent  += ` <tr>
      <td>${item.lot}</td>
      <td>${item.etat}</td> 
      <td>${item.theDate}</td>
      <td id="ir">${item.rapport}</td>
      <td class="border1" >
      <button id='btn-details' class="btn2">Voir</button>
      </td>
    </tr>`;
  
  });
  
  tableBody.innerHTML = tableContent;
  const btnDetails = document.querySelectorAll('#btn-details');
  btnDetails.forEach((btn, index) => { 
    btn.addEventListener('click', () => {
      const selectedObj = items[index].id; 
      localStorage.setItem('selectedObj', selectedObj);
    if (items[index].rapport === 'disponible'){
      window.location.href = 'suividetail.html';
    }else{
      alert('Rapport non disponible')
    }
     
    });            
  });
}

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


