import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants, useHarvest } from "./harvester.js"
import { catalog } from "./catalog.js"


//Harvest Plan
const yearlyPlan = createPlan()

console.log("-----")


//Sowing with the Tractor
console.log("-----")
plantSeeds(yearlyPlan)
const plantsUsed = usePlants()

console.log(plantsUsed)



console.log("-----")
//Harvesting
harvestPlants(plantsUsed)
const harvestedFood = useHarvest()

console.log(harvestedFood)


console.log("-----")
//Selling Food
const htmlElementCropTypes = document.querySelector(".container")

htmlElementCropTypes.innerHTML = catalog(harvestedFood)