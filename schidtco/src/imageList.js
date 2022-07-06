import * as React from 'react';
import {useState} from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import { typography } from '@mui/system';
import imageListItemClasses from "@material-ui/core/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 300,
      tablet: 650,
      desktop: 1000
    }
  },
  palette: {
    background: {
      paper: 'rgba(0,0,0,0.2)'
    }}
});

export default function StandardImageList(props) {


  let sort = itemData.filter((element) => {
      if (element.tag === props.tag) {
          return element;
      }
      if (element.tag2 === props.tag) {
          return element;
      }
      if (element.text === 'text') {
  //      document.getElementsByClassName('imgsvg').append;
      }
      if (element.tag3 === 'noshow') {
          return !element;
      }

      else{

      }
      if (props.tag === "all"){
        return itemData
      }
  });

var gridNum = props.gridColumns;
console.log(gridNum);
const imageClick = (props) => {

  console.log('Click!!!!');
  window.open(props, '_self');

}
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => setClicked((prev) => !prev)
      return (

      <ThemeProvider theme={theme}>

   <Box
   onClick={toggleClicked}
     sx={{
       height: {
         mobile: clicked ? "35vh" : "600px",
         bigMobile: clicked ? "35vh" : "85vh",
         tablet: "100vh",
         desktop: "100vh"
       },
       display: "grid",
       gridTemplateColumns:{
         mobile: clicked ? 'repeat(2, 50%)' : 'repeat(1, 100%)',
         bigMobile: clicked ? 'repeat(2, 50%)' : 'repeat(1, 100%)',
         desktop: clicked ? 'repeat(1, 100%)' : 'repeat(2, 50%)',
       },
       [`& .${imageListItemClasses.root}`]: {
         display: "flex",
         flexDirection: "column"
       }
     }}
   >

     {sort.map((item) => (


       <ImageListItem
id='imgimg' key={item.img} id="height" sx={{m:0}}>

       <LazyLoadImage

          threshhold='1000'
           width="100%"
           height="inherit"
           onClick={() => imageClick(item.mSrc)}

             effect="blur"
            alt={item.title}
            src={item.img} // use normal <img> attributes as props
             placeholderSrc="https://i.imgur.com/4GdCjPE.gif"
             />



              <ImageListItemBar
              sx={{
                overflowWrap:"break-word",

                bgcolor:'background.paper',
                maxWidth: "100%",
                height: 'fit-content',
                width:'fit-content',
                textAlign: 'left',
                fontFamily: 'Courier New',
                fontSize: {
                  mobile: "1em",
                bigMobile: "1em",
                tablet: "12pt",
                desktop: "12pt"}
                  }}
            title={item.date}
            subtitle={item.title}

          />

       </ImageListItem>

     ))}


   </Box>
 </ThemeProvider>

      );
}




const itemData = [
  {
      img: 'https://i.imgur.com/fmPPB9x.jpg',
      title: 'hello!',
      date: '062022',
      tag: 'USA',
      tag2: 'ppl',
      mSrc: 'javascript:;',
  },
  {
     img: 'https://i.imgur.com/cXApT22.jpg',
     title: 'JULY4',
     tag: 'USA',
     tag2: 'ppl',
     date: '070422',
     mSrc: 'javascript:;',
 },{
        img: 'https://i.imgur.com/rBvylVO.jpg',
        title: 'Couple on an Oregon Beach',
        date: '011421',
        tag: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/9rf7Rto.jpg',
        title: '325I',
        date: '042922',
        tag: 'CAR',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/MZqh1kU.jpg',
        title: 'My Well Dressed Neighbor',
        date: '042822',
        mSrc: 'javascript:;',
        tag: 'ppl',
    },
    {
        img: 'https://i.imgur.com/rvmvcQG.jpg',
        title: 'Bay House',
        tag: 'USA',
        tag2: 'out',
        date: '031722',
        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/dyqjzFN.jpg',
        title: 'standard cemetery shot',
        tag: 'USA',
        tag2: 'out',
        date: '062322',
        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/c8tzEEd.jpg',
        title: 'Brain Sweating',
        date: '021022',
        mSrc: 'javascript:;',
        tag: 'ppl',
        tag3: 'prop0623',

    }, {
        img: 'https://i.imgur.com/6JEQOoq.jpg',
        title: 'House',
        tag: 'USA',
        tag2: 'out',
        date: '040322',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/1XZe0Vm.jpg',
        title: 'Washington Beach',
        tag: 'USA',
        date: '04**22',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/VwupETD.jpg',
        title: 'Near Devils Gulch',
        tag: 'USA',
        mSrc: 'javascript:;',
    },   {
        img: 'https://i.imgur.com/D0GwpcJ.jpg',
        title: 'BFJ',
        tag: 'USA',
        tag2: 'out',
        date: '062122',
        mSrc: 'javascript:;',
    },  {
        img: 'https://i.imgur.com/hWlrgwi.jpg',
        title: 'JULY4',
        tag: 'USA',
        tag2: 'out',
        date: '070422',
        mSrc: 'javascript:;',
    },
    {
       img: 'https://i.imgur.com/OUl0T1U.jpg',
       title: 'JULY4',
       tag: 'USA',
       tag2: 'out',
       date: '070422',
       mSrc: 'javascript:;',
   },

   {
        img: 'https://i.imgur.com/HuIWMCV.jpg',
        title: 'Bunny',
        tag: 'CAR',
        mSrc: 'javascript:;',
    }, {
            img: 'https://i.imgur.com/WNuttod.jpg',
            title: 'old man',
            date: '060822',

            tag: 'ppl',
            mSrc: 'javascript:;',
        }, {
        img: 'https://i.imgur.com/tLQQm3V.jpg',
        title: 'everything is blue',
        tag: 'USA',
        tag2: 'out',
        date: '031722',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/qqGyyD8.jpg',
        title: 'something future something',
        tag: 'out',
        date: '031722',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/JvRhPS4.jpg',
        title: 'SUNDAY',
        tag: 'ppl',
        tag2: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/sl1CUwB.jpg',
        title: 'Isaac and his Honda',
        tag: 'CAR',
        tag3: 'ppl',
        tag2: 'out',

        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/3FGCzcl.jpg',
        title: 'theatre',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/mGT3Af2.jpg',
        title: 'iScream',
        date: '062022',
        tag: 'USA',
        tag2: 'ppl',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/Xg7jSZT.jpg',
        title: 'Early Morning Merc',
        tag: 'CAR',
        tag2: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/ytWRZzk.jpg',
        title: 'BakerParkLine',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',

    },
    {
        img: '  https://i.imgur.com/ysehPfY.jpg',
        title: 'a beach somewhere',
        date: '011622',
        tag: 'out',
        tag2: '',
        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/HdRd0mx.jpg',
        title: 'Pink Wagon',
        tag: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/vo4QIdi.jpg',
        title: 'one eyed house',
        tag: 'USA',
        tag2: 'out',
        date: '031722',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/5ulDYpX.jpg',
        title: 'BHAMBAY',
        tag: 'USA',
        tag2: 'out',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/eyaaiS2.jpg',
        title: 'park lovers',
        tag: 'ppl',
        tag2: 'out',
        date: '031722',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/pCosJIP.jpg',
        title: 'SUNDAY AGAIN',
        tag: 'out',
        mSrc: 'javascript:;',

    },



    {
        img: 'https://i.imgur.com/vzENpQu.jpg',
        title: 'Surfer 1',
        tag: 'ppl',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/tH38LlF.jpg',
        title: 'Surfer 2',
        tag: 'ppl',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/hy9rxg6.jpg',
        title: '(s)explorer on the beach',
        tag: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/pnbVTTH.jpg',
        title: 'Docs',
        tag: 'product',
        tag3: 'prop0623',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/56ZvGbQ.jpg',
        title: 'DustStorm On the Beach',
        tag: 'CAR',
        tag2: 'out',

        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/0CQaUTT.jpg',
        title: 'beat up old k6',
        tag: 'USA',
        tag2: 'CAR',
        date: '031722',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/SySkfOF.jpg',
        title: 'old lady ice cream :-)',
        tag: 'ppl',
        tag2: 'out',
        tag3: 'USA',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/XqvOrwn.jpg',
        title: 'Private Beach 1',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/uM17zGb.jpg',
        title: 'wagon',
        tag: 'USA',
        tag2: 'CAR',
        date: '062022',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/VlvIvqf.jpg',
        title: 'Private Beach 2',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/SC3aehM.jpg',
        title: 'Private Beach 3',
        tag: 'out',
        mSrc: 'javascript:;',
    },

    {
        img: '  https://i.imgur.com/LKLy1bu.jpg',
        title: 'CO Matte Merc',
        tag: 'CAR',
        tag2: 'USA',

        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/BjFPGAA.jpg',
        title: 'WarmFloor Flowers',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/iFhaZFG.jpg',
        title: 'WINNER',
        tag: 'ppl',
        date: '011722',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/87prjQf.jpg',
        title: 'winter tennis',
        date: '021722',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/MCGQ7GF.jpg',
        title: 'LUNG',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/SnNIDl1.jpg',
        title: 'Corner Office',
        tag: 'out',
        tag2: "USA",
        tag3: "bldng",
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/lpKGwa5.jpg',
        title: 'PNW',
        tag: 'out',
        tag2: "USA",
        mSrc: 'javascript:;',
    },
    {
       img: 'https://i.imgur.com/xfa3AMV.jpg',
       title: 'Glacier, Wa. An hour from rolling my truck:)',
       tag: 'out',
       tag2: 'USA',
       mSrc: 'javascript:;',
   },
   {
       img: 'https://i.imgur.com/hXcuiCf.jpg',
       title: 'ILOVETHERANGERPLATFORM',
       tag: 'CAR',
       tag2: 'out',
       date: '070422',
       mSrc: 'javascript:;',
   },
    {
        img: 'https://i.imgur.com/5AjGztW.jpg',
        title: 'HONDA',
        tag: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/BXb3XQD.jpeg',
        title: 'HONDA 2',
        tag: 'CAR',
        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/B46CdlW.jpg',
        title: 'BFJ',
        tag: 'USA',
        tag2: 'out',
        date: '070322',
        mSrc: 'javascript:;',
    },  {
        img: 'https://i.imgur.com/QwFu0yo.jpg',
        title: 'Edging Winter',
        tag: 'CAR',
        tag2: 'out',
        mSrc: 'javascript:;',

    },
    {
        img: 'https://i.imgur.com/FPZnn0t.jpg',
        title: 'Nick at Brain Sweat Practice',
        tag: 'ppl',
        date: '01**22',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/Wsuom31.jpg',
        title: 'The Alaskan',
        date: '060522',
        tag: 'USA',
        tag2: '',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/fzXGxAX.jpg',
        title: 'Minturn, Co.',
        date: '120621',
        tag: 'USA',
        tag2: '',
        mSrc: 'javascript:;',
    },


    {
        img: 'https://i.imgur.com/6t0vbI9.jpg',
        title: 'Trail',
        tag: 'out',
        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/EWpUfVK.jpg',
        title: 'milky',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/9xCk0Ia.jpg',
        title: 'Navy',
        tag: 'out',
        mSrc: 'javascript:;',

    }, {
        img: 'https://i.imgur.com/bzd2Y4T.jpg',
        title: 'Twin Sisters?',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/TU7iDUw.jpg',
        title: 'fairhavenidk',
        date: '060822',
        tag: 'out',
        tag2: "ppl",
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/a5o0zro.jpg',
        title: 'Nick at Brain Sweat Practice',
        date: '021022',
        tag3: 'prop0623',
        mSrc: 'javascript:;',
        tag: 'ppl',
    }, {
        img: 'https://i.imgur.com/HJUFpJ4.jpg',
        title: 'McDongals',
        tag: 'out',
        tag2: "USA",
        mSrc: 'javascript:;',

    }, {
        img: 'https://i.imgur.com/HcJnmcA.jpg',
        title: 'beach again',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/6sAwkYg.jpg',
        title: 'waterfall',
        tag: 'out',
        tag2: 'USA',

        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/5cmUkek.jpg',
        title: 'waterfall',
        date: '060822',
        tag: 'out',
        tag2: 'USA',

        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/lwVyOMr.jpg',
        title: 'Morning',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/9KcJuJM.jpg',
        title: 'Explorer',
        tag: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/PMNcCtk.jpg',
        title: 'PCH',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {

        img: '  https://i.imgur.com/WuIsCyu.jpg',
        title: 'Feb. Whatcom Falls',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/GbZrSJo.jpg',
        title: 'belacs pedals',
        date: "021022",
        tag: 'ppl',
        tag3: 'prop0623',
        mSrc: 'javascript:;',
    },

    {

        img: 'https://i.imgur.com/WIWGPru.jpg',
        title: 'Feb. Whatcom Falls',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/zZlxplW.jpg',
        title: 'caddy',
        tag: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/pVbtOgH.jpg',
        title: 'Whatcom Falls teva bag',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/TZEhq50.jpg',
        title: 'KV',
        date: '101919',
        tag: 'ppl',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/iH4cllZ.jpg',
        title: '(s)explorer on the beach',
        tag: 'out',
        tag2: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/TsjhqGN.jpg',
        title: 'Feb. Whatcom Falls',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/tPPXwwe.jpg',
        title: 'Morning Volvo',
        tag: 'out',
        tag2: 'CAR',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/Gila5Ll.jpg',
        title: 'Mary and Chevy',
        tag: 'ppl',
        date: '01**22',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/1RYHhT8.jpg',
        title: 'Whatcom Falls',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/nr3v1YV.jpg',
        title: 'beached',
        date: '062022',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/JUUxiPu.jpg',
        title: 'Morning',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/M8c0tcb.jpg',
        title: 'another home',
        date: '062022',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/HANhmRA.jpg',
        title: 'busStop',
        date: '062022',
        tag: 'out',
        tag2: 'ppl',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/zmlgVEP.jpg',
        title: 'Mother and child',
        tag: 'ppl',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/scJJAhE.jpg',
        title: 'tap to visit',
        date: '/imagine:<midjourney__prompting_/>',
        tag: 'RAD',
        tag2: 'midjourney',
        mSrc: '/#/midjourneyPrompts',

    }, {
        img: 'https://i.imgur.com/kL01Usx.jpg',
        date: 'hello!',
        title: '062022',
        tag: 'RAD',
        tag2: 'ppl',
        tag3: 'prop0623',

        mSrc: 'javascript:;',
    }, {
        mSrc: "https://iWentToCatholicSchool.schidt.co/",
        img: 'https://i.imgur.com/YJLTHWg.jpg',
        date: 'QR Gospel 061822',
        title: 'tap to visit',
        tag: 'RAD',
        tag2: 'ppl',


    }, {
        img: '  https://i.imgur.com/lqldWTH.jpg',
        date: 'Blue Angel by Malcolm Liepke',
        title: 'refigured with AI by me',
        mSrc: 'javascript:;',
        tag: 'RAD',
        tag2: 'ppl',


    }, {
        img: 'https://i.imgur.com/qiAHwaG.jpg',
        title: 'R&D',
        tag: 'CAR',
        tag2: 'RAD',

        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/dC2cqoa.jpg',
        title: 'R%D',
        date: '071522',
        tag: 'RAD',
        mSrc: 'javascript:;',

    }, {
        img: 'https://i.imgur.com/jr4Zy0c.jpg',
        title: 'R&D',
        date: '060722',
        tag2: 'RAD',
        tag3: 'prop0623',
        mSrc: 'javascript:;',
    }, {
        img: '  https://i.imgur.com/kbPigMn.jpg',
        title: 'R&D',
        date: '060822',
        tag2: 'RAD',
        tag3: 'prop0623',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/r9CqzKf.jpg',
        title: 'R&D AGAIN',
        tag: 'RAD',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/DrihU0V.jpg',
        title: 'R&D',
        tag: 'CAR',
        tag2: 'RAD',
        mSrc: 'javascript:;',

    },

    {
        img: 'https://i.imgur.com/k9WluBF.jpg',
        title: 'R&D',
        tag: 'CAR',
        tag2: 'RAD',

        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/Gm11VkA.jpg',
        title: 'R&D',
        tag2: 'RAD',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/Pz5oFpb.jpg',
        date: 'hello!',
        title: '062022',
        tag: 'RAD',
        tag2: 'ppl',
        mSrc: 'javascript:;',

    }, {
        img: '    https://i.imgur.com/lr4RSXV.jpg',
        title: 'Cannon Beach',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/jctrv8O.jpg',
        title: 'Co. Glowies',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/l7i0spw.jpg',
        title: 'Co. Church',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/oYcYdNI.jpg',
        title: 'Xmas in Vail',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/8SKjIr2.jpg',
        title: 'Wyoming Cemetery',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/BwzvIM5.jpg',
        title: 'Gloomy Cow',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/MOezplS.jpg',
        title: 'Gloomy Cow 2',
        tag: 'out',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/3fG3mfq.jpg',
        title: 'Shroom',
        tag: 'out',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/GPHEKLk.jpg',
        title: 'Trail',
        tag: 'out',
        tag2: 'ppl',
        mSrc: 'javascript:;',

    },
    {
       img: 'https://i.imgur.com/iGRiF4v.jpg',
       title: 'Stranger',
       tag: 'ppl',
       tag: 'out',
       date: '060822',
       mSrc: 'javascript:;',

   },
    {
        img: 'https://i.imgur.com/meztWUD.jpg',
        title: 'overgrown',
        tag: 'USA',
        tag2: 'out',
        date: '031722',
        mSrc: 'javascript:;',
    },
    {
        img: 'https://i.imgur.com/L0g5AYj.jpg',
        title: 'BPig 1',
        tag: 'ppl',
        mSrc: 'javascript:;',

    }, {
        img: 'https://i.imgur.com/14molmO.jpg',
        title: 'Bpig 2',
        tag: 'ppl',
        mSrc: 'javascript:;',

    }, {
        img: 'https://i.imgur.com/Jh8CxOV.jpg',
        title: 'BPig 3',
        tag: 'product',
        mSrc: 'javascript:;',

    },
    {
       img: 'https://i.imgur.com/FUyzbva.jpg',
       title: 'BFJ',
       tag: 'USA',
       tag2: 'out',
       date: '070322',
       mSrc: 'javascript:;',
   },{
        img: 'https://i.imgur.com/Ratasd3.jpg',
        title: 'Nick at Practice',
        tag: 'ppl',
        date: '01**22',
        mSrc: 'javascript:;',

    },




    {
        img: 'https://i.imgur.com/Cn7vbEZ.jpg',
        title: 'BakerPark1',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/vqKSBO6.jpg',
        title: 'BakerPark Dec Road',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/YfM4L0I.jpg',
        title: 'BakerPark3',
        tag: 'out',
        tag2: 'USA',
        mSrc: 'javascript:;',
    },


    {
        img: 'https://i.imgur.com/YNsoo9W.jpg',
        title: 'Timex Marlin Automatic',
        tag: 'commod',
        tag2: 'USA',
        mSrc: 'javascript:;',

    }, {
        img: 'https://i.imgur.com/X4Ri4sb.jpg',
        title: 'Timex Marlin Automatic',
        tag: 'commod',
        tag2: 'USA',
        tag3: 'noshow',
        mSrc: 'javascript:;',
    },

    {
        img: 'https://i.imgur.com/huqagut.png',
        title: 'midjourney',
        date: '/imagine: <_prompt_/>',
        tag3: 'noshow',
        tag2: 'midjourney',
        mSrc: 'javascript:;',
    }, {
        img: 'https://i.imgur.com/0AvrWIt.jpg',
        title: 'midjourney',
        mSrc: 'javascript:;',

        date: '/imagine:an entirely synthetic human brain — look closer.',
        tag3: 'noshow',
        tag2: 'midjourney',
        text: 'text',
    },

    {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/2QYy6fE.jpg',
        title: 'midjourney',
        date: '/imagine: heart ++ microplastics',
        tag3: 'noshow',
        tag2: 'midjourney',
    },


    {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/yHKzJIO.png',
        title: 'midjourney',
        date: '/imagine: <_prompt_/>',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/uynkvg1.jpg',
        title: 'midjourney',
        date: '/imagine:fear, cybernetics, loathing, and fiefdom by pietro perugino',
        tag3: 'noshow',
        tag2: 'midjourney',

    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/zy0O6yH.png',
        title: 'midjourney',
        date: '/imagine: <_prompt_/>',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/oMtIGAJ.png',
        title: 'midjourney',
        date: '/imagine: <_prompt_/>',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/ylJ6L1X.jpg',
        title: 'midjourney',
        date: '/imagine:the_human_singularity__',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/wcAzPDb.jpg',
        title: 'midjourney',
        date: '/imagine: <_prompt_/>',
        tag3: 'noshow',
        tag2: 'midjourney',
    },

    {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/c32J0dY.png',
        title: 'midjourney',
        date: '/imagine:the_human_singularity__',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/s9H3qbI.png',
        title: 'midjourney',
        date: '/imagine:the_human_singularity__',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/6k2UkAe.png',
        title: 'midjourney',
        date: '/imagine:the_human_singularity__',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/56IKKRw.png',
        title: 'midjourney',
        date: '/imagine:_humanMachine',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/lOUHejS.jpg',
        title: 'midjourney',

        date: '/imagine:fear, cybernetics, loathing, and fiefdom by pietro perugino',
        tag3: 'noshow',
        tag2: 'midjourney',

    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/W6mDRvp.png',
        title: 'midjourney',
        date: '/imagine: <_prompt_/>',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/mNp7Vnd.png',
        title: 'midjourney',
        date: '/imagine:Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/5EOrOOv.png',
        title: 'midjourney',
        date: '/imagine:Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        title: 'midjourney',
        date: '/imagine:Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/nFoijUq.png',
        title: 'midjourney',
        date: '/imagine:Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/w0YFQAg.png',
        title: 'midjourney',
        date: '/imagine:Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/pGIlWQY.jpg',
        title: 'midjourney',
        date: '/imagine:a xenofeminist Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    },

    {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/BXmhoaP.jpg',
        title: 'midjourney',
        date: '/imagine:a xenofeminist Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    },

    {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/dPn37PU.png',
        title: 'midjourney',
        date: '/imagine:a xenofeminist Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/j8vMvuA.png',
        title: 'midjourney',
        date: '/imagine:',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/Joix1E2.png',
        title: 'midjourney',
        date: '/imagine:a universe broach',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/JzJvd48.png',
        title: 'midjourney',
        date: '/imagine:a universe broach',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/YaBjwQR.png',
        title: 'midjourney',
        date: '/imagine:',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/egjX5Nb.jpg',
        title: 'midjourney',
        date: '/imagine:aerogel ring to die for',
        tag3: 'noshow',
        tag2: 'midjourney',
    },




];

const unused = [{
        mSrc: 'javascript:;',
        img: 'https://i.imgur.com/RHfqqgJ.png',
        title: 'midjourney',
        date: '/imagine:Life 3.0',
        tag3: 'noshow',
        tag2: 'midjourney',
    },

    {
        img: 'https://i.imgur.com/zcP7gay.png',
        title: 'midjourney',
        date: '/imagine:the_human_singularity__',
        tag3: 'noshow',
        tag2: 'midjourney',
    }, {
        img: 'https://i.imgur.com/Tgxpjag.jpg',
        title: 'R&D',
        date: '060722',
        tag2: 'RAD',
    }, {
        img: 'https://i.imgur.com/TRknQrF.jpg',
        title: 'R&D',
        date: '060822',
        tag2: 'RAD',
    }, {
        img: 'https://i.imgur.com/vZuERf2.jpg',
        title: 'R&D',
        tag2: 'RAD',
    }, {
        img: 'https://i.imgur.com/QejXnFt.jpg',
        title: 'Strange mornings',
        date: '060522',
        tag: 'USA',
        tag2: '',

    }, {
        img: 'https://i.imgur.com/zrYdXWS.jpg',
        title: 'Ian 2',
        tag: 'undisplay',

    }, {
        img: 'https://i.imgur.com/j8dCHXg.jpg',
        title: 'Ian 1',
        tag: 'ppl',

    }, {
        img: 'https://i.imgur.com/ga6th2f.jpg',
        title: 'Chevys Night',
        tag: 'ppl',

    },
];
