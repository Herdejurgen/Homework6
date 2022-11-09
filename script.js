document.getElementById("div1").style.backgroundColor = RandColor();
document.getElementById("div2").style.backgroundColor = RandColor();
document.getElementById("div3").style.backgroundColor = RandColor();
document.getElementById("div4").style.backgroundColor = RandColor();

document.getElementById("div1").innerHTML = "Hello World";
CheckColors();

function RandRandomize() {    
    document.getElementById(RandomDiv()).style.backgroundColor = RandColor();
    CheckColors();
}

function Blue() {
    document.getElementById("div1").style.backgroundColor = "blue";
    document.getElementById("div2").style.backgroundColor = "blue";
    document.getElementById("div3").style.backgroundColor = "blue";
    document.getElementById("div4").style.backgroundColor = "blue";
    CheckColors();
}

function CheckColors() {
    if (document.getElementById("div1").style.backgroundColor == document.getElementById("div2").style.backgroundColor && document.getElementById("div2").style.backgroundColor == document.getElementById("div3").style.backgroundColor && document.getElementById("div3").style.backgroundColor == document.getElementById("div4").style.backgroundColor)
    {
        document.getElementById("div4").innerHTML = "The colors are all the same!";
    }
}

function Randomize() {
    document.getElementById("div1").style.backgroundColor = RandColor();
    document.getElementById("div2").style.backgroundColor = RandColor();
    document.getElementById("div3").style.backgroundColor = RandColor();
    document.getElementById("div4").style.backgroundColor = RandColor();
    CheckColors();
}

function RandomDiv() {
    var randr = Math.floor(Math.random() * 4);
    if (randr == 0) {
        return "div1";
    }
    else if (randr == 1) {
        return "div2";
    }
    else if (randr == 2) {
        return "div3";
    }
    else if (randr == 3) {
        return "div4";
    }
}

function RandColor() {
    var rand = Math.floor(Math.random() * 10);
    if (rand==0) {
        return "red";
    }
    else if (rand==1) {
        return "orange";
    }
    else if (rand==2) {
        return "yellow";
    }
    else if (rand == 3) {
        return "lightgreen";
    }
    else if (rand == 4) {
        return "green";
    }
    else if (rand == 5) {
        return "lightblue";
    }
    else if (rand==6) {
        return "blue";
    }
    else if (rand == 7) {
        return "purple";
    }
    else if (rand == 8) {
        return "pink";
    }
    else if (rand == 9) {
        return "grey";
    }
}