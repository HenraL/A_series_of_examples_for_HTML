// issu du site https://www.cefim.eu/balise-html5-audio-comment-lutiliser-personnaliser/ 
$(document).ready(function(){
    //Stockage des éléments HTML
    //le morceau mp3
    var $musique = $('audio')[0];

    //controls
    var $play = $('.play');
    var $pause = $('.pause');
    var $stop = $('.stop');

    //événements
    $play.click(jouer);
    $pause.click(attente);
    $stop.click(arret);

    // Fonctions
    function jouer(){
        $musique.play();
    }
    function attente(){
        $musique.pause();
    }
    function arret(){
        $musique.pause();
        $musique.currentTime=0;
    }
});


//<div class="mejs-controls">
//    <div class="mejs-button mejs-playpause-button mejs-play">
//        <button type="button" aria-controls="mep_2" title="Play/Pause" aria-label="Play/Pause">
//        </button>
//    </div>
//    <div class="mejs-time-rail" style="width: 88px;">
//        <span class="mejs-time-total" style="width: 78px;">
//            <span class="mejs-time-buffering" style="display: none;"></span>
//            <span class="mejs-time-loaded" style="width: 6.00762px;"></span>
//            <span class="mejs-time-current" style="width: 0px;"></span>
//            <span class="mejs-time-handle" style="left: -7px;"></span>
//            <span class="mejs-time-float">
//                <span class="mejs-time-float-current">00:00</span>
//                <span class="mejs-time-float-corner"></span>
//            </span>
//        </span>
//    </div>
//    <div class="mejs-button mejs-volume-button mejs-mute">
//        <button type="button" aria-controls="mep_2" title="Mute Toggle" aria-label="Mute Toggle"></button>
//    </div>
//    <div class="mejs-horizontal-volume-slider mejs-mute">
//        <div class="mejs-horizontal-volume-total"></div>
//        <div class="mejs-horizontal-volume-current" style="width: 40px;"></div>
//        <div class="mejs-horizontal-volume-handle" style="left: 27px;"></div>
//    </div>
//</div>