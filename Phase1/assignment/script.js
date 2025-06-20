let timeline1 = gsap.timeline();

timeline1
    .from(".section1 .title h1", {
        y: -40,
        opacity: 0
    })
    .from(".section1 .title h2", {
        x: -100,
        opacity: 0
    })
    .from([".section1 .description",".section1 .startBtn"], {
        y: 30,
        opacity: 0,
        stagger: 0.5
    })
    .from("#items > g", {
        opacity: 0,
        scale: 0,
        transformOrigin: "50% 50%",
        stagger: 0.2
    });

let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", function () {
    timeline1
        .to(".container", {
            scale: 20,
            opacity: 0,
            duration: 1,
            ease: "back.in(1,0.5)"
        })
        .to(".container", {
            display: "none"
        })
});