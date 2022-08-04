import React from 'react';
import ReactDOM from 'react-dom';
import AnimatedText from 'react-animated-text-content';



function AnitextName(){
  return(
    <>
    <h1>

<AnimatedText
type='words'
    interval={0.04}
    duration={0.75}
    animation={{
      y: '200px',
      ease: 'ease-in-out',
    }}
> ~//Nathan Schmidt
</AnimatedText>
</h1>

</>
)
}

function AnitextDesc(){
  return(
    <>
<AnimatedText
type='words'
    interval={0.04}
    duration={0.75}
    animation={{
      y: '200px',
      ease: 'ease-in-out',
    }}
>
artist and web dev based in NYC
</AnimatedText>
</>
)}
export { AnitextName, AnitextDesc};
