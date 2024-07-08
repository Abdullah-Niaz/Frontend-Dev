gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body", // Only needed if you have a custom scroller
    start: "top 0", // When the top of #page2 hits the top of the viewport
    end: "bottom top", // When the bottom of #page2 hits the top of the viewport
    markers: true, // For debugging purposes
  }
});
