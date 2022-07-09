// alert("Esta página todavía no está terminada")
let control = 0


function openMenu(){
    if (control == 0){
        document.querySelector("body").style.overflow = "hidden";    
        document.querySelector("#navegationdiv__menu").style.display = "block";
        control = 1;   
    }
    else{
        document.querySelector("body").style.overflow = "auto";    
        document.querySelector("#navegationdiv__menu").style.display = "none";
        control = 0;
    }
}