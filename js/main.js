const userFirstName = prompt("Inserisci il tuo nome");
const userLastName = prompt("Inserisci il tuo nome");
const userColor = prompt("Inserisci il tuo colore preferito");
console.log(userFirstName, userLastName, userColor);

let userPassword = userFirstName + userLastName +userColor + 22;
console.log(userPassword);

document.getElementById('user-first-name').innerHTML = userFirstName;
document.getElementById('user-last-name').innerHTML = userLastName;
document.getElementById('user-color').innerHTML = userColor;

document.getElementById('user-password').innerHTML = userPassword;
