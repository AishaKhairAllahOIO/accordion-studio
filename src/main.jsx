import React from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider,createTheme,CssBaseline} from '@mui/material';
import App from './App';
import './styles.css';
const theme=createTheme({direction:'rtl',palette:{primary:{main:'#3766a0'},background:{default:'#f5f8fc',paper:'#fff'},text:{primary:'#233750',secondary:'#64768d'}},typography:{fontFamily:'Tahoma, Arial, sans-serif',button:{textTransform:'none'}},shape:{borderRadius:10},components:{MuiButton:{defaultProps:{disableElevation:true}},MuiSelect:{styleOverrides:{select:{paddingRight:14,paddingLeft:32},icon:{right:'auto',left:7}}}}});
createRoot(document.getElementById('root')).render(<React.StrictMode><ThemeProvider theme={theme}><CssBaseline/><App/></ThemeProvider></React.StrictMode>);
