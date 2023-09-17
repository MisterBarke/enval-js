const factureItems = [
    {
        factures : '0009',
        Laboratoire : 'Enval',
        theDate : "10/02/2023",
        id : Date.now()
    },
    {
        factures : '0022',
        Laboratoire : 'qlab2',
        theDate : "10/02/2023",
        id : Date.now()
    },
    {
        factures : '0013',
        Laboratoire : 'wlab3',
        theDate : "12/04/2023",
        id : Date.now()
    },
    {
        factures : '0008',
        Laboratoire : 'clab4',
        theDate : "14/08/2023",
        id : Date.now()
    },
    {
        factures : '0015',
        Laboratoire : 'plab5',
        theDate : "22/02/2023",
        id : Date.now()
    },
    {
        factures : '0906',
        Laboratoire : 'mlab6',
        theDate : "10/04/2023",
        id : Date.now()
    },
    {
        factures : '0307',
        Laboratoire : 'hlab7',
        theDate : "28/02/2023",
        id : Date.now()
    },
    {
        factures : '0708',
        Laboratoire : 'alab8',
        theDate : "06/02/2023",
        id : Date.now()
    },
    {
        factures : '1109',
        Laboratoire : 'llab9',
        theDate : "03/02/2023",
        id : Date.now()
    }
]
const filterFacture = document.getElementById("filter-facture");
const filterLab = document.getElementById("filter-lab");
const filterDate = document.getElementById("filter-date");
const tableBody =document.getElementById('tbody');
const imgNav = document.getElementById('imgNav');
const storedImage = localStorage.getItem('profileImage');
window.addEventListener('load', function () {  
if (storedImage) {
imgNav.src = storedImage;
}
});

function renderTable(items) {
  let tableContent = '';

  items.forEach(item => {
      tableContent += `<tr>
          <td>${item.factures}</td>
          <td>${item.Laboratoire}</td>
          <td>${item.theDate}</td>
          <td class="border1">
              <button class="btn2">
                  <strong>voir</strong>
              </button>
          </td>
      </tr>`;
  });

  tableBody.innerHTML = tableContent;
}

// Afficher la table au chargement initial
renderTable(factureItems);

function filteredFacture() {
  factureItems.sort(function(a, b) {
      return parseInt(a.factures) - parseInt(b.factures);
  });

  renderTable(factureItems);
}

document.getElementById('filter-facture').addEventListener('click', () => {
  filteredFacture();
});

function filteredLab() {
  factureItems.sort(function(a, b) {
      return a.Laboratoire.localeCompare(b.Laboratoire, undefined, { sensitivity: 'base' });
  });

  renderTable(factureItems);
}

document.getElementById('filter-lab').addEventListener('click', () => {
  filteredLab();
});

function filteredDate() {
  factureItems.sort(function(a, b) {
      const dateA = parseInt(a.theDate.split('/').reverse().join(''));
      const dateB = parseInt(b.theDate.split('/').reverse().join(''));
      return dateA - dateB;
  });

  renderTable(factureItems);
}

document.getElementById('filter-date').addEventListener('click', () => {
  filteredDate();
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredItems = factureItems.filter(item => {
      const facturesMatch = item.factures.toLowerCase().includes(searchText);
      const laboratoireMatch = item.Laboratoire.toLowerCase().includes(searchText);

      return facturesMatch || laboratoireMatch;
  });

  renderTable(filteredItems);
});