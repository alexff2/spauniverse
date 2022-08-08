import Tasks from "./tasks.js"

const { changeSelectedBtn } = Tasks()

export default class Router {
  routes = {}

  addHoute(name, path) {
    this.routes[name] = path
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({} , '', event.target.href)

    this.handler()
  }

  handler() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    changeSelectedBtn(pathname)

    fetch(route)
      .then( data => data.text())
      .then( html => {
        document.querySelector('#app').innerHTML = html 
      })
  }
}