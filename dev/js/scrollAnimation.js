import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SlideinTop(animationElement, triggerElement){
    const tl = new gsap.timeline();
    
    tl.from (animationElement,{ 
        // duration: 2,
        y: -100,
        alpha: 0,
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "bottom 90%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        }
    });

}