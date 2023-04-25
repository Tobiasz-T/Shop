var sklep=
    '<div id="box">\
        <div id="slide">Slide</div>\
        <div id="b"><div id="p"onclick="Wielokwiatowy()"><h2>Wielokwiatowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Rzepakowy()"><h2>Rzepakowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Lipowy()"><h2>Lipowy</h2></div></div>\
        <div id="b"><div id="p">Rzepakowy</div></div>\
        <div id="b"><div id="p">Rzepakowy</div></div>\
        <div id="b"><div id="p">Rzepakowy</div></div>\
    </div>'
function Sklep(){
    if (sklep){
        document.getElementById("box").innerHTML = sklep;
    } 
}
var galeria=
    '<div id="box">\
        <div id="slide">Slide</div>\
        <h2>Galeria</h2>\
    </div>';
function Galeria(){
    if (galeria){
        document.getElementById("box").innerHTML = galeria;
    } 
}
var kontakt=
    '<div id="box">\
        <div id="slide">Slide</div>\
        <h2>Kontakt</h2>\
    </div>';
function Kontakt(){
    if (galeria){
        document.getElementById("box").innerHTML = kontakt;
    } 
}
var wielokwiatowy=
    '<div id="box">\
        <div id="slide">Wielokwiatowy</div>\
        <div id="b"><div id="p"onclick="Rzepakowy()"><h2>Rzepakowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Lipowy()"><h2>Lipowy</h2></div></div>\
        <div id="b"><div id="p">Rzepakowy</div></div>\
        <div id="b"><div id="p">Rzepakowy</div></div>\
        <div id="b"><div id="p">Rzepakowy</div></div>\
    </div>';
function Wielokwiatowy(){
    if (wielokwiatowy){
        document.getElementById("box").innerHTML = wielokwiatowy;
    } 
}

var rzepakowy=
'<div id="rzepak">Rzepak</div>'
function Rzepakowy(){
    if (rzepakowy){
        document.getElementById("slide").innerHTML = rzepakowy;
    } 
}

var lipowy='<div id="rzepak">Lipowy</div>'
function Lipowy(){
    if (lipowy){
        document.getElementById("slide").innerHTML = lipowy;
    } 
}
