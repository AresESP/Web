const menu_ul = document.getElementById("div__ul--menu-ul");
const menu_button = document.getElementById("div__button");

let open = true;

const button_spin = [
    {transform: "rotate(0deg)"},
    {transform: "rotate(360deg)"},
];

const ul_move = [
    {transform: "translateX(-100%)"},
    {transform: "translateX(0%)"},
];


const animation_time = {
    duration: 500,
    iterations: 1,
    fill: 'both',
};

menu_button.addEventListener("click", menuOpen);

const button_animation = menu_button.animate(button_spin, animation_time); 
const ul_animation = menu_ul.animate(ul_move, animation_time);
button_animation.finish();
ul_animation.finish();

function menuOpen() {
    button_animation.reverse();
    ul_animation.reverse();
};