function to_main(){
    document.getElementsByClassName("main")[0].style.display = "block";
    document.getElementsByClassName("about")[0].style.display = "none";
    document.getElementsByClassName("btn1")[0].disabled = true;
    document.getElementsByClassName("btn1")[1].disabled = false;
}

function to_about(){
    document.getElementsByClassName("main")[0].style.display = "none";
    document.getElementsByClassName("about")[0].style.display = "block";
    document.getElementsByClassName("btn1")[0].disabled = false;
    document.getElementsByClassName("btn1")[1].disabled = true;
}