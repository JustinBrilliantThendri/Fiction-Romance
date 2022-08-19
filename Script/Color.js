var list = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
var count = 0;

function change_color(){
    count++;
    document.getElementsByTagName("fieldset")[0].style.border = "3px solid " + list[count % 6];
    document.getElementsByTagName("fieldset")[0].style.color = list[count % 6];
}

setInterval(change_color, 3000);