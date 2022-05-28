import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';
import StandardImageList from './imageList.js';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("TitleLogo").style.height = "8vh";
		document.getElementById("nav").style.top = "2vh";



  } else {
    document.getElementById("TitleLogo").style.height = "20vh";
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
function Cars(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="CAR" gridColumns="2"/>
	</span>
);
}
function USA(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="USA" gridColumns="2"/>

	</span>
);
}
function Ppl(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="ppl"gridColumns="2"/>
	</span>
);
}
function Out(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="out"gridColumns="2"/>
	</span>
);
}
function App() {


	return (
		<span>

		<Routes>
       <Route path='/cars' element={<Cars /> } />
       <Route  path='/' element={<Home/> } />
			 <Route path='/usa' element={<USA />} />
			 <Route path='/ppl' element={<Ppl />} />
			 <Route path='/out' element={<Out/> } />

    </Routes>
</span>

	);

}

function BionicText(){
	const params = {
	content: "",
	response_type: "html",
	request_type: "html",
	fixation: "1",
  saccade: "10"
};
	const encodedParams = new URLSearchParams(Object.entries(params)).toString();

	console.log(encodedParams);


	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com',
			'X-RapidAPI-Key': 'a3905a4f1bmshe4f8491817bfe99p16f93djsn524e64b46ca7'
		},
		body: encodedParams
	};

	fetch('https://bionic-reading1.p.rapidapi.com/convert', options)
		.then(response => response.text())
		.then(data => console.log(data))

		.catch(err => console.error(err));
return(<span></span>);
}

function Logo(){

	return(
		<span>
		<a href="/" >
	<img  id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/schidtcoLogo.png"/>
		</a>

		<div id="nav" class="nav">
		<a href="#/cars" ><b class="b bionic">Car</b>s </a>
		<a href="#/usa"> <b class="b bionic">US</b>A </a>
		<a href="#/ppl"> <b class="b bionic">Peop</b>le</a>
		<a href="#/out"> <b class="b bionic">Outsi</b>de</a>

		</div>
		</span>
);
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
