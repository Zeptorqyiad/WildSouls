let typed = new Typed('.auto-type', {
   strings: ['the wild'],
   typeSpeed: 50,
   backSpeed: 50,
   loop: true,
})

const headerMenu = document.querySelector('.header__budger')
const burgerMenu = document.querySelector('.burger-list')
const burgerLine1 = document.querySelector('.line-1')
const burgerLine2 = document.querySelector('.line-2')
const burgerLine3 = document.querySelector('.line-3')

headerMenu.addEventListener('click', () => {
   if (headerMenu) {
      burgerMenu.classList.toggle('active')
      burgerLine1.classList.toggle('active')
      burgerLine2.classList.toggle('active')
      burgerLine3.classList.toggle('active')
      document.body.classList.toggle('_lock')
   }
})
