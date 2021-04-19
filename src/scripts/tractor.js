import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"


export const plantSeeds = (yearlyPlan) => {
  for (const row of yearlyPlan) {
    for (const plot of row) {
      if (plot === "Asparagus") {
        // console.log("A")
        const asparagusSeed = createAsparagus()
        addPlant(asparagusSeed)
      } else if (plot === "Corn") {
        // console.log("C")
        const cornSeed = createCorn()
        addPlant(cornSeed)
      } else if (plot === "Potato") {
        // console.log("P")
        const potatoSeed = createPotato()
        addPlant(potatoSeed)
      } else if (plot === "Soybean") {
        // console.log("So")
        const soybeanSeed = createSoybean()
        addPlant(soybeanSeed)
      } else if (plot === "Sunflower") {
        // console.log("Su")
        const sunflowerSeed = createSunflower()
        addPlant(sunflowerSeed)
      } else if (plot === "Wheat") {
        // console.log("W")
        const wheatSeed = createWheat()
        addPlant(wheatSeed)
      }

    }
  }
}