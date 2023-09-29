const login = document.getElementById("login");
const loginName = document.getElementById("loginName");
const loginPwd = document.getElementById("loginPwd");
const notif = document.getElementById("notif");
const timer = document.getElementById("countdownDisplay");

const defaultUserName = "Barke";
const defaultUserPwd = "12345678";

const newPwd = localStorage.getItem("newPwd");
login.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    loginName.value === defaultUserName &&
    loginPwd.value === (newPwd || defaultUserPwd)
  ) {
    window.location.href = "./dashboard/dashboard.html";
  } else {
    handleIncorrectLogin();
  }
});

let errorCount = 0;


function handleIncorrectLogin() {
  errorCount++;
  if (errorCount === 5) {
   login.firstElementChild.disabled = true;
    // Si le compteur atteint 5, lancez le compte à rebours
    console.log("sd");
    countdownInterval = setInterval(updateTimer, 1000);
    updateTimer();

  } else {
    displayError("Infos Incorrectes");
  }
}
function displayError(message) {
  notif.style.display = "block";
  notif.textContent = message;
  setTimeout(function () {
    notif.style.display = "none";
  }, 3000);
}

let totalSeconds = 300;
let countdownInterval;

function updateTimer() {
  notif.style.display = "block";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

  notif.textContent = `${hoursString}:${minutesString}:${secondsString}`;

  if (totalSeconds === 0) {
    clearInterval(countdownInterval);
    alert("Le compte à rebours est terminé!");
    login.firstElementChild.disabled = false;
    notif.style.display = "none";
  } else {
    totalSeconds--;
  }
 
}

notif.addEventListener("click", () => {
  const response = prompt("Question secrete: Quelle est ton prenom ?");
console.log(response && response === "Barke");
  // Vérifiez si la réponse est correcte
  if (response && response === "Barke") {
    console.log("ff");
    // Redirigez vers la nouvelle page en cas de réponse correcte
    window.location.href = "./dashboard/dashboard.html";
  } else {
    alert("Réponse incorrecte !");
  }
});

// Mise à jour initiale
