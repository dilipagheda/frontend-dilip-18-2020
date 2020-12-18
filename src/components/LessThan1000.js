import React, {useEffect, useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import lessThan1000 from '../utils/task1'
import '../styles/LessThan1000.scss'

const Result = (props) => {
  const {isLessThan1000, total} = props
  const resultFlag = isLessThan1000 ? 'True': 'False'
  return (
    <div className='results'>
      <div className='line1'>Result: <span className='flag'>{resultFlag}</span></div>
      <div className='line2'>Total: <span className='total'>{total}</span></div>
    </div>
  )
}

const LessThan1000 = () =>  {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [isLessThan1000, setIsLessThan1000] = useState(undefined)
  const [total, setTotal] = useState(undefined)

  const onClickHandler = () => {
    const result = lessThan1000(number1,number2,number3)
    setIsLessThan1000(result.lessThan100)
    setTotal(result.total)
  }

  useEffect(() => {
    setTotal(undefined)
    setIsLessThan1000(undefined)
  }, [number1,number2,number3])

  return (
    <Grid item xs={12} sm={12} md={8} lg={6}>
      <div className="lessthan1000-container">
        <Paper className="inner-container" elevation={3} >
          <h1>Less than a 1000 ?</h1>
          <p>Given three numbers, return true if the sum of the numbers is less than 1000. Otherwise return false.</p>
          <Grid container spacing={3} justify="center">
            <Grid item xs={4} >
              <TextField 
                value={number1} 
                id="outlined-basic" 
                label="Value A" 
                variant="outlined" 
                type="number" 
                onChange={(event) =>  setNumber1(event.target.value)}/>
            </Grid>
            <Grid item xs={4} >
              <TextField 
                value={number2} 
                id="outlined-basic" 
                label="Value B" 
                variant="outlined" 
                type="number" 
                onChange={(event) =>  setNumber2(event.target.value)}/>
            </Grid>
            <Grid item xs={4} >
              <TextField 
                value={number3} 
                id="outlined-basic" 
                label="Value C" 
                variant="outlined" 
                type="number" 
                onChange={(event) =>  setNumber3(event.target.value)}/>
            </Grid>
          </Grid>
          <Button className="action-button" variant="contained" color="primary" onClick={onClickHandler}>
            Let's find out!
          </Button>
          {total !== undefined && <Result isLessThan1000={isLessThan1000} total={total} />}
        </Paper>
      </div>
    </Grid>
  )
}

export default LessThan1000