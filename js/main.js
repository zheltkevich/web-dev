// Accordeon from page-faq -------------------------------

var acc = document.getElementsByClassName("faq-accordeon__link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq-accordeon__link--active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Navbar opener ---------------------------------------
let navbar = document.querySelector('.main-navbar')
let burgerButton = document.querySelector('.header__mobile-navbar-toggler')

burgerButton.onclick = function () {
  navbar.classList.toggle('main-navbar--opened');
  document.querySelector('.body').classList.toggle('lock');
  console.log('Кнопка меню нажата');
};