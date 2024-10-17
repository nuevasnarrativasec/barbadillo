$(".flecha").click(function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top
    },
    'slow');
});

/*
new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    src: "https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_prod/especiales-multimedia/barbadillo/video/video-3d-final.mp4?v4"
});*/

/*
new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video-recorrido",
    src: "https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_prod/especiales-multimedia/barbadillo/video/recorrido-barbadillo-final-3.mp4?v4"
});
*/

/*
var controller = new ScrollMagic.Controller();
var triggerElement = document.querySelector('#container1');

var scene = new ScrollMagic.Scene({
    triggerElement: triggerElement,
    duration: 500 // especifica la duración de la escena en píxeles
});

controller.addScene(scene);
scene.setTween(TweenMax.to(".dato-lima-1", 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  }));
*/
/*
var controller = new ScrollMagic.Controller();
var triggerElement = document.querySelector('#container1');
// Primera escena
var scene1 = new ScrollMagic.Scene({
    triggerElement: triggerElement,
    triggerHook: 0.8, // el disparador se activará cuando el 80% del contenedor sea visible
    duration: '100%'
  });
  
  // Segunda escena
  /*
  var scene2 = new ScrollMagic.Scene({
    triggerElement: triggerElement,
    triggerHook: 0.5, // el disparador se activará cuando el 50% del contenedor sea visible
    duration: '80%'
  });*/

// Primera escena
/*
var element1 = document.querySelector('.dato-lima-1');
scene1.setTween(TweenMax.from(element1, 1, {opacity: 0}));
*/
// Segunda escena
/*
var element2 = document.querySelector('#mi-div-2');
scene2.setClassToggle(element2, 'clase-animada');*/
/*
controller.addScene([scene1]);
*/

/*

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-1', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-1",
    trigerHook:"onEnter",
    duration: "10%",
})  
.setTween(fadein_tween)
.addTo(controller);


var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-2', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-2",
    trigerHook:"onEnter",
    duration: "3%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-3', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-3",
    trigerHook:"onEnter",
    duration: "3%"
})  
.setTween(fadein_tween)
.addTo(controller);

*/

/*
var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-7', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-7",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-8', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-8",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-9', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-9",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-10', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-10",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-11', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-11",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);


*/



/*

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-4', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-4",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-5', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-5",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);

var controller = new ScrollMagic.Controller();
var fadein_tween = TweenMax.fromTo('.dato-lima-6', 1, { opacity:0 , ease:Power1.easeInOut  }, { opacity:1 , ease:Power1.easeInOut  });

var scene = new ScrollMagic.Scene({
    triggerElement: ".dato-lima-6",
    trigerHook:"onEnter",
    duration: "10%"
})  
.setTween(fadein_tween)
.addTo(controller);
*/

$(document).ready(function(){
    $(".btn-linea").click(function(){
        $(".box-linea").toggle();
    });
});
  
/*
$(window).on('scroll', function() {
    $('iframe.video-jw').each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
    });
});
*/
  


const swiper = new Swiper('.swiper', {
    // Optional parameters
    /*direction: 'vertical',*/
    loop: false,
    autoHeight: false,
  
    // Navigation arrows
   /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
  });
  
/*
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: "#mi-trigger",
    triggerHook: 0,
    duration: "100%"
  })
  .setPin("#mi-pin")
  .addTo(controller);

  scene.on("update", function (e) {
    var progress = e.progress.toFixed(3);
    var video = document.getElementById("video-background");
    video.currentTime = video.duration * progress;
  });*/





var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};      

var options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};    

var observer = new IntersectionObserver(callback, options);        
var observer2 = new IntersectionObserver(callback2, options2);  

function callback(entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
                document.getElementById("video-recorrido").play();
        } else {
                document.getElementById("video-recorrido").pause();
        }
    });
}

function callback2(entries2, observer) {
    entries2.forEach(entry => {
    if (entry.isIntersecting) {
            document.getElementById("video-recorrido-movil").play();
    } else {
            document.getElementById("video-recorrido-movil").pause();
    }
});
}


observer.observe(document.getElementById("video-recorrido"));
observer2.observe(document.getElementById("video-recorrido-movil"));


