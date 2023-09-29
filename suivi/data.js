const selectedObj = localStorage.getItem('selectedObj');
const suiviTitle = document.getElementById('suiviTitle');

var suiviItems = JSON.parse(localStorage.getItem('suiviItems'));
const imgNav = document.getElementById('imgNav');
const storedImage = localStorage.getItem('profileImage');

window.addEventListener('load', function () {  
if (storedImage) {
imgNav.src = storedImage;
}
});

var selectObj = suiviItems.find(function(objet) {
    return objet.id === parseInt(selectedObj);
  });
  
  suiviTitle.textContent = 'Rapport ' + (selectObj.lot).toString();