document.addEventListener('DOMContentLoaded', function () {
  const slideMenuButton = document.getElementById('slideMenuButton')
  const slideMenu = document.getElementById('slideMenu')
  let menuTimer

  // Show slideMenu on mouseenter
  slideMenuButton.addEventListener('mouseenter', function () {
    clearTimeout(menuTimer)
    slideMenu.style.display = 'block'
  })

  // Hide slideMenu on mouseleave after 3 seconds
  slideMenuButton.addEventListener('mouseleave', function () {
    menuTimer = setTimeout(hideSlideMenu, 3000)
  })

  // Clear timeout on slideMenu mouseenter
  slideMenu.addEventListener('mouseenter', function () {
    clearTimeout(menuTimer)
  })

  // Hide slideMenu on slideMenu mouseleave after 3 seconds
  slideMenu.addEventListener('mouseleave', function () {
    menuTimer = setTimeout(hideSlideMenu, 3000)
  })

  // Handle links with fade-out effect
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
