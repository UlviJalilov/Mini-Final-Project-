document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector(".dark-mode");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-button");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".close-button");
    const leftSection = document.querySelector(".left-section");
    const rightSection = document.querySelector(".right-section");

    
    hamburger.addEventListener("click", function () {
       
        leftSection.style.top = "-100%";  
        rightSection.style.bottom = "-100%";  

      
        setTimeout(function () {
            overlay.classList.add("active");  


            setTimeout(function () {
                leftSection.style.top = "0";  
                rightSection.style.bottom = "0";  
            }, 500); 
        }, ); 
    });

   
    closeButton.addEventListener("click", function () {
    
        leftSection.style.top = "-100%"; 
        rightSection.style.bottom = "-100%";  

       
        setTimeout(function () {
            overlay.classList.remove("active");  
        }, 500);  
    });
});



window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY; 
    let scaleValue = 1 + scrollTop * 0.0001; 

    let img = document.querySelector(".video-img img");
    if (img) {
        img.style.transform = `scale(${scaleValue})`;
    }
});



function openVideo() {
    let videoUrl = "https://www.youtube.com/embed/qYgdnM3BC3g?autoplay=1";
    document.getElementById("youtubeFrame").src = videoUrl;
    document.getElementById("videoModal").style.display = "flex"; 
}

function closeVideo() {
    document.getElementById("videoModal").style.display = "none"; 
    document.getElementById("youtubeFrame").src = ""; 
}


let floatingImage = document.querySelector(".floating-image");
let initialTop = 450;
let lastScrollTop = window.scrollY;
let targetTop = initialTop; 
let currentTop = initialTop; 

function updatePosition() {
    currentTop += (targetTop - currentTop) * 0.07; 
    floatingImage.style.top = `${currentTop}px`;

    if (Math.abs(targetTop - currentTop) > 0.5) {
        requestAnimationFrame(updatePosition);
    }
}

document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    targetTop = initialTop - scrollTop * 0.2; 
  
    if (Math.abs(targetTop - currentTop) > 0.5) {
        requestAnimationFrame(updatePosition);
    }
});


window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY; 
    let scaleValue = 1 + scrollTop * 0.0001; 

    
    document.querySelectorAll(".work-img img").forEach(img => {
        img.style.transform = `scale(${scaleValue})`; 
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function (event) {
            let href = this.getAttribute("href");

            if (href.startsWith("#") || href === "") return;

            event.preventDefault();
            document.body.style.transition = "opacity 0.5s ease-out";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease-in";
        document.body.style.opacity = "1";
    }, 10);
});



