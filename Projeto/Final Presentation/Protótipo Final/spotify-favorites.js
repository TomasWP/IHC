document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("higher-power");
    var imageaudio = document.getElementById("music-coldplay");
    var imageaudio2 = document.getElementById("music-the-script");
    var imageaudio3 = document.getElementById("coldplay-music");
    var audiotitle = document.getElementById("title")
    var audioauthor = document.getElementById("author")
    var selection = document.getElementById("selection");
    var progressBarContainer = document.getElementById('progressBarContainer');
    var progressBar = document.getElementById('progressBar');
    var avancarDiv = document.querySelector('.avancar');
    var retrocederDiv = document.querySelector('.retroceder');

    var isDragging = false;
    var ball = null;

    progressBarContainer.addEventListener('mousedown', function(event) {
        isDragging = true;
        createBall(event.clientX);
        updateAudioPosition(event.clientX);
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            updateAudioPosition(event.clientX);
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        removeBall();
    });

    function createBall(clientX) {
        if (!ball) {
            ball = document.createElement('div');
            ball.className = 'ball';
            progressBarContainer.appendChild(ball);
        }
        ball.style.left = clientX - progressBarContainer.getBoundingClientRect().left + 'px';
    }

    function removeBall() {
        if (ball) {
            progressBarContainer.removeChild(ball);
            ball = null;
        }
    }

    function updateAudioPosition(clientX) {
        var boundingRect = progressBarContainer.getBoundingClientRect();
        var offsetX = clientX - boundingRect.left;
        var progressBarWidth = boundingRect.width;
        var percentage = offsetX / progressBarWidth;
        audio.currentTime = audio.duration * percentage;
        progressBar.style.width = (percentage * 100) + '%';
        ball.style.left = offsetX + 'px';
    }

    avancarDiv.addEventListener('click', function() {

        selection.style.top = 64 + '%';


        if(audio.paused){
            playImage.src = "assets/play.png";
            imageaudio.src = "assets/the script.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/superheroes.mp3";        // Defina o src do elemento de áudio para a música "thinking-out-loud"
            audiotitle.textContent = "Superheroes";
            audioauthor.textContent = "The Script";
        }else{
            playImage.src = "assets/pausa.png";
            imageaudio.src = "assets/the script.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/superheroes.mp3";        // Defina o src do elemento de áudio para a música "thinking-out-loud"
            audiotitle.textContent = "Superheroes";
            audioauthor.textContent = "The Script";
            audio.play();
        }
    });
    
    retrocederDiv.addEventListener('click', function() {
        // Defina o src do elemento de áudio para a música "thinking-out-loud"

        selection.style.top = 56 + '%';

        if(audio.paused){
            playImage.src = "assets/play.png";
            imageaudio.src = "assets/coldplay album.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/higher-power.mp3";        // Defina o src do elemento de áudio para a música "thinking-out-loud"
            audiotitle.textContent = "Higher Power";
            audioauthor.textContent = "Coldplay";
        }else{
            playImage.src = "assets/pausa.png";
            imageaudio.src = "assets/coldplay album.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/higher-power.mp3";
            audiotitle.textContent = "Higher Power";
            audioauthor.textContent = "Coldplay";
            audio.play();
        }
    });

    imageaudio2.addEventListener('click', function() {
        // Defina o src do elemento de áudio para a música "thinking-out-loud"
        selection.style.top = 64 + '%';
        
        if(audio.paused){
            playImage.src = "assets/play.png";
            imageaudio.src = "assets/the script.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/superheroes.mp3";        // Defina o src do elemento de áudio para a música "thinking-out-loud"
            audiotitle.textContent = "Superheroes";
            audioauthor.textContent = "The Script";
        }else{
            playImage.src = "assets/pausa.png";
            imageaudio.src = "assets/the script.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/superheroes.mp3";        // Defina o src do elemento de áudio para a música "thinking-out-loud"
            audiotitle.textContent = "Superheroes";
            audioauthor.textContent = "The Script";
            audio.play();
        }
    });

    imageaudio3.addEventListener('click', function() {
        // Defina o src do elemento de áudio para a música "thinking-out-loud"
        selection.style.top = 56 + '%';
        
        if(audio.paused){
            playImage.src = "assets/play.png";
            imageaudio.src = "assets/coldplay album.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/higher-power.mp3";        // Defina o src do elemento de áudio para a música "thinking-out-loud"
            audiotitle.textContent = "Higher Power";
            audioauthor.textContent = "Coldplay";
        }else{
            playImage.src = "assets/pausa.png";
            imageaudio.src = "assets/coldplay album.png"; // Altera a imagem ao avançar para "thinking-out-loud"
            audio.src = "assets/higher-power.mp3";
            audiotitle.textContent = "Higher Power";
            audioauthor.textContent = "Coldplay";
            audio.play();
        }
    });

    audio.addEventListener('loadedmetadata', function() {
        var duration = audio.duration;
        var durationMinutes = Math.floor(duration / 60);
        var durationSeconds = Math.floor(duration % 60);
        document.getElementById('duration').textContent = durationMinutes + ':' + (durationSeconds < 10 ? '0' : '') + durationSeconds;
    });

    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;
        var currentMinutes = Math.floor(currentTime / 60);
        var currentSeconds = Math.floor(currentTime % 60);
        document.getElementById('currentTime').textContent = currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;

        var percentage = (currentTime / audio.duration) * 100;
        progressBar.style.width = percentage + '%';
    });
});


function playAudio() {
    var x = document.getElementById("higher-power");  
    x.play();
}

function muteAudio() {
    var x = document.getElementById("higher-power");
    var muteImage = document.getElementById("muteImage");

    if (x.muted) {
        x.muted = false;
        muteImage.src = "assets/volume up.png"; // altera para a imagem de áudio ligado
        muteImage.alt = "Mute";
    } else {
        x.muted = true;
        muteImage.src = "assets/mute.png"; // altera para a imagem de áudio desligado
        muteImage.alt = "Unmute";
    }
}

function increaseVolume() {
    var x = document.getElementById("higher-power");
    var div_volume_level = document.getElementById("volume-level");
    if (x.volume < 1) {
        x.volume += 0.05; // aumenta o volume em 5%
        div_volume_level.textContent = Math.round(x.volume*100)+" %";    
    }

    if (x.muted) {
        x.muted = false;
        muteImage.src = "assets/volume up.png"; // altera para a imagem de áudio ligado
        muteImage.alt = "Mute";
    }
}

function decreaseVolume() {
    var x = document.getElementById("higher-power");
    var div_volume_level = document.getElementById("volume-level");
    if (x.volume > 0) {
        x.volume -= 0.05; // reduz o volume em 5%

        div_volume_level.textContent = Math.round(x.volume*100)+" %"; 
    }

    if (x.muted) {
        x.muted = false;
        muteImage.src = "assets/volume up.png"; // altera para a imagem de áudio ligado
        muteImage.alt = "Mute";
    }
}

function playSong() {
    var x = document.getElementById("higher-power");
    var playImage = document.getElementById("playImage");
    
    if (x.paused) {
        x.play();
        playImage.src = "assets/pausa.png";
        playImage.alt = "Pause";
    } else {
        x.pause();
        playImage.src = "assets/play.png";
        playImage.alt = "Play";
    }

    console.log(x.paused);
}

document.addEventListener("DOMContentLoaded", function() {

    var x = document.getElementById("higher-power");
    var div_volume_level = document.getElementById("volume-level");
    div_volume_level.textContent = Math.round(x.volume*100)+" %"; 
});