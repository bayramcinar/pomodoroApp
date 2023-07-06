var start = document.querySelector(".start");
var yirmibesmin = document.querySelector(".yirmibesmin");
var otuzmin = document.querySelector(".otuzmin");
var onehour = document.querySelector(".onehour");
var sections = document.querySelector(".sections");
var timeArea = document.querySelector(".timeArea");
var pianoInput = document.querySelector("#piano");
var piano = document.querySelector(".piano");
var rainInput = document.querySelector("#rain");
var rain = document.querySelector(".rain");
var meditationInput = document.querySelector("#meditation");
var meditation = document.querySelector(".meditation");
var stop = document.querySelector(".stop");
var body = document.querySelector("body");
var focus = document.querySelector(".focus");
var for5minBreak = document.querySelector("#for5minBreak");
var for10minBreak = document.querySelector("#for10minBreak");
var for15minBreak = document.querySelector("#for15minBreak");
var alarm =document.querySelector(".alarm");
var stopTime = document.querySelector(".stopTime");
var restart = document.querySelector(".restart");

restart.addEventListener("click",function(){
   
    function reloadPage() {
        location.reload();
    }

    reloadPage();
        
});

var pianoInputcheck = document.querySelector("#piano");
var rainInputcheck = document.querySelector("#rain");
var meditationInputcheck = document.querySelector("#meditation");

pianoInputcheck.addEventListener("change", function() {
    if (this.checked) {
        rainInputcheck.disabled = true;
        meditationInputcheck.disabled = true;
    } else {
        rainInputcheck.disabled = false;
        meditationInputcheck.disabled = false;
    }
});
rainInputcheck.addEventListener("change", function() {
    if (this.checked) {
        pianoInputcheck.disabled = true;
        meditationInputcheck.disabled = true;
    } else {
        pianoInputcheck.disabled = false;
        meditationInputcheck.disabled = false;
    }
});
meditationInputcheck.addEventListener("change", function() {
    if (this.checked) {
        pianoInputcheck.disabled = true;
        rainInputcheck.disabled = true;
    } else {
        pianoInputcheck.disabled = false;
        rainInputcheck.disabled = false;
    }
});

var yirmibesminCheckbox = document.querySelector(".yirmibesmin");
var otuzminCheckbox = document.querySelector(".otuzmin");
var onehourCheckbox = document.querySelector(".onehour");



yirmibesminCheckbox.addEventListener("change", function() {
    if (this.checked) {
        otuzminCheckbox.disabled = true;
        onehourCheckbox.disabled = true;
    } else {
        otuzminCheckbox.disabled = false;
        onehourCheckbox.disabled = false;
    }
});

otuzminCheckbox.addEventListener("change", function() {
    if (this.checked) {
        yirmibesminCheckbox.disabled = true;
        onehourCheckbox.disabled = true;
    } else {
        yirmibesminCheckbox.disabled = false;
        onehourCheckbox.disabled = false;
    }
});

onehourCheckbox.addEventListener("change", function() {
    if (this.checked) {
        yirmibesminCheckbox.disabled = true;
        otuzminCheckbox.disabled = true;
    } else {
        yirmibesminCheckbox.disabled = false;
        otuzminCheckbox.disabled = false;
    }
});

var for5minBreakcheckbox = document.querySelector("#for5minBreak");
var for10minBreakcheckbox = document.querySelector("#for10minBreak");
var for15minBreakcheckbox = document.querySelector("#for15minBreak");



for5minBreakcheckbox.addEventListener("change", function() {
    if (this.checked) {
        for10minBreakcheckbox.disabled = true;
        for15minBreakcheckbox.disabled = true;
    } else {
        for10minBreakcheckbox.disabled = false;
        for15minBreakcheckbox.disabled = false;
    }
});

for10minBreakcheckbox.addEventListener("change", function() {
    if (this.checked) {
        for5minBreakcheckbox.disabled = true;
        for15minBreakcheckbox.disabled = true;
    } else {
        for5minBreakcheckbox.disabled = false;
        for15minBreakcheckbox.disabled = false;
    }
});

for15minBreakcheckbox.addEventListener("change", function() {
    if (this.checked) {
        for5minBreakcheckbox.disabled = true;
        for10minBreakcheckbox.disabled = true;
    } else {
        for5minBreakcheckbox.disabled = false;
        for10minBreakcheckbox.disabled = false;
    }
});

start.addEventListener("click", function() {
    if(!yirmibesminCheckbox.checked && !otuzminCheckbox.checked && !onehourCheckbox.checked){
        alert("Select a pomodoro time !");
        return;
    }
        
    if(!for5minBreakcheckbox.checked && !for10minBreakcheckbox.checked && !for15minBreakcheckbox.checked){
        alert("Select a break time !");
        return;
    }

    body.style.backgroundColor = "indianred";
    if (yirmibesmin.checked) {
        geriyeSay25mins();
    } else if (otuzmin.checked) {
        geriyeSay30mins();
    } else if (onehour.checked) {
        geriyeSay1hour();
    }
    
    if (pianoInput.checked) {
        piano.play();
        stop.style.display = "block";
        stopTime.style.marginLeft = "0px";  
        stopTime.style.marginRight = "auto";
        
        stop.addEventListener("click", function() {
            if (piano.paused) {
                piano.play();
                stop.innerHTML = `<img src="img/pause.png" alt="">`;
            } else {
                piano.pause();
                stop.innerHTML = `<img src="img/play.png" alt="">`;
            }
        });
    } else if (rainInput.checked) {
        rain.play();
        stop.style.display = "block";
        stopTime.style.marginLeft = "0px";  
        stopTime.style.marginRight = "auto";
        
        stop.addEventListener("click", function() {
            if (rain.paused) {
                rain.play();
                stop.innerHTML = `<img src="img/pause.png" alt="">`;
            } else {
                rain.pause();
                stop.innerHTML = `<img src="img/play.png" alt="">`;
            }
        });
    } else if (meditationInput.checked) {
        meditation.play();
        stop.style.display = "block";
        stopTime.style.marginLeft = "0px";  
        stopTime.style.marginRight = "auto";
        
        stop.addEventListener("click", function() {
            if (meditation.paused) {
                meditation.play();
                stop.innerHTML = `<img src="img/pause.png" alt="">`;
            } else {
                meditation.pause();
                stop.innerHTML = `<img src="img/play.png" alt="">`;
            }
        });
    }else{
        stopTime.style.marginLeft = "auto";
        stopTime.style.marginRight = "auto";

    }
    
    sections.style.display = "none";
    timeArea.style.display = "block";
});



var süre25 = 1500;
var geriyeSayTimeout25;
var isCounting25 = true;

function geriyeSay25mins() {
    var dakika = Math.floor(süre25 / 60);
    var saniye = süre25 % 60;

    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    document.querySelector(".time").textContent = dakika + ":" + saniye;
    süre25--;

    if (süre25 >= 0) {
        geriyeSayTimeout25 = setTimeout(geriyeSay25mins, 1000);
    } else {
        playAlarm();
        if (for5minBreak.checked) {
            geriyeSaybreak5();
        } else if (for10minBreak.checked) {
            geriyeSaybreak10();
        } else if (for15minBreak.checked) {
            geriyeSaybreak15();
        }
    }
    stopTime.addEventListener("click",toggleTime25);
}

function toggleTime25() {
    if (isCounting25) {
        clearTimeout(geriyeSayTimeout25);
        isCounting25 = false;
        stopTime.innerHTML = `<img src="img/playTime.png" alt="">`;
    } else {
        geriyeSay25mins();
        isCounting25 = true;
        stopTime.innerHTML = `<img src="img/pauseTime.png" alt="">`;
    }
}
function toggleTime30() {
    if (isCounting30) {
        clearTimeout(geriyeSayTimeout30);
        isCounting30 = false;
        stopTime.innerHTML = `<img src="img/playTime.png" alt="">`;
    } else {
        geriyeSay30mins();
        isCounting30 = true;
        stopTime.innerHTML = `<img src="img/pauseTime.png" alt="">`;
    }
}
function toggleTime1() {
    if (isCounting1) {
        clearTimeout(geriyeSayTimeout1);
        isCounting1 = false;
        stopTime.innerHTML = `<img src="img/playTime.png" alt="">`;
    } else {
        geriyeSay1hour();
        isCounting1 = true;
        stopTime.innerHTML = `<img src="img/pauseTime.png" alt="">`;
    }
}

function toggleTime5() {
    if (isCounting5) {
        clearTimeout(gerisaybreak5);
        isCounting5 = false;
        stopTime.innerHTML = `<img src="img/playTime.png" alt="">`;
    } else {
        gerisaybreak5();
        isCounting5 = true;
        stopTime.innerHTML = `<img src="img/pauseTime.png" alt="">`;
    }
}
function toggleTime10() {
    if (isCounting10) {
        clearTimeout(gerisaybreak10);
        isCounting10 = false;
        stopTime.innerHTML = `<img src="img/playTime.png" alt="">`;
    } else {
        gerisaybreak10();
        isCounting10 = true;
        stopTime.innerHTML = `<img src="img/pauseTime.png" alt="">`;
    }
}
function toggleTime15() {
    if (isCounting15) {
        clearTimeout(gerisaybreak15);
        isCounting15 = false;
        stopTime.innerHTML = `<img src="img/playTime.png" alt="">`;
    } else {
        gerisaybreak15();
        isCounting15 = true;
        stopTime.innerHTML = `<img src="img/pauseTime.png" alt="">`;
    }
}

var süre30 = 1800;
var geriyeSayTimeout30; 
var isCounting30 = true;
    
function geriyeSay30mins() {
        var dakika = Math.floor(süre30 / 60);
        var saniye = süre30 % 60;
    
        dakika = dakika < 10 ? "0" + dakika : dakika;
        saniye = saniye < 10 ? "0" + saniye : saniye;
    
        document.querySelector(".time").textContent = dakika + ":" + saniye;
        süre30--;
    
        if (süre30 >= 0) {
            geriyeSayTimeout30 = setTimeout(geriyeSay30mins, 1000);
        }else{
            playAlarm();
            if(for5minBreak.checked){
                geriyeSaybreak5();
            }else if(for10minBreak.checked){
                geriyeSaybreak10();
            }else if(for15minBreak.checked){
                geriyeSaybreak15();
            }
        }
        
        stopTime.addEventListener("click",toggleTime30);
}
var süre1 = 3600;
var geriyeSayTimeout1; 
var isCounting1 = true;

function geriyeSay1hour() {
        var dakika = Math.floor(süre1 / 60);
        var saniye = süre1 % 60;
    
        dakika = dakika < 10 ? "0" + dakika : dakika;
        saniye = saniye < 10 ? "0" + saniye : saniye;
    
        document.querySelector(".time").textContent = dakika + ":" + saniye;
        süre1--;
    
        if (süre1 >= 0) {
            geriyeSayTimeout1 = setTimeout(geriyeSay1hour, 1000);
        }else{
            playAlarm();
            if(for5minBreak.checked){
                geriyeSaybreak5();
            }else if(for10minBreak.checked){
                geriyeSaybreak10();
            }else if(for15minBreak.checked){
                geriyeSaybreak15();
            }
        }
        
        stopTime.addEventListener("click",toggleTime1);
}

var break5 = 300;
var gerisaybreak5;
var isCounting5 = true;
function geriyeSaybreak5() {
    body.style.backgroundColor = "#4A55A2";
    focus.textContent = "Time to break !";
    var dakika = Math.floor(break5 / 60);
    var saniye = break5 % 60;

    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    document.querySelector(".time").textContent = dakika + ":" + saniye;
    break5--;

    if (break5 >= 0) {
        gerisaybreak5 = setTimeout(geriyeSaybreak5, 1000);
    }else{
        playAlarm();
        document.querySelector(".time").style.fontSize = "50px";
        document.querySelector(".time").style.marginLeft = "auto";
        document.querySelector(".time").style.marginRight = "auto";
        document.querySelector(".time").textContent = "Congratulations ! You've done Pomodoro !";
        document.querySelector(".restart").style.display = "block";
        body.style.backgroundColor = "#970bce";
        stop.style.display = "none";
        stopTime.style.display = "none";
        focus.style.display = "none";
    }
    stopTime.addEventListener("click",toggleTime5);
}
var break10 = 600;
var gerisaybreak10;
var isCounting10 = true;
function geriyeSaybreak10() {
    body.style.backgroundColor = "#4A55A2";
    focus.textContent = "Time to break !";
    var dakika = Math.floor(break10 / 60);
    var saniye = break10 % 60;

    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    document.querySelector(".time").textContent = dakika + ":" + saniye;
    break10--;

    if (break10 >= 0) {
        gerisaybreak10 = setTimeout(geriyeSaybreak10, 1000);
    }else{
        playAlarm();
        document.querySelector(".time").style.fontSize = "50px";
        document.querySelector(".time").style.marginLeft = "auto";
        document.querySelector(".time").style.marginRight = "auto";
        document.querySelector(".time").textContent = "Congratulations ! You've done Pomodoro !";
        document.querySelector(".restart").style.display = "block";
        stop.style.display = "none";
        stopTime.style.display = "none";
        focus.style.display = "none";
    }
    stopTime.addEventListener("click",toggleTime10);
}
var break15 = 900;
var gerisaybreak15;
var isCounting15 = true;
function geriyeSaybreak15() {
    body.style.backgroundColor = "#4A55A2";
    focus.textContent = "Time to break !";
    var dakika = Math.floor(break15 / 60);
    var saniye = break15 % 60;

    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    document.querySelector(".time").textContent = dakika + ":" + saniye;
    break15--;

    if (break15 >= 0) {
        gerisaybreak15 = setTimeout(geriyeSaybreak15, 1000);
    }else{
        playAlarm();
        document.querySelector(".time").style.fontSize = "50px";
        document.querySelector(".time").style.marginLeft = "auto";
        document.querySelector(".time").style.marginRight = "auto";
        document.querySelector(".time").textContent = "Congratulations ! You've done Pomodoro !";
        document.querySelector(".restart").style.display = "block";
        stop.style.display = "none";
        stopTime.style.display = "none";
        focus.style.display = "none";
    }
    stopTime.addEventListener("click",toggleTime15);
}
function playAlarm() {
    if (alarm.readyState >= 2) {
        alarm.play();
    } else {
        alarm.addEventListener('loadeddata', function() {
            alarm.play();
        });
    }
}