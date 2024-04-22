$(document).ready(function () {
    // Hide the category filters initially
    $('.hidden-filter').hide();

    // Add a click event listener to the "Categories" button
    $('.filter-categories').click(function () {
        // Toggle the visibility of the category filters
        $('.hidden-filter').toggle();
    });
});

// Gsap 

gsap.registerPlugin(ScrollTrigger);

const gTl = gsap.timeline();

gsap.to('.animation1', {
    xPercent: 200,
    yPercent: -120,
    scrollTrigger: {
        trigger: '.vlt-gap-150',
        start: 'top top-=250',
        end: "top top-=252",
        scrub: 1,
        duration: 20,
        onUpdate: (self) => {
            console.log(self);
        }
    }
})

gsap.to('.title1-animation', {
    scrollTrigger: {
        trigger: '.vlt-gap-150',
        start: 'top top-=250',
        end: "top top-=252",
        scrub: 1,
        delay: 1.5,
    },
    opacity: -1,
    duration: 2,
    xPercent: 50,
})

gsap.to('.content1-animation', 2, {
    scrollTrigger: {
        trigger: '.vlt-gap-150',
        start: 'top top-=250',
        end: "top top-=252",
        scrub: 1,
    },
    opacity: 0,
    duration: 2,
    yPercent: 50,
})


gsap.to('.animation2', {
    scrollTrigger: {
        trigger: '.vlt-gap-150',
        start: 'top top-=250',
        end: "top top-=252",
        scrub: 1,
    },
    duration: 2,
    xPercent: -200,
    yPercent: -171,
})

gsap.fromTo('.title2-animation', {


    yPercent: -950,
    xPercent: 110,
    opacity: -1,

},

    {
        scrollTrigger: {
            trigger: '.vlt-gap-150',
            start: 'top top-=250',
            end: "top top-=252",
            scrub: 1,
            delay: 10
        },

        yPercent: -950,
        xPercent: 70,
        opacity: 1,
    }
)

gsap.fromTo('.content2-animation', {


    yPercent: -350,
    xPercent: 70,
    opacity: 0,

},

    {
        scrollTrigger: {
            trigger: '.vlt-gap-150',
            start: 'top top-=250',
            end: "top top-=252",
            scrub: 1,
            delay: 10
        },

        yPercent: -550,
        xPercent: 70,
        opacity: 1,
    }
)

const fixedElement = document.querySelector('.fixed-element');
window.addEventListener('scroll', function () {

    if (window.scrollY >= 1450 && window.scrollY <= 2300) {
        fixedElement.style.top = window.scrollY - 1450 + 'px'; // Adjust the top position based on the scroll
    }
});