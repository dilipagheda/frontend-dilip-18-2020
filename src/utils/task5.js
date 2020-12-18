const getDistance = (objA, objB) => {
  try
  {
     const part1 = Math.pow((objB.x - objA.x),2)
     const part2 = Math.pow((objB.y - objA.y),2)
     const distance = Math.sqrt(part1 + part2)
     return parseFloat(distance.toFixed(3))
  }catch(e)
  {
    throw new Error("Invalid input")
  }
}

export default getDistance