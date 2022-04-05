import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';



function App() {

render(){

const imgSrc = ('https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/smaller.jpg');
const bgImgSrc = ("https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/a7exp-1-4.jpg");
const { colors } = useImageColor(bgImgSrc, { colors: 5, cors: true, format: 'hex' });

if (colors) {
	console.log(colors);
}

	return (
<div id="everything" >
	<img id="bgImg" alt="backgroundImg" src={bgImgSrc}/>
		<div id="centerDiv">
		 <img id="mainImage" alt="ipfsimage"  src={imgSrc}/>
		</div>
		<div id="mImageDesc">
			<h1>this file is hosted on IPFS</h1>
			<p> The link to the container is <a href={imgSrc}> {imgSrc} </a> </p>
		</div>
</div>
	);
	}
}

