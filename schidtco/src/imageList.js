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
              />
       </ImageListItem>
     ))}
   </Box>
 </ThemeProvider>

      );
}





const itemData = [
  {
    img: 'https://i.ibb.co/vzyp5wG/a7exp-2.jpg',
    title: 'Couple on an Oregon Beach',
  },
  {
    img: 'https://i.ibb.co/JBrVY6Z/a7exp-4.jpg',
    title: '325I',
  },
  {
    img: 'https://i.ibb.co/WnRg42m/a7exp-1-2.jpg',
    title: 'My Well Dressed Neighbor',
  },
  {
    img: 'https://i.ibb.co/vVM956D/a7exp-1-9.jpg',
    title: 'Nick at Brain Sweat Practice',
  },

  {
    img: 'https://i.ibb.co/qx9GkP4/a7exp-1-3.jpg',
    title: 'Nice House',
  },
  {
    img: 'https://i.ibb.co/HH6qYK5/a7exp-1-2.jpg',
    title: 'Washington Beach',
  },
  {
    img: 'https://i.ibb.co/sVNMkKb/a7exp-1-7.jpg',
    title: 'Near Devils Gulch',
  },
  {
    img: 'https://i.ibb.co/LhjP0Wm/a7exp-1-4.jpg',
    title: 'Mary and Chevy',
  },
  {
    img: 'https://i.ibb.co/hgtvbgW/a7exp-1.jpg',
    title: 'Nick at Practice',
  },
  {
    img: 'https://i.ibb.co/qFLHW9c/a7exp-1.jpg',
    title: 'Bunny',
  },
  {
    img: 'https://i.ibb.co/qJGVTm6/a7exp-6.jpg',
    title: 'Nick at Brain Sweat Practice',
  },

  {
    img: 'https://i.ibb.co/4s7Dx0f/a7exp-1.jpg',
    title: 'SUNDAY',
  },
  {
    img: 'https://i.ibb.co/4Y76X5Q/a7exp-1-10-copy.jpg',
    title: 'Isaac and his Honda',
  },
  {
    img: 'https://i.ibb.co/gy5brHS/a7exp-1-7.jpg',
    title: 'Early Morning Merc',
  },
  {
    img: 'https://i.ibb.co/7bmBYcN/ian-4.jpg',
    title: 'Ian 1',
  },
  {
    img: 'https://i.ibb.co/Y8g5G64/a7exp-1-3.jpg',
    title: 'Earl Morning Pink Wagon',
  },

  {
    img: 'https://i.ibb.co/JKSYS80/a7exp-1-6.jpg',
    title: 'BHAMBAY',
  },
  {
    img: 'https://i.ibb.co/8zxBxWD/a7exp-1-16.jpg',
    title: 'SUNDAY AGAIN',
  },

  {
    img: 'https://i.ibb.co/F3wGF3p/kleo-10-19.jpg',
    title: 'Halloween',
  },
  {
    img: 'https://i.ibb.co/nbF26dY/a7exp-1-9.jpg',
    title: 'Surfer 1',
  },
  {
    img: 'https://i.ibb.co/FhBmJcy/a7exp-1-8.jpg',
    title: 'Surfer 2',
  },
  {
    img: 'https://i.ibb.co/Vw91rnW/a7exp-3-3.jpg',
    title: 'Docs at Brain Sweat practice',
  },
  {
    img: 'https://i.ibb.co/ggkhGgx/a7exp-1-2c.jpg',
    title: 'Chevys Night',
  },
  {
    img: 'https://i.ibb.co/3zQM4Qw/a7exp-1-13.jpg',
    title: 'Private Beach 1',
  },
  {
    img: 'https://i.ibb.co/PmDh5dk/a7exp-1-14.jpg',
    title: 'Private Beach 2',
  },
  {
    img: 'https://i.ibb.co/WFwfHMM/a7exp-1-15.jpg',
    title: 'Private Beach 3',
  },
  {
         img: 'https://i.ibb.co/5T7jFxM/a7exp-1-7.jpg',
         title: 'WINNER',
       },
  {
    img: 'https://i.ibb.co/CPvnwCx/a7exp-1-10.jpg',
    title: 'How Their House Looks',
  },
  {
    img: 'https://i.ibb.co/pr7yTXd/a7exp-1-4.jpg',
    title: 'LUNG',
  },  {
      img: 'https://i.ibb.co/XyQh7Gp/a7exp-2.jpg',
      title: 'HONDA',
    },
    {
      img: 'https://i.ibb.co/wYSgKvr/a7exp-1-10-copy-2.jpg',
      title: 'HONDA 2',
    },
  {
    img: 'https://i.ibb.co/MDPJJsL/a7exp-1-6.jpg',
    title: 'Edging Winter',
  },
  {
    img: 'https://i.ibb.co/W0cQkW6/a7exp-1-5.jpg',
    title: 'Edging Winter',
  },
  {
    img: 'https://i.ibb.co/Vw5khmP/a7exp-1-11.jpg',
    title: 'Morning',
  },
  {
    img: 'https://i.ibb.co/SrQ0JTh/qs-HDR-1-3.jpg',
    title: 'Explorer',
  },
  {
    img: 'https://i.ibb.co/r51Ctbr/a7exp-1-7.jpg',
    title: 'PCH',
  },
  {

    img: 'https://i.ibb.co/Kj2xLBQ/bitch-9-2.jpg',
    title: 'Feb. Whatcom Falls',
  },
  {
         img: 'https://i.ibb.co/YRVTsB2/a7exp-3.jpg',
         title: 'caddy',
       },
{
  img: 'https://i.ibb.co/m81QCXf/a7exp-8.jpg',
  title: 'Vail, Co. Patriot',
},
  {
    img: 'https://i.ibb.co/WxjK4br/bitch-10-2.jpg',
    title: 'Feb. Whatcom Falls',
  },
  {
    img: 'https://i.ibb.co/jvh1VPZ/a7exp-1-5.jpg',
    title: 'Morning Volvo',
  },
  {
    img: 'https://i.ibb.co/BqM3qmS/bitch-7.jpg',
    title: 'Whatcom Falls',
  },
  {
    img: 'https://i.ibb.co/hZtC6Rz/a7exp-1.jpg',
    title: 'Morning',
  },
  {
    img: 'https://i.ibb.co/vJncm9G/schidtcomo.jpg',
    title: 'Schidt Company Experiments',
  },
  {
    img: 'https://i.ibb.co/rbrtp1n/a7exp-1-5-2.jpg',
    title: 'R&D AGAIN',
  },
  {
    img: 'https://i.ibb.co/3SmnJkD/schidtcomo2.jpg',
    title: 'Schidt Company Experiments',
  },
  {
      img: 'https://i.ibb.co/372QNKZ/twotwotwo.jpg',
      title: 'Schidt Company R&D',
    },
    {
      img: 'https://i.ibb.co/X3qSkrv/integalactic1.jpg',
      title: 'R&D',
    },

    {
          img: 'https://i.ibb.co/9w3bMvS/a7exp-3-2.jpg',
          title: 'Co. Glowies',
        },
    {
          img: 'https://i.ibb.co/s1VpGTR/a7exp-1-5.jpg',
          title: 'Co. Church',
        },
{
      img: 'https://i.ibb.co/C054dL3/a7exp-15.jpg',
      title: 'Xmas in Vail',
    },
        {
              img: 'https://i.ibb.co/vX4hj3T/a7exp-1-42.jpg',
              title: 'Wyoming Cemetery',
            },    {
                  img: 'https://i.ibb.co/b26rVBD/qs-HDR-1-2.jpg',
                  title: 'Gloomy Cow',
                },
    {
      img: 'https://i.ibb.co/T09ypP5/qs-HDR-1-2-4.jpg',
      title: 'Gloomy Cow 2',
    },
    {
      img: 'https://i.ibb.co/9hP7vYn/shroom1.jpg',
      title: 'Shroom',
    },
    {
      img: 'https://i.ibb.co/Gnr6qpS/qs-HDR-1-2-5s.jpg',
      title: 'Trail',
    },

    {
      img: 'https://i.ibb.co/fHwDZBX/ian-6.jpg',
      title: 'Ian 2',
    },
    {
      img: 'https://i.ibb.co/qkNTfMS/bitch-15.jpg',
      title: 'Trail',
    },
    {
      img: 'https://i.ibb.co/QKbScfg/bitch-8.jpg',
      title: 'Trail',
    },
    {
      img: 'https://i.ibb.co/k3tkVtt/BPIG1220-1-5.jpg',
      title: 'BPig 1',
    },    {
          img: 'https://i.ibb.co/qgXvZmx/BPIG1220-1.jpg',
          title: 'Bpig 2',
        },    {
              img: 'https://i.ibb.co/3y8PLm4/BPIG1220-3-3.jpg',
              title: 'BPig 3',
            },

];
