import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';

function App() {

const imgSrc = ('https://ipfs.fleek.co/ipfs/bafybeigpoau2agx6fhtonqhg5jhwrdiyf3bh6xmmttxsnwwana5t4ptxay');
const bgImgSrc = ("https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/a7exp-1-4.jpg");
const imgSrctwo = ('https://ipfs.fleek.co/ipfs/bafybeiabextbxlt3j737i5gtz4hrndi6qx5xniyrd5mmrfp66xk6kosuyy');
const imgSrcthree = ('https://storageapi2.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/pictures/a7exp-6SM.jpg');
const { colors } = useImageColor(imgSrcthree, { colors: 8, cors: true, format: 'hex' });

if (colors) {
	document.body.style.backgroundColor = colors[5];
document.getElementById("mImageDesc").style.backgroundColor=colors[2];
document.getElementById("sImageDesc").style.backgroundColor=colors[6];	
document.getElementById("schidtco").style.color = colors[6];
};

	return (
<div id="everything"  >
	<div id="schidtco">
		<h2>schidt.coschidt.co </h2>
		<h2>schidt.co</h2>
	</div>
		<div id="centerDiv">
		 <img id="mainImage" alt="ipfsimage"  src={imgSrc}/>
		<img id="secondImage" alt="oneone.NFT" src = {imgSrctwo}/>		
</div>
		<div id="mImageDesc">
			<h1>this file is hosted on IPFS</h1>
			<p> The link to the container is <a href={imgSrc}> {imgSrc} </a></p> 
		</div>
		
		<div id="sImageDesc">
			<h1> The "oneone" NFT </h1>
			<p> you can find this NFT at <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/74259885797976302502674132165496475269072232986873656617916806000697891880961/"> https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/74259885797976302502674132165496475269072232986873656617916806000697891880961/</a></p>

    <nft-card
    contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
    tokenId="74259885797976302502674132165496475269072232986873656617916806000697891880961">
    </nft-card>
    <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>

		</div> 
</div>
	);

}

export default App;
