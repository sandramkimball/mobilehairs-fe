
export let checkIsNew = (vehicle, isNew) => {
    if(isNew === 'All' || isNew === ''){ 
        return true 
    }
    else if (vehicle.isNew === isNew){ return true }
    else { return false }
}

export let checkMake = (vehicle, make) => {
    console.log(make, vehicle.make)
    if(make === 'All' || vehicle.make === make){ return true }
    else { return false }
}

export let checkModel = (vehicle, model) => {
    console.log(model, vehicle.model)
    if(model === 'All' || vehicle.model === model){ return true }
    else{ return false }

}

export let checkPrice = (vehicle, minPrice, maxPrice) => {
    if(vehicle.price >= minPrice && vehicle.price <= maxPrice){  
        return true 
    }
    else { return false }
}