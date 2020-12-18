const identicalFilter = (items) => {
  const filteredItems = items.filter(item => hasOnlyRepeatingChars(item))
  return filteredItems
}

const hasOnlyRepeatingChars = (value) => {
  debugger
  const valueArray = value.split('')
  const firstChar = valueArray[0]
  for(let i=1; i<valueArray.length;i++)
  {
    if(firstChar !== valueArray[i])
    {
      return false
    }
  }
  return true
}

export default identicalFilter