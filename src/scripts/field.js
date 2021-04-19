const plants = [];

export const addPlant = (seed) => {
  plants.push(seed)
  return plants
}

let plantsCopy = []

export const usePlants = () => {
  plantsCopy = plants.slice()
  return plantsCopy
  
}

// console.log(plantsCopy);