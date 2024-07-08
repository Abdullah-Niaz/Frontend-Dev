gsap.registerPlugin(ScrollTrigger);

gsap.from("#page 1 #circle1", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 0.5,
});

gsap.from("#page2 #circle2", {
  scale: 0,
  rotate: 360,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 #circle2",
    start: "top 80%", // Customize as needed
    end: "top 30%", // Customize as needed
    scrub: 1, // Smooth animation linked to scroll
    markers: true // For debugging purposes, remove in production
  }
});

gsap.from("#page2 #circle3", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 0.5,
});
