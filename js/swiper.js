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
