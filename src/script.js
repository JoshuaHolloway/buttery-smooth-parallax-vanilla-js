gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
 content: "#content",
 smooth: 3,
 effects: true
});

smoother.effects("img", { speed: "auto" });