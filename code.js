var sklep=
    '<div id="box">\
        <div id="slide">\
            <section class="container">\
                        <div class="slider-wrapper">\
                            <div class="slider">\
                                <img id="slide-1" src="/img/Bee.png"/>\
                                <img id="slide-2" src="img/Bee1.png"/>\
                                <img id="slide-3" src="img/Bee2.png"/>\
                            </div>\
                            <div class="slider-nav">\
                                <a href="#slide-1"></a>\
                                <a href="#slide-2"></a>\
                                <a href="#slide-3"></a>\
                            </div>\
                        </div>\
            </section>\
        </div>\
        <div id="b"><div id="p"onclick="Wielokwiatowy()"><h2>Wielokwiatowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Rzepakowy()"><h2>Rzepakowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Lipowy()"><h2>Lipowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Wrzosowy()"><h2>Wrzosowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Nawłociowy()"><h2>Nawłociowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Spadziowy()"><h2>Spadziowy</h2></div></div>\
    </div>'
function Sklep(){
    if (sklep){
        document.getElementById("box").innerHTML = sklep;
    } 
}
var galeria=
    '<div id="box">\
        <div id="slide">\
            <section class="container">\
                    <div class="slider-wrapper">\
                        <div class="slider">\
                            <img id="slide-1" src="/img/Bee.png"/>\
                            <img id="slide-2" src="img/Bee1.png"/>\
                            <img id="slide-3" src="img/Bee2.png"/>\
                        </div>\
                        <div class="slider-nav">\
                            <a href="#slide-1"></a>\
                            <a href="#slide-2"></a>\
                            <a href="#slide-3"></a>\
                        </div>\
                    </div>\
            </section>\
        </div>\
        <h2>Galeria</h2><br><br><br>\
        <div id="galeria">\
            <div id="b"><div id="z"onclick="Wielokwiatowy()"><h2>Wielokwiatowy</h2></div></div>\
            <div id="b"><div id="z"onclick="Rzepakowy()"><h2>Rzepakowy</h2></div></div>\
            <div id="b"><div id="z"onclick="Lipowy()"><h2>Lipowy</h2></div></div>\
        </div>\
    </div>';
function Galeria(){
    if (galeria){
        document.getElementById("box").innerHTML = galeria;
    } 
}
var kontakt=
    '<div id="box">\
        <div id="slide">\
            <section class="container">\
                        <div class="slider-wrapper">\
                            <div class="slider">\
                                <img id="slide-1" src="/img/Bee.png"/>\
                                <img id="slide-2" src="img/Bee1.png"/>\
                                <img id="slide-3" src="img/Bee2.png"/>\
                            </div>\
                            <div class="slider-nav">\
                                <a href="#slide-1"></a>\
                                <a href="#slide-2"></a>\
                                <a href="#slide-3"></a>\
                            </div>\
                        </div>\
            </section>\
        </div>\
        <div id="kontakt">\
        <h2>Kontakt</h2>\
        <br>\
        <h3>Adres: Pszczółki 83-032</h3>\
        <h3>Ul: Lipowa 0</h3>\
        <h3>Tel: 000-111-222</h3>\
        </div>\
        <div id="map">\
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18682.277000855418!2d18.676902294659474!3d54.175034911665236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd650669e27185%3A0xf891ecfad52fe441!2zODMtMDMyIFBzemN6w7PFgmtp!5e0!3m2!1spl!2spl!4v1682507915830!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
        </div>\
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
        <div id="b"><div id="p"onclick="Wrzosowy()"><h2>Wrzosowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Nawłociowy()"><h2>Nawłociowy</h2></div></div>\
        <div id="b"><div id="p"onclick="Spadziowy()"><h2>Spadziowy</h2></div></div>\
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

var wrzosowy='<div id="rzepak">Wrzosowy</div>'
function Wrzosowy(){
    if (lipowy){
        document.getElementById("slide").innerHTML = wrzosowy;
    } 
}

var nawłociowy='<div id="rzepak">Nawłociowy</div>'
function Nawłociowy(){
    if (lipowy){
        document.getElementById("slide").innerHTML = nawłociowy;
    } 
}

var spadziowy='<div id="rzepak">Spadziowy</div>'
function Spadziowy(){
    if (lipowy){
        document.getElementById("slide").innerHTML = spadziowy;
    } 
}

