function passwordCheck() {

    var init = document.getElementById("initpass").value;
    var confirm = document.getElementById("confirmpass").value;


    if (init.length < 8) {
        alert("Too short! The password must be at least 8 letters!")
    } else if (confirm.length < 8) {
        alert("Not a match!")
    } else if (init != confirm) {
        alert("Not a match!")
    } else {
        alert("Success!")
    }
}

function changeText() {
    var borderR = document.getElementById("border_R").value;
    var borderG = document.getElementById("border_G").value;
    var borderB = document.getElementById("border_B").value;
    
    var borderW = document.getElementById("border_width").value;
    
    var bgR = document.getElementById("bg_R").value;
    var bgG = document.getElementById("bg_G").value;
    var bgB = document.getElementById("bg_B").value;

    var samText = document.getElementById("sampleText");
    samText.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    samText.style.borderWidth = border_width
    samText.style.backgroundColor = `rgb(${bgR},${bgG},${bgB})`;
}

