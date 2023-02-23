// Mapeamento da rota 

const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html"
}

function route(event){  // Função route irá rotear, trabalhar com as rotas
  event = event || window.event  // Verifica se o event foi passado de fato
  window.event.preventDefault()

  window.history.pushState({},"", event.target.href)

  handle()
}

function handle(){
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]
  fetch(route)
  .then(data => data.text())
  .then(html => 
  document.querySelector('#app').innerHTML = html)}

handle()

window.onpopstate = ()=> {
handle()
}

window.route = () => {
  route()
}