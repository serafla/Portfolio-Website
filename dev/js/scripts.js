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
    
    const options = { /* check next step for available options */ };

      // Adjust the CSS selector to match the container where
    // you set up your image gallery
    const filterizr = new Filterizr('#filter-container', options);

});


