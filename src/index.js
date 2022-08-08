import Router from "./router.js"

// Elements and Events
const links = document.querySelectorAll('nav ul li a')

const router = new Router()

router.addHoute('/', './pages/home.html')
router.addHoute('/universe', './pages/universe.html')
router.addHoute('/exploration', './pages/exploration.html')

links.forEach( link => {
  link.addEventListener('click', e => router.route(e))
})

router.handler()
window.onpopstate = () => router.handler()
