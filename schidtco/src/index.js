import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';

class MainC extends React.Component {
render(){
const imgSrc = ('https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/smaller.jpg');

	return (
<div id="inline" >
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

ReactDOM.render(
  <MainC />,
  document.getElementById('root')
);

