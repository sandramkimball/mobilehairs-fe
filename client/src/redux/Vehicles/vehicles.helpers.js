import axios from 'axios'

export const handleAddVehicle = vehicle => {
    return new Promise((resolve, reject) => {
        axios
        .post("https://ult-car-sales.herokuapp.com/vehicles", vehicle)
        .then((res)=> {
            console.log('Successful Post', res)
        })
        .catch(err=> {
            console.log('Post failed', err)
            reject(err)
        })

    })
}

export const handleFetchVehicles = () => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.ROOT_DB)
        .then(res => {
            console.log(res)
            const vehiclesArray = res.data.data
            return vehiclesArray
        })
        .catch(err => {
            reject(err)
        })
    }, [])
}

// GET USER'S VEHICLES
export const handleFetchUsersVehicles = (user_id) => {
    axios.get(`${process.env.ROOT_DB}/find_by`, user_id)
    .then(res => {
        console.log('users cars', res)
        const vehiclesArray = res.data.data
        return vehiclesArray
    })
    .catch(err => {
        console.log('failed to get users cars', err)
    })
}


export const handleDeleteVehicle = documentID => {
    return new Promise((resolve, reject) => {
        axios.delete(`https://ult-car-sales.herokuapp.com/vehicles/${documentID}`)
        .then( res => {
            console.log('Car has been vanquished.', res)
            resolve()
        })
        .catch(err => {
            console.log('The damn car is still here.', err)
            reject(err)
        })
    }, [])
}