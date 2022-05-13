import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';
import StandardImageList from './imageList.js';


function App() {


const imgSrcthree = ('https://storageapi2.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/a7exp-6SM.jpg');
const { colors } = useImageColor(imgSrcthree, { colors: 8, cors: true, format: 'hex' });


	return (

<div id="everything" >
<StandardImageList/>

</div>
	);

}

export default App;
