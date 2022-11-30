export function getTabBarVisibility(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
  if (
    routeName === 'Menu' 
  ) {
    return false;
  }
  return true;
}
