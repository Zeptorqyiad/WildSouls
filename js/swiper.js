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
   let first = imgSlider2.firstElementChild
   first.remove()
   imgSlider2.appendChild(first)
}, 2500)
