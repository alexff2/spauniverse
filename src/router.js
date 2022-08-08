export default class Router {
  routes = {}

  addHoute(name, path) {
    this.routes[name] = path
  }

  route(e) {
    e.preventDefault()
    window.history.pushState({} , '', e.target.href)

    this.handler()
  }

  handler() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then( data => data.text())
      .then( html => {
        document.querySelector('#app').innerHTML = html 
      })
  }
}