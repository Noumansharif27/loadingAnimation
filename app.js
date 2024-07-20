let circle1 = document.querySelector("#circle-1");
let circle2 = document.querySelector("#circle-2");
let navBtn = document.querySelector("#nav-btn");
let menu = document.querySelector("#menu");
let line1 = document.querySelector("#line-1");
let line2 = document.querySelector("#line-2");
let nav = document.querySelector("#nav");
let isMenuOn = 0;

navBtn.addEventListener("click", () => {
  if (isMenuOn == 0) {
    menu.style.top = "0";
    isMenuOn = 1;

    line1.style.width = "1.5rem";

    line1.style.rotate = "-50deg";
    line2.style.rotate = "60deg";
    line1.style.transition = "all 0.5s ease-in 0.5s";
    line2.style.transition = "all 0.5s ease-in 0.5s";

    line1.style.clor = "#232323";
    line2.style.color = "#232323";
    nav.style.color = "#232323";
  } else {
    menu.style.top = "-150%";
    line1.style.width = "2.2rem";

    line1.style.rotate = "0deg";
    line2.style.rotate = "0deg";
    line1.style.transition = "all 0.5s ease-in 0.5s";
    line2.style.transition = "all 0.5s ease-in 0.5s";

    line1.style.clor = "#cacaca";
    line2.style.color = "#cacaca";
    nav.style.color = "#cacaca";

    isMenuOn = 0;
  }
});

function loadingPage() {
  const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      markers: true,
      start: "top top",
      end: "bottom bottom",
      // scrub: 1,
      pin: true,
    },
  });

  timeLine
    .to(
      circle1,
      {
        top: "50%",
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "hello"
    )
    .to(
      circle2,
      {
        top: "50%",
        // opacity: 0,
        duration: 1.5,
        ease: "Power3.easeInOut",
      },
      "hello"
    )
    .to(
      circle1,
      {
        left: "50%",
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "hi"
    )
    .to(
      circle2,
      {
        left: "50%",
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "hi"
    )
    .to(
      circle1,
      {
        top: "0%",
        // opacity: 0,
        duration: 1,
        ease: "Power4.easeInOut",
      },
      "3"
    )
    .to(
      circle2,
      {
        top: "100%",
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "3"
    )
    .to(
      circle1,
      {
        top: "50%",
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "4"
    )
    .to(
      circle2,
      {
        top: "50%",
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "4"
    )
    .to(
      circle1,
      {
        left: "7%",
        scale: 0,
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "5"
    )
    .to(
      circle2,
      {
        left: "93%",
        scale: 0,
        // opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
      },
      "5"
    )
    .to(
      "#text h1",
      {
        fontSize: "5vw",
        opacity: 1,
        duration: 0.8,
        ease: "Power3.easeInOut",
      },
      "5"
    )
    .to(
      "#text",
      {
        backgroundColor: "rgba(20, 20, 190, 0.6)",
        // opacity: 0,
        duration: 0.8,
        ease: "Power3.easeInOut",
      },
      "5"
    )
    .to(
      "#home",
      {
        height: "0",
        duration: 1,
        ease: "Expo.easeInOut",
      },
      "7"
    )
    .to(
      "#text",
      {
        height: "0",
        // duration: 0.1,
        ease: "Expo.easeInOut",
      },
      "8"
    )
    .to(
      "#text h1",
      {
        fontSize: "0",
        // duration: 0.1,
        ease: "Expo.easeInOut",
      },
      "8"
    )
    .to(
      nav,
      {
        opacity: 1,
        duration: "-2",
        ease: "Power1.easeInOut",
      },
      "7"
    );
}

loadingPage();

function page2() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      scrub: 2,
      markers: true,
      start: "top 300%",
      end: "bottom 150%",
    },
  });

  // tl.to(
  //   "#img-1",
  //   {
  //     top: 0,
  //     duration: 1,
  //     ease: "Power1.easeIn",
  //   },
  //   "1"
  // )
  //   .to(
  //     "#img-2",
  //     {
  //       top: 0,
  //       duration: 1,
  //       ease: "Power1.easeIn",
  //     },
  //     "1"
  //   )
  //   .to(
  //     "#img-3",
  //     {
  //       top: 0,
  //       duration: 1,
  //       ease: "Power1.easeIn",
  //     },
  //     "1"
  //   );
}

page2();
