export class Router {

  routes = {}

  add(routeName,page){
    this.routes[routeName] = page
  }

  route(event){  // Função route irá rotear, trabalhar com as rotas
    event = event || window.event  // Verifica se o event foi passado de fato
    window.event.preventDefault()
  
    window.history.pushState({},"", event.target.href)
  
    this.handle()
  }
  
  handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => 
    document.querySelector('#app').innerHTML = html)
  }

}

