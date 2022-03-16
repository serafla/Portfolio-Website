import { gsap } from "gsap"
import {Flip} from "gsap-trial/Flip";
gsap.registerPlugin(Flip);

var projects = document.querySelectorAll('.filtr-item');
var startHeight = gsap.getProperty("#gallery", "height");
var state = Flip.getState('.filtr-item, .empty');
var filters = document.querySelectorAll('.option');

if(filters.length) {
    projects.forEach(function(project) {
      gsap.set(project, { display: 'block' });
      project.classList.remove('filtered');
    });

    filters.forEach(function(filter) {
      var type = filter.dataset.filter.split(':')[0];
      var value = filter.dataset.filter.split(':')[1];
      projects.forEach(function(project) {
        if(project.getAttribute('data-' + type) != value) {
          gsap.set(project, { display: 'none' });
          project.classList.add('filtered');
        }
      });
    });
  }else {
    projects.forEach(function(project) {
      gsap.set(project, { display: 'block' });
      project.classList.remove('filtered');
    });
  }

  if(document.querySelectorAll('.filtr-item:not(.filtered)').length) {
    gsap.set('.empty', { display: 'none' });
  }
  else {
    gsap.set('.empty', { display: 'block' });
  }
  
  var endHeight = gsap.getProperty("#gallery", "height");

  var flip = Flip.from(state, {
    duration: 1,
    ease: "power3.inOut",
    stagger: 0.08,
    absoluteOnLeave: true,
    absolute: ".filtr-item",
    onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1}),
    onLeave: elements => gsap.fromTo(elements, {opacity: 1, scale: 1}, {opacity: 0, scale: 0, duration: 1})
  })
  flip.fromTo("#gallery", {
    height: startHeight
  }, {
    height: endHeight,
    clearProps: "height",
    duration: flip.duration()
  }, 0);

  document.querySelectorAll('.filter-button').forEach(function(button) {
    button.querySelectorAll('.option').forEach(function(option) {
      option.addEventListener('click', function(event) {
        is_active = false;
        button.querySelectorAll('.option').forEach(function(option2) {
          if(option2.classList.contains('is_active')) {
            option2.classList.remove('is_active');
            if(option2 == option) {
              is_active = true;
            }
          }
        });
        if(!is_active) {
          event.currentTarget.classList.add('is_active');
        }
       forEach(function(filter);
        event.preventDefault();
      });
    });
  });

   
