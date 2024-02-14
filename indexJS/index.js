document.addEventListener('DOMContentLoaded', function () {
  const slideMenuButton = document.getElementById('slideMenuButton')
  const slideMenu = document.getElementById('slideMenu')
  let menuTimer

  slideMenuButton.addEventListener('click', function () {
    clearTimeout(menuTimer)
    slideMenu.style.display = 'block'
  })

  slideMenuButton.addEventListener('', function () {
    menuTimer = setTimeout(hideSlideMenu, 3000)
  })

  slideMenu.addEventListener('click', function () {
    clearTimeout(menuTimer)
  })

  slideMenu.addEventListener('', function () {
    menuTimer = setTimeout(hideSlideMenu, 3000)
  })

  const links = document.querySelectorAll('.nav-link')

  links.forEach((link) => {
    link.addEventListener('click', handleLinkClick)
  })

  function handleLinkClick(event) {
    event.preventDefault()

    document.body.classList.add('fade-out')

    setTimeout(() => {
      window.location.href = event.target.href
    }, 3000)
  }

  function hideSlideMenu() {
    slideMenu.style.display = 'none'
  }
})
