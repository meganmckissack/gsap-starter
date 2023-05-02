// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
});
gsap.registerPlugin(ScrollTrigger);

let circle = document.querySelector(".circle");

// const main = gsap.timeline({defaults: {duration: 1},
//   scrollTrigger: {
//     trigger: "#circle",
//     scrub: true,
//     start: "top center",
//     end: "bottom center"
//   }})
//     .fromTo( ".circle",{ x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
  // .to(".circle", {duration: 0.01, autoAlpha: 1})
  // .from(".theLine", {drawSVG: 0}, 0)
  // .to(".circle", {motionPath: {
  //   path: ".theLine", 
  //   align:".theLine",
  //   alignOrigin: [0.5, 0.5],
  // }}, 0);
  // .add(pulses, 0);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#circle",
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
      markers: true
    }
  });
  tl.to(circle, {yPercent: 350, duration: 1})
  tl.to(circle, {rotation: 360, duration: 3})
  tl.to(circle, {xPercent: 350, duration: 1})

//   gsap.config({
//     nullTargetWarn: false,
//     trialWarn: false,
// });
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".circle", {
//     duration: 1,
//     stagger: true,
//     x: -350,
//     opacity: 1,
//     stagger: 0.33,
//     ease: "linear.none",
//     scrollTrigger: {
//         trigger: ".circle",
//         toggleActions: "restart none none reverse",
//         start: "top 95%",
//         end: "bottom 95%"
//     }
// });