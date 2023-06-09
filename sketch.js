//p5 setup functionality 
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }

  //Need this to make sure dom is loaded so svg is accessible with javaScript
document.addEventListener("DOMContentLoaded", function(event) {
//to see all the gsap available object methods
console.log(gsap);

//takes care of some weird error messages in console
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
});

//adds the Scroll Trigger plugin so we can use it's functionality
gsap.registerPlugin(ScrollTrigger);

//accessing our svg element and storing it as a variable
let circle = document.querySelector("#svg #circle")

//animate svg to move as we scroll down - rough wip
  const tl = gsap.timeline({defaults: {duration: 1},
    scrollTrigger: {
      trigger: "#svg",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      markers: true
    }
  });
  tl.set(circle, {x: 10, y: 0})
  tl.to(circle, {x: 1000, y: 900})

// loggin our circle to make sure it's loaded
console.log(circle);
});