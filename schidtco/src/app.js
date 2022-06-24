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
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		document.body.style.backgroundColor = "#F0C0C9";
	} else {
		document.body.style.backgroundColor = "#d8e8ef";
	}

	if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
		document.body.style.backgroundColor = "#F0C0C9";
		document.getElementById("footer").style.opacity = "75%";
	} else {
		document.body.style.backgroundColor = "#d8e8ef";
		document.getElementById("footer").style.opacity = "0%";

	}
	if (document.body.scrollTop > 24500 || document.documentElement.scrollTop > 24500) {
		document.getElementById("footer").style.opacity = "85%";
	} else {
		document.getElementById("footer").style.opacity = "0%";

	}

}
let tagapp = "all";

function Home(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="all" gridColumns="2"/>
	</span>
);
}

function Rad(props){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag={props.tag} gridColumns="2"/>
	</span>
);
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
			 <Route path='/commod' element={<Rad tag="prop0623" /> } />
       <Route path='/rad' element={<Rad tag="RAD" /> } />
       <Route path='/prop0623' element={<Rad tag="prop0623" /> } />
       <Route path='/midjourneyPrompts' element={<Rad tag="midjourney"/> } />

    </Routes>
</span>

	);


}



function Logo(){

	return(
		<span>
		<a href="/" >
	<img  id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/june16Logo.svg"/>
		</a>

		<div id="nav" class="nav">
		<a href="#/cars" ><b class="b bionic">car</b>s </a>
		<a href="#/usa"> <b class="b bionic">US</b>A </a>
		<a href="#/ppl"> <b class="b bionic">peop</b>le</a>
		<a href="#/out"> <b class="b bionic">outsi</b>de</a>
    <a href="#/rad"> <b class="b bionic">R&</b>D</a>

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
natepsacc@gmail.com, @schidtery, @schidt.co
<br/>Schidt.co is a """Web3""" site.

</span>
</div>
);
}

export default App;
