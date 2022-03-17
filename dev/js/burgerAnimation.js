import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-lines",{transformOrigin:"center"});

export const burgerTL = new gsap.timeline({paused:true});
burgerTL.to(".burger-lines", {drawSVG: "0%", duration:0.25, stagger: 0.1})
burgerTL.to("#burger-line-1", {drawSVG: "100%", duration:0.35})
// .to("#burger-line-1", {duration: 0.25, scale:0}, "animate")
// .to("#burger-line-1",{duration:0.25, rotation:45, y:"+=8"}, "animate")
// .to("#burger-line-3",{duration:0.25, rotation:-45, y:"-=8"}, "animate")


// const bottomTL = new gsap.timeline();
// bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25, y:"-=8"})
// .to(".burger-lines:nth-child(3)",{duration:0.25, rotation:-45,fill:"#fff"});

// const middleTL = new gsap.timeline();
// middleTL.to(".burger-lines:nth-child(2)",{duration:0.25, scale:0})
// .to("#outline",{duration:0.25, drawSVG:"100%", stroke:"#f91f1f"});



// burgerTL.add(topTL,"burger")
//     .add(bottomTL,"burger")
//     .add(middleTL,"burger")


// burgerTL.to(".burger-lines", {drawSVG: "0%", duration:0.25, stagger: 0.1, yoyo: true, repeat: 1})