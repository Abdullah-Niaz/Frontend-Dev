var tl = gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5,
})


tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.5,
})

tl.from("#main img",{
    x:100,
    // rotate:45,
    opacity:0,
    duration:1,
})