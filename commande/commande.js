const commandeItems = [
    {
        commande : '0009',
        Laboratoire : 'Enval',
        theDate : "10/02/2023",
        status : "Terminée",
        id : Date.now()
    },
    {
        commande : '0022',
        Laboratoire : 'qlab2',
        theDate : "10/02/2023",
        status : "Terminée",
        id : Date.now()
    },
    {
        commande : '0013',
        Laboratoire : 'wlab3',
        theDate : "12/04/2023",
        status : "Terminée",
        id : Date.now()
    },
    {
        commande : '0008',
        Laboratoire : 'clab4',
        theDate : "14/08/2023",
        status : "Terminée",
        id : Date.now()
    },
    {
        commande : '0015',
        Laboratoire : 'plab5',
        theDate : "22/02/2023",
        status : "En cours",
        id : Date.now()
    },
    {
        commande : '0906',
        Laboratoire : 'mlab6',
        theDate : "10/04/2023",
        status : "En cours",
        id : Date.now()
    },
    {
        commande : '0307',
        Laboratoire : 'hlab7',
        theDate : "28/02/2023",
        status : "En cours",
        id : Date.now()
    },
    {
        commande : '0708',
        Laboratoire : 'alab8',
        theDate : "06/02/2023",
        status : "Terminée",
        id : Date.now()
    },
    {
        commande : '1109',
        Laboratoire : 'llab9',
        theDate : "03/02/2023",
        status : "Terminée",
        id : Date.now()
    }
]
const filtercommande = document.getElementById("filter-commande");
const filterLab = document.getElementById("filter-lab");
const filterDate = document.getElementById("filter-date");
const filterStat = document.getElementById("filter-stat");
const tableBody = document.getElementById('tbody');
const imgNav = document.getElementById('imgNav')
const storedImage = localStorage.getItem('profileImage');
window.addEventListener('load', function () {  
  if (storedImage) {
      imgNav.src = storedImage;
  }
});

function renderTable(items) {
  let tableContent = '';

  items.forEach(item => {
      tableContent += ` <tr>
      <td>${item.commande}</td>
      <td>${item.Laboratoire}</td>
      <td>${item.theDate}</td>
      <td id="ir">${item.status}</td>
      <td class="border1" >
        <button class="btn2">
         <strong> voir</strong>
        </button>
      </td>
    </tr>`;
  });

  tableBody.innerHTML = tableContent;
}

// Afficher la table au chargement initial
renderTable(commandeItems);

function filteredFacture() {
 commandeItems.sort(function(a, b) {
      return parseInt(a.commande) - parseInt(b.commande);
  });

  renderTable(commandeItems);
}

document.getElementById('filter-commande').addEventListener('click', () => {
  filteredFacture();
});

function filteredLab() {
  commandeItems.sort(function(a, b) {
      return a.Laboratoire.localeCompare(b.Laboratoire, undefined, { sensitivity: 'base' });
  });

  renderTable(commandeItems);
}

document.getElementById('filter-lab').addEventListener('click', () => {
  filteredLab();
});

function filteredDate() {
  commandeItems.sort(function(a, b) {
      const dateA = parseInt(a.theDate.split('/').reverse().join(''));
      const dateB = parseInt(b.theDate.split('/').reverse().join(''));
      return dateA - dateB;
  });

  renderTable(commandeItems);
}

document.getElementById('filter-date').addEventListener('click', () => {
  filteredDate();
});

function filteredStatus() {
    commandeItems.sort(function(a, b) {
        return a.status.localeCompare(b.status, undefined, { sensitivity: 'base' });
    });
  
    renderTable(commandeItems);
  }
  
  document.getElementById('filter-stat').addEventListener('click', () => {
    filteredStatus();
  });


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredItems = commandeItems.filter(item => {
      const commandesMatch = item.commande.toLowerCase().includes(searchText);
      const laboratoireMatch = item.Laboratoire.toLowerCase().includes(searchText);
      const statusMatch = item.status.toLowerCase().includes(searchText);

      return commandesMatch || laboratoireMatch || statusMatch;
  });

  renderTable(filteredItems);
});