import axios from 'axios'

export const handleAddVehicle = vehicle => {
    return new Promise((resolve, reject) => {
        axios
        .get(process.env.ROOT_DB)
        .post(vehicle)
        .then(()=> {
            resolve()
        })
        .catch(err=> {
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

export const handleDeleteVehicle = documentID => {
    return new Promise((resolve, reject) => {
        axios.delete(process.env.ROOT_DB, documentID)
        .then(()=> {
            console.log('Deleted vehicle listing.')
            resolve()
        })
        .catch(err => {
            reject(err)
        })
    }, [])
}