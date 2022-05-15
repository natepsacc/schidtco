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
  } else {
    document.getElementById("TitleLogo").style.height = "20vh";
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
	<StandardImageList tag="all"/>
	</span>
);
}
function Cars(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="CAR"/>
	</span>
);
}
function USA(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="USA"/>
	</span>
);
}
function Ppl(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="ppl"/>
	</span>
);
}
function Out(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="out"/>
	</span>
);
}
function App() {


	return (
		<span>

		<Routes>
       <Route path='/cars' element={<Cars />} />
       <Route path='/' element={<Home />} />
			 <Route path='/usa' element={<USA />} />
			 <Route path='/ppl' element={<Ppl />} />
			 <Route path='/out' element={<Out />} />

    </Routes>
</span>

	);

}








function Logo(){

	return(
		<span>
		<a href="/" >
	<img  id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/schidtcoLogo.png"/>
		</a>

		<div class="nav">
		<a href="/cars" >Cars</a>
		<a href="/usa"> USA</a>
		<a href="/ppl"> People</a>
		<a href="/out"> Outside</a>

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
<br/>i hope mark zuclerberg dies very soon.  ReactJS is cancer, the most aids way to do anytinh
</span>
</div>
);
}

export default App;
