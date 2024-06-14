var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});

tl.to(
  "#fanta1",
  {
    top: "120%",
    right: "60%",
  },
  "orange"
);

tl.to(
  "#orange-lem2 ",
  {
    top: "160%",
    left: "13%",
  },
  "orange"
);

tl.to(
  "#leaf3",
  {
    top: "160%",
    left: "33%",
  },
  "orange"
);

tl.to(
  "#leaf2",
  {
    top: "100%",
    left: "43%",
    rotate: "90deg",
  },
  "orange"
);

tl.from(
  ".rght-two h1",
  {
    x: 300,
    opacity: 0,
  },
  "orange"
);

tl.from(
  ".rght-two p",
  {
    y: 300,
    opacity: 0,
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true,
  },
});

tl2.from("#orange-lem, #orange-lem3", {
  duration: 1,
  x: 300,
  rotation: 360,
  scale: 0.5,
  opacity: 0,
  ease: "power2.inOut",
});
