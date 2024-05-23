// Pega o elemento de áudio
var audio = document.getElementById("thinking-out-loud");

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("thinking-out-loud");

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

        // Salva o tempo atual no localStorage
        localStorage.setItem('currentTime', currentTime);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("thinking-out-loud");
    var progressBar = document.querySelector('.progress');

    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        var percentage = (currentTime / duration) * 100;
        progressBar.style.width = percentage + '%';
    });

    // Recupera o tempo atual do localStorage
    var storedTime = localStorage.getItem('currentTime');
    if (storedTime !== null) {
        audio.currentTime = parseFloat(storedTime);
    }

    // Define o estado inicial do botão de mudo
    setInitialMuteState();
});

function playAudio() {
    var x = document.getElementById("thinking-out-loud");  
    x.play();
}

function muteAudio() {
    var x = document.getElementById("thinking-out-loud");
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

    // Salvar o estado do mute no localStorage
    localStorage.setItem('muteState', x.muted);
}


function increaseVolume() {
    var x = document.getElementById("thinking-out-loud");
    var div_volume_level = document.getElementById("volume-level");
    if (x.volume < 1) {
        x.volume += 0.05; // aumenta o volume em 5%
        // Verifica se o volume ultrapassou 1, se sim, define para 1
        if (x.volume > 1) {
            x.volume = 1;
        }
        div_volume_level.textContent = Math.round(x.volume*100)+" %";    
    }

    if (x.muted) {
        x.muted = false;
        muteImage.src = "assets/volume up.png"; // altera para a imagem de áudio ligado
        muteImage.alt = "Mute";
    }

    // Salvar o nível de volume no localStorage
    localStorage.setItem('volumeLevel', x.volume);
}

function decreaseVolume() {
    var x = document.getElementById("thinking-out-loud");
    var div_volume_level = document.getElementById("volume-level");
    if (x.volume > 0) {
        x.volume -= 0.05; // reduz o volume em 5%
        // Verifica se o volume ficou menor que 0, se sim, define para 0
        if (x.volume < 0) {
            x.volume = 0;
        }
        div_volume_level.textContent = Math.round(x.volume*100)+" %"; 
    }

    if (x.muted) {
        x.muted = false;
        muteImage.src = "assets/volume up.png"; // altera para a imagem de áudio ligado
        muteImage.alt = "Mute";
    }

    // Salvar o nível de volume no localStorage
    localStorage.setItem('volumeLevel', x.volume);
}

// Função para carregar o estado do volume do localStorage quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    // Verificar se há dados salvos no localStorage
    var volumeLevel = localStorage.getItem('volumeLevel');
    
    // Atualizar o nível de volume se existir no localStorage
    if (volumeLevel !== null) {
        var x = document.getElementById("thinking-out-loud");
        var div_volume_level = document.getElementById("volume-level");
        // Define o volume conforme o valor salvo, mas dentro dos limites corretos
        x.volume = parseFloat(volumeLevel);
        if (x.volume > 1) {
            x.volume = 1;
        } else if (x.volume < 0) {
            x.volume = 0;
        }
        div_volume_level.textContent = Math.round(x.volume*100) + " %";
    }
});
        
// Função para definir o estado inicial do botão de mudo com base nos dados salvos no localStorage
function setInitialMuteState() {
    // Verifica se há dados salvos no localStorage
    var muteState = localStorage.getItem('muteState');
    
    // Atualiza o estado do botão de mudo se existir no localStorage
    if (muteState !== null) {
        var x = document.getElementById("thinking-out-loud");
        var muteImage = document.getElementById("muteImage");
        
        // Converte o estado de string para boolean
        var isMuted = muteState === "true";
        
        // Define o estado do botão de mudo e do áudio
        x.muted = isMuted;
        muteImage.src = isMuted ? "assets/mute.png" : "assets/volume up.png";
        muteImage.alt = isMuted ? "Unmute" : "Mute";
    }
}

document.addEventListener("DOMContentLoaded", function() {

    var x = document.getElementById("thinking-out-loud");
    var div_volume_level = document.getElementById("volume-level");
    div_volume_level.textContent = Math.round(x.volume*100)+" %"; 
});

// Chama a função para definir o estado inicial do botão de mudo quando a página é carregada
window.onload = function() {
    setInitialFavorites();
    setInitialMuteState(); // Adiciona esta linha para carregar o estado inicial do botão de mudo
};
