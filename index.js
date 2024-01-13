import './index.css';

const cookieBox = document.querySelector('.cookie-consent');
const buttonBox = document.querySelector('.cookie-consent__button');

buttonBox.addEventListener('click', () => {
  cookieBox.classList.toggle('hidden');
  setLocalStorage();
})

function setLocalStorage() {
  localStorage.setItem("key", "1")
}
function getLocalStorage() {
  let displayNone = localStorage.getItem("key")
  if (displayNone >= 1) {
    cookieBox.classList.toggle('hidden');
  }
}
getLocalStorage()
