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

	if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
		document.body.style.backgroundColor = "#F0C0C9";
		document.getElementById("footer").style.opacity = "75%";
	} else {
		document.body.style.backgroundColor = "#d8e8ef";
		document.getElementById("footer").style.opacity = "0%";

	}
	if (document.body.scrollTop > 22000 || document.documentElement.scrollTop > 22000) {
		document.getElementById("footer").style.opacity = "75%";
	} else {
		document.getElementById("footer").style.opacity = "0%";

	}

}


function App() {


	return (

<span>
<Logo/>
<Footer/>
<StandardImageList/>

</span>

	);

}


function Logo(){
	return(
		<a href="https://schidt.co">
	<img id="TitleLogo" alt="Schidt.co Logo" src="https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/logos/schidtcoLogo.png"/>
	</a>
);
}

function Footer(){
	return(
<div id="footer">
<span style={{backgroundColor: "#d8e8ef"}}>
natepsacc@gmail.com, @schidtery, @schidt.co
<br/>Schidt.co is a Web3 site.
</span>
</div>
);
}

export default App;
