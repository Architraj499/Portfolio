const menuBtn = document.getElementById("menuBtn");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click",()=>{

    mobileOverlay.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if(mobileOverlay.classList.contains("active")){

        icon.className="fa-solid fa-xmark";

    }else{

        icon.className="fa-solid fa-bars";

    }

});

document.querySelectorAll(".overlay-nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileOverlay.classList.remove("active");

        menuBtn.querySelector("i").className="fa-solid fa-bars";

    });

});