const harvest = []

export const harvestPlants = (plantsUsed) => {
  for (const plant of plantsUsed) {
    if (Array.isArray(plant) === true) {
      for (const corn of plant) {
        for (let i = 0; i < corn.output/2; i++) {
          harvest.push(corn)
        }
      }
    }
    for (let i = 0; i < plant.output; i++) {
      harvest.push(plant)
      
    }
    
  }
  return harvest
}

let harvestCopy = []

export const useHarvest = () => {
  harvestCopy = harvest.slice()
  return harvestCopy
}