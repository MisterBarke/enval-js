const factureItems = [
    {
        factures : '0009',
        Laboratoire : 'Enval',
        theDate : "10/02/2023",
        id : Date.now()
    },
    {
        factures : '0022',
        Laboratoire : 'lab2',
        theDate : "10/02/2023",
        id : Date.now()
    },
    {
        factures : '0013',
        Laboratoire : 'lab3',
        theDate : "12/02/2023",
        id : Date.now()
    },
    {
        factures : '0008',
        Laboratoire : 'lab4',
        theDate : "14/02/2023",
        id : Date.now()
    },
    {
        factures : '0015',
        Laboratoire : 'lab5',
        theDate : "22/02/2023",
        id : Date.now()
    },
    {
        factures : '0906',
        Laboratoire : 'lab6',
        theDate : "10/042023",
        id : Date.now()
    },
    {
        factures : '0307',
        Laboratoire : 'lab7',
        theDate : "28/02/2023",
        id : Date.now()
    },
    {
        factures : '0708',
        Laboratoire : 'lab8',
        theDate : "06/02/2023",
        id : Date.now()
    },
    {
        factures : '1109',
        Laboratoire : 'lab9',
        theDate : "03/02/2023",
        id : Date.now()
    }
]
const filterFacture = document.getElementById("filter-facture");
const filterLab = document.getElementById("filter-lab");
const filterDate = document.getElementById("filter-date");
const tableBody =document.getElementById('tbody');
function displayTable(){
    let tableContent = '';
    factureItems.forEach(index =>{
        console.log(index.factures);
        tableContent = ` <tr id="tableRow">
      <td>${index.factures}</td>
      <td>${index.Laboratoire}</td>
      <td>${index.theDate}</td>
      <td class="border1" >
        <button class="btn2">
         <strong> voir</strong>
        </button>
      </td>
    </tr>`

    tableBody.innerHTML += tableContent;
    });


}

function sortByDateAsc() {
    tableBody.innerHTML = '';
    const sortedItems = [...factureItems].sort((a, b) => new Date(a.theDate) - new Date(b.theDate));
    displayTable(sortedItems);
}

// Fonction de filtrage par date (ordre décroissant)
function sortByDateDesc() {
    const sortedItems = [...factureItems].sort((a, b) => new Date(b.theDate) - new Date(a.theDate));
    displayTable(sortedItems);
}

// Écouteurs d'événements pour les boutons de filtrage
filterFacture.addEventListener("click", sortByDateAsc);
filterLab.addEventListener("click", displayTable.bind(null, factureItems)); // Affiche les données non triées
filterDate.addEventListener("click", sortByDateDesc); // Par défaut, tri décroissant

// Afficher les données par défaut (tri décroissant)
sortByDateDesc();




/* let filter;
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  filter = factureItems.filter(el =>
    el.factures.toLowerCase().includes(searchText) ||
    el.Laboratoire.toLowerCase().includes(searchText),
 
  );
  displayTable(filter)
});
 */