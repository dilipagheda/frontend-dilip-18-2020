const lessThan1000 = (number1, number2, number3) => {
  try
  {
    const _number1 = parseInt(number1, 10)
    const _number2 = parseInt(number2, 10)
    const _number3 = parseInt(number3, 10)
    const sum = _number1+_number2+_number3
    return  {
      total: sum,
      lessThan100: sum < 1000
    }
  }
  catch(e)
  {
    throw new Error("Invalid Input")
  }
}

export default lessThan1000