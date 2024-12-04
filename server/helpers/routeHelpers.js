function isActiveRoute(route, currentRout) {
    return route === currentRout ? 'active' : ''; 
}

module.exports = {isActiveRoute};