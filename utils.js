//gets the desired dimensions from
//global object in list form
const objCoordsToList = (obj, dimension) => {
    obj = {...obj}
    return Object.keys(obj).map(p => obj[p][dimension])
}


//easing functions
const easeInSine = (pct) => {
    return 1 - cos((pct * PI) / 2)
}

const easeOutSine = (pct) => {
    return sin((pct * PI) / 2);
}