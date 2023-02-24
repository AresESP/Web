const first_section = document.getElementById("first-section");
const second_section = document.getElementById("second-section");
const third_section = document.getElementById("third-section");

const first_section_pointer = document.getElementById("first-section-pointer");
const second_section_pointer = document.getElementById("second-section-pointer");
const third_section_pointer = document.getElementById("third-section-pointer");

document.addEventListener("DOMContentLoaded", navegation);
document.addEventListener("scroll", navegation);
function navegation() {
    if (document.documentElement.scrollTop >= 0 && first_section.offsetHeight/2 > document.documentElement.scrollTop) {
        first_section_pointer.style.backgroundColor = "#2C306F";
        second_section_pointer.style.backgroundColor = "transparent";
        third_section_pointer.style.backgroundColor = "transparent";
    }
    else if(first_section.offsetHeight/2 < document.documentElement.scrollTop && first_section.offsetHeight + second_section.offsetHeight/2 > document.documentElement.scrollTop){
        first_section_pointer.style.backgroundColor = "transparent";
        second_section_pointer.style.backgroundColor = "#2C306F";
        third_section_pointer.style.backgroundColor = "transparent";
    }else{
        first_section_pointer.style.backgroundColor = "transparent";
        second_section_pointer.style.backgroundColor = "transparent";
        third_section_pointer.style.backgroundColor = "#2C306F";
    }
}