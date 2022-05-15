import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Box from '@mui/material/Box';
import imageListItemClasses from "@material-ui/core/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 350,
      tablet: 650,
      desktop: 1000
    }
  }
});

export default function StandardImageList(props) {


  let sort = itemData.filter((element) => {
      if (element.tag === props.tag) {
          return element;
      }
      if (element.tag2 === props.tag) {
          return element;
      }
      else{

      }
      if (props.tag === "all"){
        return itemData
      }
  });

  console.log(sort);



      return (
      <ThemeProvider theme={theme}>
   <Box
     sx={{
       height: {
         mobile: "600px",
         bigMobile: "600px",
         tablet: "900px",
         desktop: "900px"
       },
       display: "grid",
       gridTemplateColumns: {
         mobile: "repeat(1, 100%)",
         bigMobile: "repeat(1, 100%)",
         tablet: "repeat(2, 50%)",
         desktop: "repeat(2, 50%)"
       },
       [`& .${imageListItemClasses.root}`]: {
         display: "flex",
         flexDirection: "column"
       }
     }}
   >
     {sort.map((item) => (
       <ImageListItem key={item.img} id="height">
         <img
           src={`${item.img}`}
           srcSet={`${item.img}w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
           alt={item.title}
           loading="lazy"
              />
       </ImageListItem>
     ))}
   </Box>
 </ThemeProvider>

      );
}




const itemData = [
  {
    img: 'https://i.imgur.com/rBvylVO.jpg',
    title: 'Couple on an Oregon Beach',
    tag: 'USA',
  },
  {
    img: 'https://i.imgur.com/9rf7Rto.jpg',
    title: '325I',
    tag: 'CAR',
  },
  {
    img: 'https://i.imgur.com/MZqh1kU.jpg',
    title: 'My Well Dressed Neighbor',
    tag: 'ppl',
  },
  {
    img: 'https://i.imgur.com/a5o0zro.jpg',
    title: 'Nick at Brain Sweat Practice',
    tag: 'ppl',
  },

  {
    img: 'https://i.imgur.com/6JEQOoq.jpg',
    title: 'Nice House',
    tag: 'USA',

  },
  {
    img: 'https://i.imgur.com/1XZe0Vm.jpg',
    title: 'Washington Beach',
    tag: 'USA',

  },
  {
    img: 'https://i.imgur.com/VwupETD.jpg',
    title: 'Near Devils Gulch',
    tag: 'USA',

  },
  {
    img: 'https://i.imgur.com/Gila5Ll.jpg',
    title: 'Mary and Chevy',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/Ratasd3.jpg',
    title: 'Nick at Practice',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/HuIWMCV.jpg',
    title: 'Bunny',
    tag: 'CAR',

  },
  {
    img: 'https://i.imgur.com/FPZnn0t.jpg',
    title: 'Nick at Brain Sweat Practice',
    tag: 'ppl',

  },

  {
    img: 'https://i.imgur.com/JvRhPS4.jpg',
    title: 'SUNDAY',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/sl1CUwB.jpg',
    title: 'Isaac and his Honda',
    tag: 'CAR',
    tag: 'ppl',


  },
  {
    img: 'https://i.imgur.com/EUWHrkj.jpg',
    title: 'Early Morning Merc',
    tag: 'CAR',

  },
  {
    img: 'https://i.imgur.com/j8dCHXg.jpg',
    title: 'Ian 1',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/HdRd0mx.jpg',
    title: 'Earl Morning Pink Wagon',
    tag: 'CAR',

  },

  {
    img: 'https://i.imgur.com/5ulDYpX.jpg',
    title: 'BHAMBAY',
    tag: 'USA',

  },
  {
    img: 'https://i.imgur.com/pCosJIP.jpg',
    title: 'SUNDAY AGAIN',
    tag: 'out',


  },

  {
    img: 'https://i.imgur.com/TZEhq50.jpg',
    title: 'KV 10/19',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/vzENpQu.jpg',
    title: 'Surfer 1',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/tH38LlF.jpg',
    title: 'Surfer 2',
    tag: 'ppl',

  },
  {
    img: '  https://i.imgur.com/hy9rxg6.jpg',
    title: '(s)explorer on the beach',
    tag: 'CAR',

  },
  {
    img: 'https://i.imgur.com/pnbVTTH.jpg',
    title: 'Docs at Brain Sweat practice',
    tag: 'product',

  },
  {
    img: '  https://i.imgur.com/56ZvGbQ.jpg',
    title: 'DustStorm On the Beach',
    tag: 'CAR',
    tag: 'out',


  },
  {
    img: 'https://i.imgur.com/ga6th2f.jpg',
    title: 'Chevys Night',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/XqvOrwn.jpg',
    title: 'Private Beach 1',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/VlvIvqf.jpg',
    title: 'Private Beach 2',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/SC3aehM.jpg',
    title: 'Private Beach 3',
    tag: 'out',

  },
  {
    img: '  https://i.imgur.com/LKLy1bu.jpg',
    title: 'CO Matte Merc',
    tag: 'CAR',
    tag2: 'USA',


  },
  {
         img: 'https://i.imgur.com/iFhaZFG.jpg',
         title: 'WINNER',
         tag: 'ppl',

       },
  {
    img: 'https://i.imgur.com/87prjQf.jpg',
    title: 'How Their House Looks',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/MCGQ7GF.jpg',
    title: 'LUNG',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/SnNIDl1.jpg',
    title: 'Corner Office',
    tag: 'out',
    tag2: "USA",
    tag3: "bldng"

  },
  {
    img: 'https://i.imgur.com/lpKGwa5.jpg',
    title: 'PNW',
    tag: 'out',
    tag2: "USA",

  },
  {
      img: 'https://i.imgur.com/5AjGztW.jpg',
      title: 'HONDA',
      tag: 'CAR',

    },
    {
      img: 'https://i.imgur.com/BXb3XQD.jpeg',
      title: 'HONDA 2',
      tag: 'CAR',

    },
  {
    img: 'https://i.imgur.com/QwFu0yo.jpg',
    title: 'Edging Winter',
    tag: 'CAR',
    tag2: 'out',

  },
  {
    img: 'https://i.imgur.com/BjFPGAA.jpg',
    title: 'WarmFloor Flowers',
    tag: 'out',

  },



  {
    img: 'https://i.imgur.com/9xCk0Ia.jpg',
    title: 'Navy',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/bzd2Y4T.jpg',
    title: 'Twin Sisters?',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/HJUFpJ4.jpg',
    title: 'McDongals',
    tag: 'out',
    tag2: "USA"

  },
  {
    img: 'https://i.imgur.com/HcJnmcA.jpg',
    title: 'beach again',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/6sAwkYg.jpg',
    title: 'waterfall',
    tag: 'out',
    tag2: 'USA',


  },



  {
    img: 'https://i.imgur.com/lwVyOMr.jpg',
    title: 'Morning',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/9KcJuJM.jpg',
    title: 'Explorer',
    tag: 'CAR',

  },
  {
    img: 'https://i.imgur.com/PMNcCtk.jpg',
    title: 'PCH',
    tag: 'out',

  },
  {

    img: 'https://i.imgur.com/WIWGPru.jpg',
    title: 'Feb. Whatcom Falls',
    tag: 'out',

  },
  {
         img: 'https://i.imgur.com/zZlxplW.jpg',
         title: 'caddy',
         tag: 'CAR',

       },
{
  img: 'https://i.imgur.com/pVbtOgH.jpg',
  title: 'Whatcom Falls teva bag',
  tag: 'out',

},
{
  img: 'https://i.imgur.com/xfa3AMV.jpg',
  title: 'Glacier, Co. An hour from rolling my truck:)',
  tag: 'out',

},
{
  img: 'https://i.imgur.com/iH4cllZ.jpg',
  title: '(s)explorer on the beach',
  tag: 'out',
  tag2: 'CAR',

},
  {
    img: 'https://i.imgur.com/TsjhqGN.jpg',
    title: 'Feb. Whatcom Falls',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/tPPXwwe.jpg',
    title: 'Morning Volvo',
    tag: 'out',
    tag2: 'CAR',

  },
  {
    img: 'https://i.imgur.com/1RYHhT8.jpg',
    title: 'Whatcom Falls',
    tag: 'out',

  },
  {
    img: 'https://i.imgur.com/JUUxiPu.jpg',
    title: 'Morning',
    tag: 'out',

  },
  {
    img: '  https://i.imgur.com/zmlgVEP.jpg',
    title: 'Mother and child',
    tag: 'ppl',

  },
  {
    img: 'https://i.imgur.com/qiAHwaG.jpg',
    title: 'Schidt Company Experiments',
    tag: 'CAR',
    tag2: 'RAD',


  },
  {
    img: 'https://i.imgur.com/r9CqzKf.jpg',
    title: 'R&D AGAIN',
    tag: 'RAD',

  },
  {
    img: 'https://i.imgur.com/DrihU0V.jpg',
    title: 'Schidt Company Experiments',
    tag: 'CAR',
    tag2: 'RAD',

  },
  {
      img: 'https://i.imgur.com/k9WluBF.jpg',
      title: 'Schidt Company R&D',
      tag: 'CAR',
      tag2: 'RAD',
    },
    {
      img: 'https://i.imgur.com/Gm11VkA.jpg',
      title: 'R&D',
      tag2: 'RAD',
    },
    {
      img: '    https://i.imgur.com/lr4RSXV.jpg',
      title: 'Cannon Beach',
      tag: 'out',

    },
    {
          img: 'https://i.imgur.com/jctrv8O.jpg',
          title: 'Co. Glowies',
          tag: 'out',
        },
    {
          img: 'https://i.imgur.com/l7i0spw.jpg',
          title: 'Co. Church',
          tag: 'out',
        },
{
      img: 'https://i.imgur.com/oYcYdNI.jpg',
      title: 'Xmas in Vail',
      tag: 'out',
    },
        {
              img: 'https://i.imgur.com/8SKjIr2.jpg',
              title: 'Wyoming Cemetery',
              tag: 'out',
            },    {
                  img: 'https://i.imgur.com/BwzvIM5.jpg',
                  title: 'Gloomy Cow',
                  tag: 'out',
                },
    {
      img: 'https://i.imgur.com/MOezplS.jpg',
      title: 'Gloomy Cow 2',
      tag: 'out',
    },
    {
      img: 'https://i.imgur.com/3fG3mfq.jpg',
      title: 'Shroom',
      tag: 'out',
    },
    {
      img: 'https://i.imgur.com/3FGCzcl.jpg',
      title: 'theatre',
      tag: 'out',
    },
    {
      img: 'https://i.imgur.com/o5Dy82p.jpg',
      title: 'Trail',
      tag: 'out',
    },

    {
      img: 'https://i.imgur.com/zrYdXWS.jpg',
      title: 'Ian 2',
      tag: 'ppl',

    },
    {
      img: 'https://i.imgur.com/EWpUfVK.jpg',
      title: 'milky',
      tag: 'out',
    },
    {
      img: 'https://i.imgur.com/GPHEKLk.jpg',
      title: 'Trail',
      tag: 'out',
      tag2: 'ppl',

    },
    {
      img: 'https://i.imgur.com/L0g5AYj.jpg',
      title: 'BPig 1',
      tag: 'ppl',

    },    {
          img: 'https://i.imgur.com/14molmO.jpg',
          title: 'Bpig 2',
          tag: 'ppl',

        },    {
              img: 'https://i.imgur.com/Jh8CxOV.jpg',
              title: 'BPig 3',
              tag: 'product',

            },





                        {
                          img: 'https://i.imgur.com/Cn7vbEZ.jpg',
                          title: 'BakerPark1',
                          tag: 'out',
                          tag2: 'USA',
                        },
                        {
                          img: 'https://i.imgur.com/vqKSBO6.jpg',
                          title: 'BakerPark Dec Road',
                          tag: 'out',
                          tag2: 'USA',
                        },
                        {
                          img: 'https://i.imgur.com/YfM4L0I.jpg',
                          title: 'BakerPark3',
                          tag: 'out',
                          tag2: 'USA',
                        },
                        {
                          img: 'https://i.imgur.com/ytWRZzk.jpg',
                          title: 'BakerParkLine',
                          tag: 'out',
                          tag2: 'USA',

                        },
                        {
                          img: 'https://i.imgur.com/TAFwudk.jpg',
                          title: 'BakerParkLine',
                          tag: 'out',
                          tag2: 'USA',

                        },

];
