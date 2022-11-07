document.getElementById("div1").style.backgroundColor = RandColor();

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