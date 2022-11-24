import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import StandardImageList from './imageList.js';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TimeImage from './overimage.js';
import Box from '@mui/material/Box';
import { alpha } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";



window.onscroll = function() {scrollFunction()};



function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("TitleLogo").style.height = "15vh";
    document.getElementById("TitleLogo").style.top = "5vh";
  //  document.getElementById("TitleLogo").style.backgroundColor = "white";
  //  document.getElementById("TitleLogo").style.animation = "";

		document.getElementById("nav").style.top = "2vh";



  } else {
    document.getElementById("TitleLogo").style.height = "35vh";
    document.getElementById("TitleLogo").style.top = "4vh";
    //document.getElementById("TitleLogo").style.backgroundColor = "";
    //document.getElementById("TitleLogo").style.animation = "pulsefade 4s ease-in-out infinite alternate";


		document.getElementById("nav").style.top = "25vh";


  }




}
let tagapp = "all";

function Home(){
	return(
		<span>
	<Logo/>
  <Whoami/>
	<StandardImageList tag="all" gridColumns="2"/>
	</span>
);
}

function Rad(props){
	return(
		<span>
	<Logo/>
	<StandardImageList tag={props.tag} />
	</span>
);
}
function Brainwashing(){
  return(
    <span>
  <Logo/>
  <div className='titleGDoc'> <h4>clip__guided_brain_washer</h4></div>
<iframe className='iframeGDoc' src='https://drive.google.com/file/d/1kbzSkzOr_T4Tj68vANJEm5H_28RgM75O/preview' />
<iframe className='iframeGDoc' src='https://drive.google.com/file/d/1JGpqxZ6thb6rx85YH9Epw34GKMhC73BT/preview' />
<a href='https://drive.google.com/file/d/1kbzSkzOr_T4Tj68vANJEm5H_28RgM75O/preview' ><p  style={{color:'blue', margin:'2vw'}}>https://drive.google.com/file/d/1kbzSkzOr_T4Tj68vANJEm5H_28RgM75O/preview</p></a>
<a href='https://drive.google.com/file/d/1JGpqxZ6thb6rx85YH9Epw34GKMhC73BT/preview'><p  style={{color:'blue', margin:'2vw'}}>https://drive.google.com/file/d/1JGpqxZ6thb6rx85YH9Epw34GKMhC73BT/preview</p></a>
<div className='readmeGDoc'>
# <b>clip</b>-guided-<b>brainwashing</b> <br/>
#point is i feel <b>watched</b> and <b>dissolved</b> into algorithms (basic i know). i feel like paying attention to algorithms used on me makes me make <b>algorithmic choices</b>.
i like how all the interaction with this art is done for you, because it feels releaving, under<b> my control</b>. when it reacts to the direction of my eyes,
i get more <b>satisfaction of control</b>. i want to integrate more <b>subconcious interaction</b> into all aspects of this, im continuing work on the eye tracking aspect however i want to
do the image generation more realtime and responsive.  i will need a different computer for that. <br/>
# a clip guided diffusion model generating images prompted from leaves of grass and the secrets from my <b>brain</b>. <br/>
# written in <b>python</b>. two display options available, <b>eye</b> tracked updating or allow your <b>computer to decide</b>. <br/>
# i have spent hours watching this.  the images being generated constantly makes it exciting. <br/>
# like in the ryan gosling movie lol <br/>
# ok, thanks. <br/>
# August, 2022 NYC <br/>
</div>
<TimeImage/>
<div id='imagewords'>
<img id='mansplainzindex' src='https://i.imgur.com/kaLVyMY.jpg'/>
<img id='mansplainzindex' src='https://i.imgur.com/rfI1sCz.jpg'/>
<img id='mansplainzindex' src='https://i.imgur.com/YI2N9qa.jpg'/>
<img id='mansplainzindex' src='https://i.imgur.com/5OvITa7.jpg'/>
<img id='mansplainzindex' src='https://i.imgur.com/9VXkgEG.jpg'/>
<img id='mansplainzindex' src='https://i.imgur.com/9k5yYQ0.png'/>
<img id='mansplainzindex' src='https://i.imgur.com/C9HoOL1.jpg'/>
<img id='mansplainzindex' src='https://i.imgur.com/qXJhG3Q.jpg'/>

</div>


</span>
)
}
function App() {


	return (
		<span>

		<Routes>
       <Route path='/cars' element={<Rad tag="CAR"  /> } />
       <Route  path='/' element={<Home /> } />
			 <Route path='/usa' element={<Rad tag="USA"  />} />
			 <Route path='/ppl' element={<Rad tag="ppl"  />} />
			 <Route path='/out' element={<Rad tag="out" /> } />
       <Route path='/nyc' element={<Rad tag="nyc" /> } />
       <Route path='/space' element={<Rad tag="space" /> } />
			 <Route path='/commod' element={<Rad tag="prop0623" /> } />
       <Route path='/rad' element={<Rad tag="RAD" /> } />
       <Route path='/prop0623' element={<Rad tag="prop0623" /> } />
       <Route path='/midjourneyPrompts' element={<Rad tag="midjourney"/> } />
       <Route path='/brainwashing' element={<Brainwashing/> } />
       <Route path='/jesus' element={<Rad tag="jesus"/> } />

    </Routes>
</span>

	);


}

function Whoami(){
  return(
  <Box className='introdiv' sx={{
  //  backgroundColor: { xs: "blue", sm: "red", md: "yellow" },
    width: { xs: "fit-content", sm: "45%", md: "35%" },
    ml: { xs: "-1%", sm: "45%", md: "45%" },
    mt: { xs: "-12%", sm: "-8%", md: "5%" },
    textAlign: { xs: "center", sm: "right", md: "right" },
    backgroundColor: 'rgba(255,255,255,0.6)',
    border: 4,
    borderColor: 'blue',
    borderRadius:10,
    p:2.4,
  }}>
  <h1> Nathan Schmidt</h1> is a cowboy, photographer and programmer raised in Wyoming living in New York City.
  He is currently learning <a>python for data science</a> and shooting on a Sony A7 with remarkably cheap lenses.
  </Box>
)
}

function Logo(){

	return(
		<span>
		<a href="/" >
	<img  id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/june16Logo.svg"/>
		</a>

		<div id="nav" class="nav">
		<a href="#/cars" ><b class="b bionic">car</b>s</a> /
		<a href="#/usa"> <b class="b bionic">US</b>A</a> /
		<a href="#/ppl"> <b class="b bionic">peop</b>le</a> /
		<a href="#/out"> <b class="b bionic">outsi</b>de</a> /
    <a href="#/rad"> <b class="b bionic">R&</b>D</a> /
    <a href="#/nyc"> <b class="b bionic">NY</b>C</a>

		</div>

		</span>
);
}
function unusued(){
  //<a href="https://instagram.com/schidt.co/">
//  <img  id="igLogo" alt="Schidt.co IG Logo" src="https://i.imgur.com/inu4zIh.png" />
//  </a>
}


function Footer(){
	return(
<div id="footer">
<span style={{backgroundColor: "#d8e8ef"}}>
natepsacc@gmail.com, @schidtery,
<br/>Schidt.co is a Web3 site
</span>
</div>
);
}

export default App;
