const isOdd = (value) => {
  try{
    const _value = parseInt(value,10)
    return _value % 2 !== 0
  }catch(e)
  {
    throw new Error("Invalid input")
  }
}

export default isOdd
