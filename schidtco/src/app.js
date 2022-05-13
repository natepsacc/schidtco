import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';
import StandardImageList from './imageList.js';



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
	if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
		document.body.style.backgroundColor = "#d8e8ef";
	} else {
		document.body.style.backgroundColor = "#F0C0C9";
	}
	if (document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000) {
		document.body.style.backgroundColor = "#F0C0C9";
	} else {
		document.body.style.backgroundColor = "#d8e8ef";
	}
}


function App() {


	return (

<span>
<Logo/>
<StandardImageList/>

</span>
	);

}

function Menu(){

}
function Logo(){
	return(
		<a href="https://schidt.co">
	<img id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/schidtcoLogo.png"/>
	</a>
);
}


export default App;
