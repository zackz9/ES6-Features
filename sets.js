//Sets

const brands = ['BMW','Maserati' ,'Mercedes-Benz','Maserati' ];

//Eleminate the duplicate items and return a new Set Object
const brandsSet = new Set(brands);

// To convert the set object into an array 

const uniqueBrands = [...brandsSet]
console.log(brands);
console.log(brandsSet);
console.log(uniqueBrands);

//Get result in one line
const uniqueBrands2 = [...new Set(brands)];

console.log(uniqueBrands2);

const hps = new Set();

hps.add(230).add(200).add(409);

hps.delete(230)
hps.add(230)

// To get the length we cant use length but instead we use size method 
console.log(hps.size);
console.log(hps.has(200));
 

// To delete all items on Set 
hps.clear()
console.log(hps.size);

const cars = new Set([
    {brand: 'BMW', hps:230},
    {brand: 'Maserati', hps:490},
    {brand: 'Subaru', hps:430}
])

console.log(cars);

cars.forEach(car => {
    console.log(car);
})