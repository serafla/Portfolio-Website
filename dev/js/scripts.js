import {Carousel} from "@fancyapps/ui";
import { projects } from "./projects"
import {burgerTL} from "./burgerAnimation";
import {menuAnimation} from "./mobileMenu.js";
import { displayWindowSize } from "./mobileResizing";
import { SlideinTop } from "./scrollAnimation";
// import { scrollPage } from "./pageScroll";


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
   
  // scroll trigger
    SlideinTop(".portfolio-project-container", ".filtr-item");
   
});

var burgerButton = document.querySelector("#burger-container");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        // can't see menu... play timeline of burger into X
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        // can see menu.. play X back into burger
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }

}

burgerButton.addEventListener("click", openCloseMenu);
let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
  // button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

// function checkScrolling(e) {
//   // check to see which button was clicked
//   const indexValue = [].indexOf.call(navButtons, e.target)
//   if (indexValue != -1) {
//       scrollPage(indexValue);
//   }
// }

//listen to window resize
window.addEventListener("resize", displayWindowSize);

//check the window size on load
window.addEventListener('load', displayWindowSize); 