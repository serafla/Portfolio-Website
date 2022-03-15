import {Carousel} from "@fancyapps/ui";
import { projects } from "./projects"


window.addEventListener('load', function (){

    const heroCarousel = new Carousel(document.querySelector("#hero-carousel"), {
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

    let heroLinks = document.querySelectorAll("#gallery a");

    heroLinks.forEach((link, i) => {
      // console.log("hello");

      link.addEventListener("click", () =>{
          localStorage.setItem("indexValue", i);
          link.href = "project_template.html?=" + projects[i].title;
      });
  });
   
});


