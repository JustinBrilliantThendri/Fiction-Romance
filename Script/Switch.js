var idx_eps = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51],
    [52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
    [62, 63, 64, 65, 66],
    [67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
    [77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
    [97, 98, 99, 100, 101, 102, 103, 104, 105, 106],
    [107, 108, 109, 110, 111, 112]
];

var title = [
    "Introduction",
    "Episode 1 : Perpisahan",
    "Episode 2 : Masuk SMK",
    "Episode 3 : Pertemuan",
    "Episode 4 : Pertemuan Mereka",
    "Episode 5 : Gak Apa Kan?!",
    "Episode 6 : Rivals",
    "Episode 7 : Sasa Story",
    "Episode 8 : Hari Pertama",
    "Episode 9 : Teman Baru",
    "Episode 10 : Memulai Pelajaran",
    "Episode 11 : Spill The Tea",
    "Bonus"
];

var idx_title = 0;
var idx_page = 0;

function change(){
    for(i = 0; i <= 112; i++){
        document.getElementsByClassName("image")[i].style.display = "none";
    }
    document.getElementById("title").innerHTML = title[idx_title];
    document.getElementsByClassName("image")[idx_eps[idx_title][idx_page]].style.display = "inline-block";
}

function p_eps(){
    idx_title--;
    if(idx_title == 0){
        document.getElementsByClassName("btn3")[0].disabled = true;
        document.getElementsByClassName("btn3")[1].disabled = false;
    }else{
        document.getElementsByClassName("btn3")[0].disabled = false;
        document.getElementsByClassName("btn3")[1].disabled = false;
    }
    idx_page = 0;
    document.getElementsByClassName("btn3")[2].disabled = true;
    document.getElementsByClassName("btn3")[3].disabled = false;
    change();
}

function n_eps(){
    idx_title++;
    if(idx_title == (title.length - 1)){
        document.getElementsByClassName("btn3")[0].disabled = false;
        document.getElementsByClassName("btn3")[1].disabled = true;
    }else{
        document.getElementsByClassName("btn3")[0].disabled = false;
        document.getElementsByClassName("btn3")[1].disabled = false;
    }
    idx_page = 0;
    document.getElementsByClassName("btn3")[2].disabled = true;
    document.getElementsByClassName("btn3")[3].disabled = false;
    change();
}

function p_page(){
    idx_page--;
    if(idx_page == 0){
        document.getElementsByClassName("btn3")[2].disabled = true;
        document.getElementsByClassName("btn3")[3].disabled = false;
    }else{
        document.getElementsByClassName("btn3")[2].disabled = false;
        document.getElementsByClassName("btn3")[3].disabled = false;
    }
    change();
}

function n_page(){
    idx_page++;
    if(idx_page == (idx_eps[idx_title].length - 1)){
        document.getElementsByClassName("btn3")[2].disabled = false;
        document.getElementsByClassName("btn3")[3].disabled = true;
    }else{
        document.getElementsByClassName("btn3")[2].disabled = false;
        document.getElementsByClassName("btn3")[3].disabled = false;
    }
    change();
}