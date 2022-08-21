import React, { useRef, useEffect, useState } from 'react';
const TimeImage = () => {
  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  setInterval(() => {
     document.getElementById('overimage').style.left= getRandom(0, 100)+'vw'; // 👈🏼 Horizontally
     document.getElementById('overimage').style.top = getRandom(0, 100)+'vh'; // 👈🏼 Vertically

  }, 4000);
return(
  <>
  <img id='overimage' src='https://i.imgur.com/Q0InM8M.png'  alt=""/>

  </>
)
}


export default TimeImage
