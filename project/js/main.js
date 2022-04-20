// burger
let buttonMob = document.getElementById('nav__mobile'); 
let navMenu = document.getElementById('nav'); 
buttonMob.onclick = function(e) {
    e.preventDefault();
    buttonMob.classList.toggle('active');
    navMenu.classList.toggle('active');
}
// modal-form
function modalOpen() {
    document.getElementById('modal-id').style.display="block";
}
function modalClose() {
    document.getElementById('modal-id').style.display="none";
}
// blog
function popupOpen() {
    document.getElementById('pop-up').style.display="block";
}
function popupClose() {
    document.getElementById('pop-up').style.display="none";
}