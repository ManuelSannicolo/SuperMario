import { changeToLevelSelection } from './main.js';

document.addEventListener("DOMContentLoaded", () => {
    var gear = document.querySelector("#gear");
    var returnHomeImg = document.querySelector("#returnHome");
    var resetImg = document.querySelector("#reset");

    gear.addEventListener("mouseenter", rotateGear);
    gear.addEventListener("mouseleave", reverseRotateGear)
    gear.addEventListener("click", gearClicked);
    returnHomeImg.addEventListener("click", returnHome);
    resetImg.addEventListener("click", reset);
});

function returnHome(){
    changeToSelectLevel()
}


function rotateGear(){
    gsap.to(gear,{
        rotation:60,
        scale:1.1,
        duration:0.2,
        srcub:3,
    })
}

function reverseRotateGear(){
    gsap.to(gear,{
        rotation:0,
        scale:1.0,
        duration:0.2,
        srcub:3,
    })
}

var openOverlay=false;
function gearClicked(){
    let overlay = document.getElementById("overlay");
    if(!openOverlay){
        overlay.style.display="block";
        openOverlay=true
    }else{
        overlay.style.display="none";
        openOverlay=false

    }
}

function reset(){
    let answer = confirm("Confermando verranno eliminati i progressi già fatti. Sei sicuro di eseguire il reset?")

    if(answer){
        localStorage.setItem('level2unlocked', false);
        localStorage.setItem('level3unlocked', false);
        localStorage.setItem('level4unlocked', false);
        localStorage.setItem('level5unlocked', false);
        changeToLevelSelection()
    }
}