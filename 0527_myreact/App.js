import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { ButtonGroup, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { green,orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const useStyles3 = makeStyles({
  root:{
    background:'linear-gradient(45deg,#333,#999)',
    border:0,
    borderRadius:15,
    color:'white',
    padding:'5px 30px',
    marginBottom:10,
  },
})
const theme = createMuiTheme({
  palette:{
    primary:{
      main:green[100],
    },
    secondary:{
      main:orange[200],
    },
  }
});
function XbouButton(){
  const classes = useStyles3();
  return(
    <Button className={classes.root}>hello</Button>
  )
}
function BasicTextFields() {
  const classes = useStyles2();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="000" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }} />
    </form>
  );
}
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function CheckboxExample(){
  const [checked, setChecked]=React.useState(true);
  return(
    <div>
        <FormControlLabel
          control={<Checkbox
          checked={checked}
          onChange={(value)=>setChecked(value.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}/>}
          label="stander"
          /> 
            
    </div>
  )
}

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (      
  <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Typography variant="h6">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h1">
        Hello
        </Typography>
        <Typography variant="h2">
        Hello2
        </Typography>
        <CheckboxExample />
        <XbouButton></XbouButton>
        <BasicTextFields/>
        <ButtonGroup>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </ButtonGroup>  
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
