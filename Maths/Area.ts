const invalidInput = () => {throw new Error('Invalid input.')}

/*
  Calculate the area of various shapes

  Calculate the Surface Area of a Cube.
  Example: surfaceAreaCube(1) will return 6
  More about: https://en.wikipedia.org/wiki/Area#Surface_area
 */
const surfaceAreaCube = (sideLength: number): number => {
  return sideLength > 0 ? (6.0 * (sideLength ** 2.0)) : invalidInput()
}

/*
  Calculate the Surface Area of a Sphere.
  Wikipedia reference: https://en.wikipedia.org/wiki/Sphere
  return 4 * pi * r^2
*/
const surfaceAreaSphere = (radius: number): number => {
  return radius > 0 ? (4.0 * Math.PI * (radius ** 2.0)) : invalidInput()
}

/*
  Calculate the area of a rectangle
  Wikipedia reference: https://en.wikipedia.org/wiki/Area#Quadrilateral_area
  return width * length
*/
const areaRectangle = (length: number, width: number): number => {
  return length > 0 && width > 0 ? (width * length) : invalidInput()
}

/*
  Calculate the area of a square
*/
const areaSquare = (sideLength: number): number => {
  return sideLength > 0 ? (sideLength ** 2) : invalidInput()
}

/*
  Calculate the area of a triangle
  Wikipedia reference: https://en.wikipedia.org/wiki/Area#Triangle_area
  return base * height / 2
*/
const areaTriangle = (base: number, height: number): number => {
  return base > 0 && height > 0 ? (base * height) / 2.0 : invalidInput()
}

/*
  Calculate the area of a parallelogram
  Wikipedia reference: https://en.wikipedia.org/wiki/Area#Dissection,_parallelograms,_and_triangles
*/
const areaParallelogram = (base: number, height: number): number => {
  return base > 0 && height > 0 ? (base * height) : invalidInput()
}

/*
  Calculate the area of a trapezium
*/
const areaTrapezium = (base1: number, base2: number, height: number): number => {
  return base1 > 0 && base2 > 0 && height > 0 ? 1.0 / 2.0 * (base1 + base2) * height : invalidInput()
}

/*
  Calculate the area of a circle
*/
const areaCircle = (radius: number): number => {
  return radius > 0 ? (Math.PI * (radius ** 2)) : invalidInput()
}

/*
  Calculate the area of a rhombus
  Wikipedia reference: https://en.wikipedia.org/wiki/Rhombus
*/
const areaRhombus = (diagonal1: number, diagonal2: number): number => {
  return diagonal1 > 0 && diagonal2 > 0 ? (1 / 2 * diagonal1 * diagonal2) : invalidInput()
} 

export { surfaceAreaCube, surfaceAreaSphere, areaRectangle, areaSquare, areaTriangle, areaParallelogram, areaTrapezium, areaCircle, areaRhombus }
