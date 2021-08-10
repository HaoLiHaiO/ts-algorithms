/*
 Modified by Alexandre Pinel

 Calculate the mathematical properties involving coordinates
 Calculate the Distance Between 2 Points on a 2 Dimensional Plane
 Example: coorDistance(2,2,14,11) will return 15
 Wikipedia reference: https://en.wikipedia.org/wiki/Geographical_distance#Flat-surface_formulae
*/
const distance2points = (longitude1: number, latitude1: number, longitude2: number, latitude2: number): number => {
  const width: number = longitude2 - longitude1
  const height: number = latitude2 - latitude1
  return (Math.sqrt(width * width + height * height))
}

export { distance2points }
