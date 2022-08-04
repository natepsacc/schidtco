import React from 'react';
import ReactDOM from 'react-dom';
import { Dimensions } from 'react-native-web';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import StandardImageList from './imageList.js';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { AnitextName, AnitextDesc } from './anitext';
import Box from '@mui/material/Box';
import bgvid from './bgvid.mp4';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 600,
      bigMobile: 700,
      tablet: 900,
      desktop: 1000
    }
  },
  palette: {
    background: {
      paper: 'rgba(0,0,0,0.2)'
    }}
});


function Bgvid(){
return(
  <Box
  sx={{
    m:0,

  }}
  >
  <video autoPlay loop muted playsInline className='videoBG' >
  <source src={bgvid} type='video/mp4' />
</video>
</Box>
)
}
function NameCard(){
return(
  <Box
   style={{position: 'relative', zIndex: '1' }}
  sx={{
    maxWidth: (windowWidth /2),
    width:'fit-content',
    m:10,
    ml:"auto",
    mr:"auto",
    p:8,
    pt:2,
    bgcolor: "#ffffff3d",
    textAlign: 'center',
  }}
  >
<AnitextName/>
<AnitextDesc/>
</Box>
)
}
function Secone(){
  return(
    <>
    <Box
    style={{position: 'relative', zIndex: '1' }}

    sx={{
      bgcolor: "#fffff1d1",
      width: (windowWidth /2.3),
      height: "auto",
      mt:(windowHeight /20),
      ml:5,
      p:7,

    }}>
    <h1>whois Nathan ?</h1><br/>
    Nathan studied both computer science and behavior neuroscience.  After working in the IT field prior to graduation, Nathan found his passion in the arts, specifically, digital art.

    </Box>
    <Box
    style={{position: 'relative', zIndex: '2' }}

    sx={{
      bgcolor: "#fff1ffd1",
      width: (windowWidth /2.3),
      height: "auto",
      mt:-4,
      mr:5,
      ml: 'auto',
      p:5,
    }}>
    <h1>Whaddya Know?</h1><br/>
    <ol>
    <li>React</li>
    <li>Javascript</li>
    <li>HTML/CSS</li>
    <li>C</li>
    <li>Python</li>
    <li>WordPress</li>
    <li>Shopify</li>
    <li>Most of all of the other website builders if thats what you're into</li>

    </ol>
    </Box>
    <Box
    style={{position: 'relative', zIndex: '3' }}

    sx={{
      bgcolor: "#f1ffffd1",
      width: (windowWidth /2.3),
      height: "auto",
      mt:-4,
      ml:5,
      p:7,

    }}>
    <h1>Show me your work!</h1><br/>
    <a href='https://www.schidt.co'> >/ schidt.co </a> -- a ground up web3 React gallery <br/>
    <a href='https://www.thirdi.world'> >/ thirdi.world </a> -- another ground up web3 React gallery <br/>
    <a href='https://iwenttocatholicschool.schidt.co'> >/ QR_Gospel </a> -- procedurally generated Gospel stored <i> inside </i> QR codes and hosted on web3. <br/>
    <a href='https://eatingnapkins.art'> >/ *WIP* EN Online Gallery </a> -- WIP publication site for Eating Napkins Label.

    </Box>
    <Box
    style={{position: 'relative', zIndex: '2' }}

    sx={{
      bgcolor: "#fff1ffd1",
      width: (windowWidth /2.3),
      height: "auto",
      mt:-4,
      mr:5,
      ml: 'auto',
      p:5,
      mb:10,

    }}>
    <h1>Contact</h1><br/>
    <ul>
    <li>(307)797-8281</li>
    <li><a href= 'mailto:nathan.2billion@gmail.com'>nathan.2billion@gmail.com</a></li>

    </ul>
    </Box>
    </>
  )
}
function App() {
	return (
    <>
    <Bgvid/>
    <NameCard/>
    <Secone/>
</>
	);


}







export default App;
