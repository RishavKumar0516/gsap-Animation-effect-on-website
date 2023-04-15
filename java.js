document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();//these will control our scroll animation.
    let timeline = new TimelineMax()/* and now we can define what property we want to change as we scroll. */

    //inside these passed class we have 9 different section images and what we are going to do is move from whatever we have defined here to whatever er have defined in css.it will take 4 second.
    timeline
    .from('.section_1_01',4, {//here we are targeting each imagesection and going to move these image from whatever we have defined here to whatever we have defined in css(for image whose class is .section_1_01).
        y:-100,
        x:-150,
        ease:Power3.easeInOut
    })//these moves the image whose class is .section_1_01 from position y = -100 and x = -150 to the position we have set in the css.
    .from('.section_1_02',4, {
        y:-150,
        x:-250,
        ease:Power3.easeInOut
    }, '-=4')//we are adding offset '-=4' to each of these form methods all these animation starts with same time.
    .from('.section_1_03',4, {
        y:-80,
        x:-100,
        ease:Power3.easeInOut
    }, '-=4')
    .from('.section_1_04',4, {
        y:-100,
        x:-150,
        ease:Power3.easeInOut
    }, '-=4')
    .from('.section_1_05',4, {
        y:-80,
        x:-200,
        ease:Power3.easeInOut
    }, '-=4')
    .from('.section_1_06',4, {
        y:-100,
        x:-50,
        ease:Power3.easeInOut
    }, '-=4')
    .from('.section_1_07',4, {
        y:-50,
        x:-150,
        ease:Power3.easeInOut
    }, '-=4')
    .from('.section_1_08',4, {
        y:-50,
        x:-350,
        ease:Power3.easeInOut
    }, '-=4')
    .from('.section_1_09',4, {//inside these passed class we have 9 different section images and what we are going to do is move from whatever we have defined here to whatever er have defined in css.it will take 4 second.
        y:-100,
        x:-200,
        ease:Power3.easeInOut
    }, '-=4')
    let scene = new ScrollMagic.Scene({
        triggerElement:'.first-section',
        duration:'100%',
        triggerHook:0,//these means that as soon as the first-section hits the top of the screen, it will start animating.
        offset:'300'// the animation will start once the first section has 300px from the top of the screen.
    })
    .setTween(timeline)/* inside these methods we will pass timeline which will be crating sortly. */
    .setPin('.first-section')/* inside setPin method we will set the pin to the first section. and setting pin means do not pass the first section without completing the animation */
    .addTo(controller);


//-------------------animation for second section---------------------
/* now we have to set the animation for second-section. for these section what we have to do is simply change the height of top image-wrapper layer, so that the bottom layer will get rebuilt. */

let timeline2 = new TimelineMax();
timeline2
.to('.top .image-container', 4, {//these time i am using to method for the top section and for the image-container and take 4s to complete.
    height:0
});

let scene2 = new ScrollMagic.Scene({
    triggerElement:'.second-section',
    duration:'100%',
    triggerHook:0,
    offset:'100'
})
.setTween(timeline2)
.setPin('.second-section')
.addTo(controller);


//-------------------animation for third section------------------
//  now we target third-section, so inside third section we have 6 diffferent imageswhich are currently stacked on top of each other,and as we scroll we  change the y-value for each of these individuals images.

let timeline3 = new TimelineMax();
timeline3
.to('.section_3_01', 4, {//these moves the image whose class is .section_1_01 to    250px to the top as we scroll.
    y:-250,
    ease: Power3.easeInOut
})
.to('.section_3_02', 4, {//these moves the image whose class is .section_1_01 to    250px to the top as we scroll.
    y:-200,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_03', 4, {//these moves the image whose class is .section_1_01 to    250px to the top as we scroll.
    y:-100,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_04', 4, {//these moves the image whose class is .section_1_01 to    250px to the top as we scroll.
    y:0,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_05', 4, {//these moves the image whose class is .section_1_01 to    250px to the top as we scroll.
    y:150,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_06', 4, {//these moves the image whose class is .section_1_01 to    250px to the top as we scroll.
    y:250,
    ease: Power3.easeInOut
}, '-=4')




let scene3 = new ScrollMagic.Scene({
    triggerElement:'.third-section',
    duration:'100%',
    triggerHook:0,
    offset:'200'//the animation start as we hit 200px from the top.
})
.setTween(timeline3)
.setPin('.third-section')
.addTo(controller);


//-------------------animation for forth section------------------
//  now we target forth-section, and change the opacity for different images.

let timeline4 = new TimelineMax();
timeline4
.to('.section_4_01', 4, {
    autoAlpha: 0     // autoalpha is the opacity.
})
//for remainiing 3 images we are using from methods and set their opacity(autoalpha) to 0. so these 3 images start with opacity 0 and
.from('.section_4_02', 4, {
    autoAlpha:0
}, '-=4')
.from('.section_4_03', 4, {
    autoAlpha:0
})
.from('.section_4_04', 4, {
    autoAlpha:0
})

let scene4 = new ScrollMagic.Scene({
    triggerElement:'.forth-section',
    duration:'100%',
    triggerHook:0,
    offset:'200'//the animation start as we hit 200px from the top.
})
.setTween(timeline4)
.setPin('.forth-section')
.addTo(controller);

})


/* notes:- from method is used when we want to run animation from initial to final point, just we have seen above that we are animating the first-section from the specified position to the position we have defined in the css.

   to:- to method is used when we want to set the animation in single way. */    