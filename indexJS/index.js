document.addEventListener('DOMContentLoaded', function () {
  const slideMenuButton = document.getElementById('slideMenuButton')
  const slideMenu = document.getElementById('slideMenu')
  let menuTimer

  slideMenuButton.addEventListener('mouseenter', function () {
    clearTimeout(menuTimer)
    slideMenu.style.display = 'block'
  })

  slideMenuButton.addEventListener('mouseleave', function () {
    menuTimer = setTimeout(function () {
      slideMenu.style.display = 'none'
    }, 9000)
  })

  slideMenu.addEventListener('mouseenter', function () {
    clearTimeout(menuTimer)
  })

  slideMenu.addEventListener('mouseleave', function () {
    menuTimer = setTimeout(function () {
      slideMenu.style.display = 'none'
    }, 9000)
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link')

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault()

      document.body.classList.add('fade-out')

      setTimeout(() => {
        window.location.href = link.href
      }, 1000)
    })
  })
})
