const route = function (event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  "/": "index.html",
  "/login": "/pages/sign-in.html",
  "/products": "/pages/products.html",
};

const handleLocaltionChange = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.querySelector(".main-page").innerHTML = html;

  console.log();
  
};


window.onpopstate = handleLocaltionChange;
window.route = route;