document.addEventListener("DOMContentLoaded", () => {
    var gear = document.querySelector("#gear");
    var returnHomeImg = document.querySelector("#returnHome");
    var resetImg = document.querySelector("#reset");

    var resetOverlay = document.querySelector("#resetOverlay");
    var confirmReset = document.querySelector("#confirmReset");
    var cancelReset = document.querySelector("#cancelReset");

    gear.addEventListener("mouseenter", rotateGear);
    gear.addEventListener("mouseleave", reverseRotateGear);
    gear.addEventListener("click", gearClicked);
    returnHomeImg.addEventListener("click", returnHome);
    resetImg.addEventListener("click", openResetOverlay);
    confirmReset.addEventListener("click", reset);
    cancelReset.addEventListener("click", closeResetOverlay);


    var nextPage = document.querySelector("#nextPage");
    var prevPage = document.querySelector("#previousPage");


    nextPage.addEventListener("click", () => {
        page1.style.display = "none";
        page2.style.display = "flex";
    });

    prevPage.addEventListener("click", () => {
        page2.style.display = "none";
        page1.style.display = "flex";
    });


    displayScores();


});

function returnHome(){
    console.log("come back home")
    window.location.reload();
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


function openResetOverlay() {
    document.querySelector("#resetOverlay").style.display = "flex";
}

function closeResetOverlay() {
    document.querySelector("#resetOverlay").style.display = "none";
}



function reset(){
    localStorage.setItem('level2unlocked', false);
    localStorage.setItem('level3unlocked', false);
    localStorage.setItem('level4unlocked', false);
    localStorage.setItem('level5unlocked', false);
    localStorage.setItem('score', 0);
    returnHome();
    closeResetOverlay();
    saveScore(localStorage.getItem('score'));
}


export function saveScore(totalScore) {
    if (!totalScore) return;

    // Recupera la lista di punteggi dal LocalStorage
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    // Aggiunge il nuovo punteggio alla lista
    
    let date  = new Date;

    let date_string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    let victory = localStorage.getItem('victory') === 'true' ? "Yes" : "No";

    scores.push({ score: totalScore, date: date_string, completed: victory });

    //salvataggio nuovo punteggio
    localStorage.setItem('scores', JSON.stringify(scores));

    displayScores();
}


function displayScores() {
    // Ottieni la tabella dove inserire i punteggi
    let scoreTable = document.querySelector("#data_table tbody");

    // Recupera i punteggi da LocalStorage
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    // Pulisci la tabella prima di riempirla
    scoreTable.innerHTML = '';

    // Aggiungi ogni punteggio alla tabella
    scores.forEach(data => {
        let row = scoreTable.insertRow();
        let dateCell = row.insertCell(0);
        let scoreCell = row.insertCell(1);
        let completedCell = row.insertCell(2);

        dateCell.textContent = data.date;
        scoreCell.textContent = data.score;
        completedCell.textContent = data.completed;
    });
    console.log("Scores displayed:", scores);
}




function resetScores() {
    localStorage.removeItem('scores'); 
    displayScores(); 
}