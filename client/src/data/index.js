export let typeInOpt = ['make', 'model', 'year', 'miles', 'price', 'vin', 'description']

export let dropdownOpt = [
    {'engine': ['4 Cyl', '6 Cyl', '8 Cyl', 'Electric']}, 
    {'body': ['Pickup', 'Sedan', 'Coupe', 'Hatchback', 'SUV','Minivan']}, 
    {'drive': ['4WD', 'FWD', 'RWD', 'AWD']}, 
    {'transmission': ['Automatic', 'Manual']}, 
    {'fuel': ['Gasoline', 'Diesel', 'Hybrid', 'Electric']}, 
    {'color': ['black', 'blue', 'red', 'white', 'gray', 'yellow', 'tan', 'other']}
]

export let vehicleData = [
    {
        make: 'Dodge',
        model: 'Ram 1500',
        year: 2004,
        body: 'Pickup',
        engine: '6 Cyl',
        drive: 'RWD',
        miles: 30000,
        color: 'blue',
        price: 12000,
        isNew: false,
        images: [],
        tags: ['off-road'],
        description: 'New brakes, shocks, transmission, front fender, left headlight.'
    },
    {
        make: 'Mazda',
        model: 'Mazda3',
        year: 2019,
        body: 'Sedan',
        engine: '8 Cyl',
        drive: 'AWD',
        miles: 1200,
        color: 'silver',
        price: 21000,
        isNew: false,
        images: [],
        tags: ['sport'],
        description: 'Fast n clean.'
    },
    {
        make: 'BMW',
        model: '4-Series',
        year: 2020,
        body: 'Sedan',
        engine: 'Electric',
        drive: 'FWD',
        miles: 0,
        color: 'black',
        price: 30000,
        isNew: true,
        images: [],
        tags: ['modern'],
        description: 'You will feel rich.'
    }
]