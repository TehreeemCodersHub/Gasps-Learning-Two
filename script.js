gsap.from("#pageOne #box", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 0.6,
  rotate: 360,
});
gsap.from("#pageTwo #box", {
  opacity: 0,
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    // !trigger means animation k starting point
    // !scrub k main purpose ya hta h k ya apna journey start or end k bech ma hi rakhta h
    trigger: "#pageTwo #box",
    scroller: "body",
    markers: true,
    start: "top 30%",
    end: "top 10%",
    // scrub: true,
    scrub: 2,
    pin: true,
  },
});

gsap.from("#pageThree #side-movement", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#pageThree #side-movement",
    scroller: "body",
    markers: true,
    start: "top 40%",
  },
});
gsap.from("#pageThree #side-movement-two", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#pageThree #side-movement-two",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});

// !-------------------------------------------
// !main purpose

gsap.from("#main-box h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#main-box",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -80%",
    scrub: "2",
    pin: true,
  },
});
