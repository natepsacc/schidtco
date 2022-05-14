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
export default function StandardImageList() {
    return (
      <ThemeProvider theme={theme}>
   <Box
     sx={{
       height: "900px",
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
     {itemData.map((item) => (
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
  },
  {
    img: 'https://i.imgur.com/9rf7Rto.jpg',
    title: '325I',
  },
  {
    img: 'https://i.imgur.com/MZqh1kU.jpg',
    title: 'My Well Dressed Neighbor',
  },
  {
    img: 'https://i.imgur.com/5T0538n.jpg',
    title: 'Nick at Brain Sweat Practice',
  },

  {
    img: 'https://i.imgur.com/6JEQOoq.jpg',
    title: 'Nice House',
  },
  {
    img: 'https://i.imgur.com/1XZe0Vm.jpg',
    title: 'Washington Beach',
  },
  {
    img: 'https://i.imgur.com/VwupETD.jpg',
    title: 'Near Devils Gulch',
  },
  {
    img: 'https://i.imgur.com/Gila5Ll.jpg',
    title: 'Mary and Chevy',
  },
  {
    img: 'https://i.imgur.com/Ratasd3.jpg',
    title: 'Nick at Practice',
  },
  {
    img: 'https://i.imgur.com/HuIWMCV.jpg',
    title: 'Bunny',
  },
  {
    img: 'https://i.imgur.com/FPZnn0t.jpg',
    title: 'Nick at Brain Sweat Practice',
  },

  {
    img: 'https://i.imgur.com/JvRhPS4.jpg',
    title: 'SUNDAY',
  },
  {
    img: 'https://i.imgur.com/sl1CUwB.jpg',
    title: 'Isaac and his Honda',
  },
  {
    img: 'https://i.imgur.com/EUWHrkj.jpg',
    title: 'Early Morning Merc',
  },
  {
    img: 'https://i.imgur.com/j8dCHXg.jpg',
    title: 'Ian 1',
  },
  {
    img: 'https://i.imgur.com/HdRd0mx.jpg',
    title: 'Earl Morning Pink Wagon',
  },

  {
    img: 'https://i.imgur.com/5ulDYpX.jpg',
    title: 'BHAMBAY',
  },
  {
    img: 'https://i.imgur.com/pCosJIP.jpg',
    title: 'SUNDAY AGAIN',
  },

  {
    img: 'https://i.imgur.com/TZEhq50.jpg',
    title: 'KV 10/19',
  },
  {
    img: 'https://i.imgur.com/vzENpQu.jpg',
    title: 'Surfer 1',
  },
  {
    img: 'https://i.imgur.com/tH38LlF.jpg',
    title: 'Surfer 2',
  },
  {
    img: '  https://i.imgur.com/hy9rxg6.jpg',
    title: '(s)explorer on the beach',
  },
  {
    img: 'https://i.imgur.com/pnbVTTH.jpg',
    title: 'Docs at Brain Sweat practice',
  },
  {
    img: '  https://i.imgur.com/56ZvGbQ.jpg',
    title: 'DustStorm On the Beach',
  },
  {
    img: 'https://i.imgur.com/ga6th2f.jpg',
    title: 'Chevys Night',
  },
  {
    img: 'https://i.imgur.com/XqvOrwn.jpg',
    title: 'Private Beach 1',
  },
  {
    img: 'https://i.imgur.com/VlvIvqf.jpg',
    title: 'Private Beach 2',
  },
  {
    img: 'https://i.imgur.com/SC3aehM.jpg',
    title: 'Private Beach 3',
  },
  {
    img: '  https://i.imgur.com/LKLy1bu.jpg',
    title: 'CO Matte Merc',
  },
  {
         img: 'https://i.imgur.com/iFhaZFG.jpg',
         title: 'WINNER',
       },
  {
    img: 'https://i.imgur.com/87prjQf.jpg',
    title: 'How Their House Looks',
  },
  {
    img: 'https://i.imgur.com/MCGQ7GF.jpg',
    title: 'LUNG',
  },  {
      img: 'https://i.imgur.com/5AjGztW.jpg',
      title: 'HONDA',
    },
    {
      img: 'https://i.imgur.com/BXb3XQD.jpeg',
      title: 'HONDA 2',
    },
  {
    img: 'https://i.imgur.com/QwFu0yo.jpg',
    title: 'Edging Winter',
  },
  {
    img: 'https://i.imgur.com/BjFPGAA.jpg',
    title: 'Edging Winter',
  },
  {
    img: 'https://i.imgur.com/lwVyOMr.jpg',
    title: 'Morning',
  },
  {
    img: 'https://i.imgur.com/9KcJuJM.jpg',
    title: 'Explorer',
  },
  {
    img: 'https://i.imgur.com/PMNcCtk.jpg',
    title: 'PCH',
  },
  {

    img: 'https://i.imgur.com/WIWGPru.jpg',
    title: 'Feb. Whatcom Falls',
  },
  {
         img: 'https://i.imgur.com/zZlxplW.jpg',
         title: 'caddy',
       },
{
  img: 'https://i.imgur.com/pVbtOgH.jpg',
  title: 'Vail, Co. Patriot',
},
{
  img: 'https://i.imgur.com/xfa3AMV.jpg',
  title: 'Glacier, Co. An hour from rolling my truck:)',
},
{
  img: 'https://i.imgur.com/iH4cllZ.jpg',
  title: '(s)explorer on the beach',
},
  {
    img: 'https://i.imgur.com/TsjhqGN.jpg',
    title: 'Feb. Whatcom Falls',
  },
  {
    img: 'https://i.imgur.com/tPPXwwe.jpg',
    title: 'Morning Volvo',
  },
  {
    img: 'https://i.imgur.com/1RYHhT8.jpg',
    title: 'Whatcom Falls',
  },
  {
    img: 'https://i.imgur.com/JUUxiPu.jpg',
    title: 'Morning',
  },
  {
    img: '  https://i.imgur.com/zmlgVEP.jpg',
    title: 'Mother and child',
  },
  {
    img: 'https://i.imgur.com/qiAHwaG.jpg',
    title: 'Schidt Company Experiments',
  },
  {
    img: 'https://i.imgur.com/r9CqzKf.jpg',
    title: 'R&D AGAIN',
  },
  {
    img: 'https://i.imgur.com/DrihU0V.jpg',
    title: 'Schidt Company Experiments',
  },
  {
      img: 'https://i.imgur.com/k9WluBF.jpg',
      title: 'Schidt Company R&D',
    },
    {
      img: 'https://i.imgur.com/Gm11VkA.jpg',
      title: 'R&D',
    },
    {
      img: '    https://i.imgur.com/lr4RSXV.jpg',
      title: 'Cannon Beach',
    },
    {
          img: 'https://i.imgur.com/jctrv8O.jpg',
          title: 'Co. Glowies',
        },
    {
          img: 'https://i.imgur.com/l7i0spw.jpg',
          title: 'Co. Church',
        },
{
      img: 'https://i.imgur.com/oYcYdNI.jpg',
      title: 'Xmas in Vail',
    },
        {
              img: 'https://i.imgur.com/8SKjIr2.jpg',
              title: 'Wyoming Cemetery',
            },    {
                  img: 'https://i.imgur.com/BwzvIM5.jpg',
                  title: 'Gloomy Cow',
                },
    {
      img: 'https://i.imgur.com/MOezplS.jpg',
      title: 'Gloomy Cow 2',
    },
    {
      img: 'https://i.imgur.com/3fG3mfq.jpg',
      title: 'Shroom',
    },
    {
      img: 'https://i.imgur.com/3FGCzcl.jpg',
      title: 'theatre',
    },
    {
      img: 'https://i.imgur.com/o5Dy82p.jpg',
      title: 'Trail',
    },

    {
      img: 'https://i.imgur.com/zrYdXWS.jpg',
      title: 'Ian 2',
    },
    {
      img: 'https://i.imgur.com/EWpUfVK.jpg',
      title: 'milky',
    },
    {
      img: 'https://i.imgur.com/GPHEKLk.jpg',
      title: 'Trail',
    },
    {
      img: 'https://i.imgur.com/L0g5AYj.jpg',
      title: 'BPig 1',
    },    {
          img: 'https://i.imgur.com/14molmO.jpg',
          title: 'Bpig 2',
        },    {
              img: 'https://i.imgur.com/Jh8CxOV.jpg',
              title: 'BPig 3',
            },

];
