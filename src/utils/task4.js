const triangleArea = (side1, side2, side3) => {
  try{
    const _side1 = parseInt(side1,10)
    const _side2 = parseInt(side2,10)
    const _side3 = parseInt(side3,10)
    const halfPerimeter = (_side1+_side2+_side3) / 2
    const area = Math.sqrt(halfPerimeter*((halfPerimeter-_side1) * (halfPerimeter- _side2) * (halfPerimeter - _side3)))
    return area
  }catch(e)
  {
    throw new Error("invalid input. ")
  }
}

export default triangleArea