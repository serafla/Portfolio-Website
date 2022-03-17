import { projects } from "./projects"
// import {Carousel} from "@fancyapps/ui";
import { gsap } from "gsap";


window.addEventListener('load', function() {


  // const templateCarousel = new Carousel(document.querySelector("#project-carousel"), {
  //     'center' : false
  //   });

    // console.log(projects[localStorage.getItem("indexValue")].images[1]);

    //populate title
    let title = document.querySelector("#template-hero-text h1");
    title.innerHTML = projects[localStorage.getItem("indexValue")].title;

     //populate cover img
     let coverImg = document.querySelector("#template-hero");
     coverImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].cover_image[0] + ")";

     //populate tag
     let tag = document.querySelector("#template-hero-text h3");
     tag.innerHTML = projects[localStorage.getItem("indexValue")].tag;

      // // populate components
      // let components = document.querySelector("#components-container li");
      // components.innerHTML = projects[localStorage.getItem("indexValue")].components;

       //populate description
     let description = document.querySelector("#description-container p");
     description.innerHTML = projects[localStorage.getItem("indexValue")].description;

      //populate process description
      let processDescription = document.querySelector("#process-type p");
      processDescription.innerHTML = projects[localStorage.getItem("indexValue")].process_description;

       //populate process imgs
       let imgProcessArray = this.document.querySelectorAll(".process-images");
       imgProcessArray.forEach((image, i) => {
        imgProcessArray[i].style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].process_imgs[i] + ")";
    });

      //populate brand guide
      let brandGuide = document.querySelector("#brand-guide-image");
      brandGuide.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].brand_guide[0] + ")";

      // populate video
    let video = document.querySelector("#myVideo");
    // check if there is data under video tag in projects.js
      if(projects[localStorage.getItem("indexValue")].video === ""){
        gsap.set("#myVideo", {display: "none"});
      }else{
        video.src = projects[localStorage.getItem("indexValue")].video;
      }

      

      // // populate carousel OR video
      // let carouselImages = document.querySelector("#project-carousel");
      // let video = document.querySelector("#myVideo");
      // if (projects[localStorage.getItem("indexValue")].carousel === "0"){
      //   carouselImages.forEach((carousel, i) => {
      //     carouselImages[i].style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].carousel[i] + ")";
      //     gsap.set("#myVideo", {display: "none"});
      // });
      // } else if (projects[localStorage.getItem("indexValue")].video === "0"){
      //   video.innerHTML += 'source src="' + projects[localStorage.getItem("indexValue")].video[0] +'">';
      //   gsap.set("#project-carousel", {display: "none"});
      // } else {
      //   gsap.set("#myVideo", {display: "none"});
      //   gsap.set("#project-carousel", {display: "none"});
      // }

      // video.innerHTML += '<source src="'+ source +'">';

      // <source src="img/SEPTA/SEPTA-GIF.mp4" type="video/mp4"></source>
      // "url(" + projects[localStorage.getItem("indexValue")].images[1] + ")";


    // populate images
    let imgDetailsArray = this.document.querySelectorAll(".project-image");
    // check if there is data under images tag in projects.js
    if(projects[localStorage.getItem("indexValue")].images === ""){
      gsap.set("#project-gallery ul", {display: "none"});
    }else{
      imgDetailsArray.forEach((image, i) => {
        imgDetailsArray[i].style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[i] + ")";
    });
    }

    // let heroImg = document.querySelector("#detail-hero");
    // heroImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[1] + ")";

    // let moreImg = document.querySelector("#moreImg");
    // moreImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[0] + ")";
    
});