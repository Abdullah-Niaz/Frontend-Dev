
gsap.from("#page1 #circle", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 1,
});

gsap.from("#page2 #circle", {
    scale: 0,
  rotate: 360,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scrub: 1, // Smooth animation linked to scroll
    markers: true // For debugging purposes, remove in production
  }
});

gsap.from("#page3 #circle", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 1,
});

