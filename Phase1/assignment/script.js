let timeline1 = gsap.timeline({ defaults: { opacity: 0 } });

timeline1
    .from(".section1 .title h1", {
        y: -40,
    })
    .from(".section1 .title h2", {
        x: -100,
    })
    .from([".section1 .description", ".section1 .startBtn"], {
        y: 30,
        stagger: 0.5
    })
    .from("#items > g", {
        scale: 0,
        transformOrigin: "50% 50%",
        stagger: 0.2
    });

let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", function () {
    timeline1
        .to(".container", {
            scale: 20,
            duration: 2,
        })
        .to(".container", {
            display: "none"
        })
});

GSDevTools.create({ animation: timeline1 });