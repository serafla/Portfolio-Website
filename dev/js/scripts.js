import {Carousel} from "@fancyapps/ui";
import { projects } from "./projects"
import Filterizr from 'filterizr';
// import { clickFilter } from "./filter"

window.addEventListener('load', function (){

    const myCarousel = new Carousel(document.querySelector(".carousel"), {
      'center' : false
    });

    // populate the cover images
    let coverImgArray = document.querySelectorAll('.portfolio-cover-image');
    // iterate over the coverImgArray and populate the background images
    coverImgArray.forEach((coverImg, i) => {
        coverImg.style.backgroundImage = "url(" + projects[i].cover_image[0] + ")";
    });

     // populate the titles
     let titleArray = document.querySelectorAll('.portfolio-title');
     titleArray.forEach((title, i) => {
      title.innerHTML = projects[i].title;
    });

  //   //  populate the tags
    let tagArray = document.querySelectorAll('.portfolio-tags');
    tagArray.forEach((tag, i) => {
      tag.innerHTML = projects[i].tag;
    });
   
    //FILTERIZR 

    // commented out code from filter.js file to put in scripts.js 
    // these are the initializing settings which you can customize thru options

  //  function filter(){
  //     console.log("clicks");
    
  //       filterLinks.forEach((link, i) => {
  //           link.addEventListener("click", e => {
  //               e.preventDefault();
    
  //               console.log(currentLink);
  //               // set the currentLink

  //               if(i == 0){
  //                 const options = { 
  //                   animationDuration: 0.5, 
  //                   filter: 'all',
  //                 }
  //               }
                
  //               currentLink = i;
              
  //           });
  //       });
  //   }
    
    // const options = { 
    //   animationDuration: 0.5, 

    //   // filter: 'all',
    //   // filterOutCss: {
    //   //   opacity: 0,
    //   //   transform: 'scale(0.5)'
    //   // },

    //   // filterInCss: {
    //   // opacity: 0,
    //   // transform: 'scale(1)' },

    //   gridItemsSelector: '.filtr-item',
    //   gutterPixels: 0,
    //   layout: ,
    //   multifilterLogicalOperator: 'or',
    //   setupControls: true,
    //   spinner: {
    //     enabled: false,
    //     fillColor: '#2184D0',
    //     styles: {
    //       height: '75px',
    //       margin: '0 auto',
    //       width: '75px',
    //       'z-index': 2
    //     }
    //   }
    //  };

     

      // Adjust the CSS selector to match the container where
    // you set up your image gallery
    const filterizr = new Filterizr('#filter-container', options);

});


