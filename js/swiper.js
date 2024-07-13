new Swiper('.swiper', {
   slidesPerView: 4,
   loop: true,
   autoplay: {
      disableOnInteraction: false,
   },
})

let imgSlider = document.querySelector('.wildWay__image')

setInterval(() => {
   let last = imgSlider.firstElementChild
   last.remove()
   imgSlider.appendChild(last)
}, 2500)

let imgSlider2 = document.querySelector('.concept-image')

setInterval(() => {
   let last = imgSlider2.firstElementChild
   last.remove()
   imgSlider2.appendChild(last)
}, 2500)

let imgSlider3 = document.querySelector('.bite-image')

setInterval(() => {
   let last = imgSlider3.firstElementChild
   last.remove()
   imgSlider3.appendChild(last)
}, 2500)
