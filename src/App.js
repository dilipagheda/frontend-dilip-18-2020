import LessThan1000 from './components/LessThan1000'
import FilterRepeatingCharStrings from './components/FilterRepeatingCharStrings'
import NavBar from './components/NavBar'
import './App.css';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function App() {
  return (
    <Box className="app" mx="auto">
      <NavBar />
        <Grid container spacing={3} justify="center">
                <LessThan1000 />
        </Grid>
        <Grid container spacing={3} justify="center">
                <FilterRepeatingCharStrings />
        </Grid>
      <Footer />
    </Box>
  );
}

export default App;
