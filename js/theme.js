const themeBtn = document.getElementById("themeToggle");
const icon = themeBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    icon.className = "fa-solid fa-sun";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    const light = document.body.classList.contains("light");

    if(light){

        icon.className = "fa-solid fa-sun";

        localStorage.setItem("theme","light");

    }else{

        icon.className = "fa-solid fa-moon";

        localStorage.setItem("theme","dark");

    }

});