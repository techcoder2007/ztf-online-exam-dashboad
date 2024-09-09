class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }
  loadRoute(...urlSegments) {
    const matchedRoute = this._matchUrlToRoute(urlSegments);

    const url = `/${urlSegments.join("/")}`;
    history.pushState({}, "", url);

    const routerOutElement = document.body;
    routerOutElement.innerHTML = matchedRoute.template;
  }

  _matchUrlToRoute(urlSegments) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegments = route.path.split("/").slice(1);

      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }

      return routePathSegments.every(
        (routePathSegment, i) => routePathSegment === urlSegments[i]
      );
    });

    return matchedRoute;
  }

  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegments = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    this.loadRoute(...pathSegments);
  }
}

const routes = [{ path: "/" }, { path: "/users" }, { path: "/contacts" }];

const router = new Router(routes);

document.body.addEventListener("click", (e) => {
  if (!e.target.matches("[data-link]")) {
    return;
  }

  e.preventDefault();
  const url = e.target.getAttribute("href");
  const urlSegments = url.split("/").slice(1);

  router.loadRoute(...urlSegments);
});
