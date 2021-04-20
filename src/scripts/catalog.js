export const catalog = (harvestedFood) => {
  
  //build HTML string 
  let htmlString = ""

  for (const crop of harvestedFood) {
    htmlString += `<section class="plant">${crop.type}</section>`
  }
  console.log(htmlString)
  return htmlString
}