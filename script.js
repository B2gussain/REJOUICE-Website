var page2 = document.getElementsByClassName("page2")[0]; // 
var image1 = document.getElementsByClassName("image1_1")[0]; // 
 


page2.addEventListener("mousemove", (e) => {
    gsap.to(".play", {
        opacity: 1,            
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)", 
        scale: 1.2
    });

   
    gsap.to(".play", {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
        delay: 0.2
    });
});

// Smooth fade-out on mouse leave
page2.addEventListener("mouseleave", () => {
    gsap.to(".play", {
        opacity: 0,
        scale: 0.8,           
        duration: 0.5,
        ease: "power2.out"
    });
});
gsap.from(".page1 h1 span", {
    y: -100,          
    opacity: 0,     
    duration: 0.5,   
    stagger: 0.1,   
    ease: "power2.out" // Easing for smooth motion
});

gsap.from("nav", {
    y: -100,          
    opacity: 0,     
    duration: 0.5,      
    ease: "power2.out" // Easing for smooth motion
});
gsap.from(".page1 p", {
    y: -100,          
    opacity: 0,     
    duration: 0.5,   
    stagger: 0.1,   
    ease: "power2.out" // Easing for smooth motion
});

gsap.utils.toArray(".page3_p1 p").forEach((p) => {
    const lines = p.innerHTML.split('<br><br>').map(line => `<span class="line">${line}</span>`).join('<br><br>');
    p.innerHTML = lines;

    gsap.fromTo(p.querySelectorAll(".line"),
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: p,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1, // Enables parallax smooth scrolling
                toggleActions: "play none none reverse"
            }
        }
    );
});

// h1 parallax animation
gsap.fromTo(".page3 h1",
    { y: 150, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page3 h1",
            start: "top 90%",
            end: "top 40%",
            scrub: 1
        }
    }
);


image1.addEventListener("mousemove", (e) => {
    gsap.to(".page4_vid1", {
        opacity: 1,            
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)", 
    });

   
    gsap.to(".page4_vid1", {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
        delay: 0.2
    });
});

// Smooth fade-out on mouse leave
image1.addEventListener("mouseleave", () => {
    gsap.to(".page4_vid1", {
        opacity: 0,          
        duration: 0.5,
        ease: "power2.out"
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".page8 video", {
  scale: 1.5, // Scale up to 1.5x
  scrollTrigger: {
    trigger: ".page8",
    start: "top center", // Start scaling when top of .page8 hits center of viewport
    end: "bottom top",   // End scaling when bottom of .page8 hits top of viewport
    scrub: true,         // Smooth animation with scroll
  }
});

gsap.utils.toArray(".page7_block p").forEach((p) => {
    gsap.fromTo(p,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: p,
          start: "top 80%", // Trigger when p reaches 80% of the viewport
          toggleActions: "play none none reverse", // Play on scroll in, reverse on scroll out
        }
      }
    );
  });

  gsap.registerPlugin(ScrollTrigger);

  // Animate all text elements (top to bottom)
  gsap.from(".page10 .foot, .page10 .foot1", {
    y: -100,           // Starts above the viewport
    opacity: 0,        // Start invisible
    duration: 1.5,     
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page10", 
      scroller: "body",    
      start: "top 80%",    // Animation starts when .page10 hits 80% of viewport
      end: "top 30%",     
      scrub: true         
    }
  });
  
  // Animate h2 (bottom to top)
  gsap.from(".page10 h2", {
    y: 100,          
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page10",  
      scroller: "body",
      start: "top 80%",     
      end: "top 30%",     
      scrub: true
    }
  });
  