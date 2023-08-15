const openNav = document.querySelector('.bi-list')
const closeNav = document.querySelector('.bi-x-square')
const nav = document.querySelector('.navigation')

openNav.addEventListener('click', function() {
    nav.style.width = "100%"
} )

closeNav.addEventListener('click', function() {
    nav.style.width = "0%"
})