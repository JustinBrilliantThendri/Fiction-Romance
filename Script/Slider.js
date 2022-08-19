var down = true;

function slider(){
    if(down){
        document.getElementsByClassName("menu")[0].style.height = "0px";
        document.getElementsByClassName("btn2")[0].innerHTML = "&#751;";
        down = false;
    }else{
        document.getElementsByClassName("menu")[0].style.height = "45px";
        document.getElementsByClassName("btn2")[0].innerHTML = "&#752;";
        down = true;
    }
}