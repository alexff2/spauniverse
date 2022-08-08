import Router from "./router.js"

const router = new Router()

router.addHoute('/', './pages/home.html')
router.addHoute('/universe', './pages/universe.html')
router.addHoute('/exploration', './pages/exploration.html')
router.addHoute('404', './pages/404.html')

window.route = () => router.route()
window.onpopstate = () => router.handler()
router.handler()
