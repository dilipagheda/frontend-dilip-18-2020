import React, {useEffect, useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/LessThan1000.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import identicalFilter from '../utils/task6'
import '../styles/FilterRepeatingCharStrings.scss'

const Result = (props) => {
  const {items} = props
  if(items === undefined) return null
  if(items.length === 0)
  {
    return (
      <div className='result'>
        <p>Sorry! No match found!</p>
      </div>
    )
  }

  return (
    <div className='result'>
      <p>All strings which has the same character in it</p>
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

const FilterRepeatingCharStrings = (props) =>  {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [result, setResult] = useState(undefined)

  const onClickHandler = () => {
    if(value.length > 0)
    {
      setError("")
      const result = identicalFilter(value.split(','))
      setResult([...result])
    }else
    {
      setError("Please enter a value")
    }
  }

  useEffect(() => {
    setResult(undefined)
    setError("")
  },[value])

  return (
    <Grid item xs={12} sm={12} md={8} lg={6}>
      <div className="filterrepeating-container">
        <Paper className="inner-container" elevation={3} >
          <h1>Filter Repeating Character Strings</h1>
          <p>Filter all strings which has exactly same characters in it. e.g., aaaaa or 999 or ccc</p>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <TextField
                value={value} 
                id="outlined-basic" 
                label="Enter strings seperated by comma. e.g., aa, cd" 
                variant="outlined" 
                style={{width:'100%'}} 
                onChange={(e) => setValue(e.target.value)}
              />
              <span className='error'>{error}</span>
            </Grid>
          </Grid>
          <Button className="action-button" variant="contained" color="primary" onClick={onClickHandler}>
              Filter
          </Button>
          <Result items={result} />
        </Paper>
      </div>
    </Grid>
  )
}

export default FilterRepeatingCharStrings