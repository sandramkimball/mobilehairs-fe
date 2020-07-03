import { firestore } from './../../firebase/utils'

export const handleAddVehicle = vehicle => {
    return new Promise((resolve, reject) => {
        firestore
        .collection('vehicles')
        .doc()
        .set(vehicle)
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
        firestore
        .collection('vehicles')
        .get()
        .then(snapshot=> {
            const vehiclesArray = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    documentID: doc.id
                }
            });
            resolve(vehiclesArray)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export const handleDeleteVehicle = documentID => {
    return new Promise((resolve, reject) => {
        firestore
        .collection('vehicles')
        .doc(documentID)
        .delete()
        .then(()=> {
            console.log('Deleted vehicle listing.')
            resolve()
        })
        .catch(err => {
            reject(err)
        })
    })
}