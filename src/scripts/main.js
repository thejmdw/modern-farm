import {createPlan} from "./plan.js"
// import {createAsparagus} from "./seeds/asparagus.js"
// import {createCorn} from "./seeds/corn.js"
// import {createPotato} from "./seeds/potato.js"
// import {createSoybean} from "./seeds/soybean.js"
// import {createSunflower} from "./seeds/sunflower.js"
// import {createWheat} from "./seeds/wheat.js"
import {addPlant, usePlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants, useHarvest } from "./harvester.js"


// //Harvest Plan
const yearlyPlan = createPlan()

// console.log(yearlyPlan)
// console.log("-----")

// //Creating Seeds
// const asparagusSeed = createAsparagus()
// const cornSeed = createCorn()
// const potatoSeed = createPotato()
// const soybeanSeed = createSoybean()
// const sunflowerSeed = createSunflower()
// const wheatSeed = createWheat()


// console.log(asparagusSeed)
// console.log(cornSeed)
// console.log(potatoSeed)
// console.log(soybeanSeed)
// console.log(sunflowerSeed)
// console.log(wheatSeed)
// console.log("-----")

// Tilling the Field
// addPlant(asparagusSeed)
// addPlant(cornSeed)
// addPlant(potatoSeed)
// addPlant(soybeanSeed)
// addPlant(sunflowerSeed)
// addPlant(wheatSeed)

// const plantsUsed = usePlants()

// console.log(plantsUsed)
console.log("-----")

//Sowing with the Tractor
console.log("-----")
plantSeeds(yearlyPlan)
const plantsUsed = usePlants()

console.log(plantsUsed)

console.log("-----")
//Harvesting
harvestPlants(plantsUsed)
const harvested = useHarvest()

console.log(harvested)