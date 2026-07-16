const menuBtn=document.getElementById("menuBtn");

const overlay=document.getElementById("mobileOverlay");

const closeBtn=document.getElementById("closeMenu");

menuBtn.addEventListener("click",()=>{

    overlay.classList.add("active");

    document.body.style.overflow="hidden";

});

closeBtn.addEventListener("click",()=>{

    overlay.classList.remove("active");

    document.body.style.overflow="";

});

document.querySelectorAll(".overlay-nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        overlay.classList.remove("active");

        document.body.style.overflow="";

    });

});