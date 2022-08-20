import React, { useRef, useEffect, useState } from 'react';
const TimeImage = () => {
  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  setInterval(() => {
     document.getElementById('overimage').style.left= getRandom(0, 1720)+'px'; // 👈🏼 Horizontally
     document.getElementById('overimage').style.top = getRandom(0, 1080)+'px'; // 👈🏼 Vertically

  }, 500);
return(
  <>
  <img id='overimage' src='https://i.imgur.com/Q0InM8M.png'  alt=""/>

  </>
)
}


export default TimeImage
