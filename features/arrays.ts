let carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];



const carsByMake = [
  ["f150"],
  ["corola"],
  ["camaro"]
]


// help with inference
const car = carMakers[0];


// help with 'map'
carMakers.map((car: string): string => {
  return car;
})


// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
