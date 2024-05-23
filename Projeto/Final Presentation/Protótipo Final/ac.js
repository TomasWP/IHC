var temperature = 18; // Temperatura inicial

function increaseTemperature() {
    if (temperature < 30) { // Verifica se a temperatura é menor que 30
        temperature++; // Aumenta a temperatura
        updateTemperature(); // Atualiza a exibição da temperatura
    }
}

function decreaseTemperature() {
    if (temperature > 0) { // Verifica se a temperatura é maior que 0
        temperature--; // Diminui a temperatura
        updateTemperature(); // Atualiza a exibição da temperatura
    }
}

function updateTemperature() {
    var temperatureDisplay = document.getElementById("temperature-display");
    var temperatureText = temperature < 10 ? " " + temperature : temperature;
    temperatureDisplay.textContent = temperatureText + " ºC";
}

document.addEventListener("DOMContentLoaded", function() {
    var buttonSelected = document.querySelector(".button-selected");
    updateACLevelImage();

});
var acLevel = 1; // Variável para armazenar o nível do ar condicionado

// Função para aumentar o nível do ar condicionado
function increaseACLevel() {
    if (acLevel < 4) { // Verifica se o nível é menor que 4
        acLevel++; // Aumenta o nível
        updateACLevelImage(); // Atualiza a imagem do ar condicionado
    }
}

// Função para diminuir o nível do ar condicionado
function decreaseACLevel() {
    if (acLevel > 0) { // Verifica se o nível é maior que 0
        acLevel--; // Diminui o nível
        updateACLevelImage(); // Atualiza a imagem do ar condicionado
    }
}

// Função para atualizar a imagem do ar condicionado de acordo com o nível
function updateACLevelImage() {
    var acImage = document.querySelector(".ac-level-img");
    acImage.src = "assets/ac-" + acLevel + ".png"; // Define o src da imagem de acordo com o nível

    // Seleciona o botão A/C
    var buttonSelected = document.querySelector(".button-selected");
    // Se o nível do ar condicionado for 0, define a cor do botão selecionado como branco
    if (acLevel === 0) {
        buttonSelected.style.backgroundColor = "rgb(255, 255, 255)";
        buttonSelected.style.opacity = "0.6";
    } else {
        // Caso contrário, define a cor do botão selecionado como verde
        buttonSelected.style.backgroundColor = "rgb(29, 204, 73)";
        buttonSelected.style.opacity = "1";
    }
}

function toggleACDirection(iconId) {
    var acDirectionIcon = document.getElementById(iconId);
    // Verifica se o nome do arquivo da imagem atual é 'ac direction 1.png'
    if (acDirectionIcon.src.includes("acdirection1.png")) {
        // Se for, troca para 'ac direction 2.png'
        acDirectionIcon.src = "assets/acdirection2.png";
    } else {
        // Caso contrário, troca para 'ac direction 1.png'
        acDirectionIcon.src = "assets/acdirection1.png";
    }
}

function toggleACImage() {
    var acImage = document.querySelector(".ac-level-img");
    

    if (acLevel === 0) {
        // Se o nível do ar condicionado for 0, muda para ac-1.png e torna o botão selecionado verde
        acLevel = 1;
        acImage.src = "assets/ac-1.png";
        buttonSelected.style.backgroundColor = "rgb(29, 204, 73)";
        buttonSelected.style.opacity = "1";
    } else {
        // Se o nível do ar condicionado for diferente de 0, muda para ac-0.png e torna o botão selecionado branco
        acLevel = 0;
        acImage.src = "assets/ac-0.png";
        buttonSelected.style.backgroundColor = "rgb(255, 255, 255)";
        buttonSelected.style.opacity = "0.6";
    }

    updateACLevelImage(); // Atualiza a imagem do ar condicionado e a cor da linha
}

// Função para alternar entre as cores verde e branco no clique do elemento ac-front
document.addEventListener("DOMContentLoaded", function() {
var acFrontButton = document.querySelector(".ac-front");
var acBackButton = document.querySelector(".ac-back");
var acButton = document.querySelector(".ac-button");
var buttonSelected = document.querySelector(".button-selected");
var buttonNotSelected = document.querySelector(".button-not-selected");
var buttonNotSelected2 = document.querySelector(".button-not-selected2");

acFrontButton.addEventListener("click", function() {
    toggleButtonColor(buttonNotSelected);
});

acBackButton.addEventListener("click", function() {
    toggleButtonColor(buttonNotSelected2);
});

acButton.addEventListener("click", function() {
    toggleButtonState(buttonSelected);
});

function toggleButtonColor(button) {
    var currentColor = button.style.backgroundColor;

    if (currentColor === "rgb(255, 255, 255)" || currentColor === "") {
        button.style.backgroundColor = "rgb(29, 204, 73)";
        button.style.opacity = "1";
    } else {
        button.style.backgroundColor = "rgb(255, 255, 255)";
        button.style.opacity = "0.6";
    }
}

function toggleButtonState(button) {
var currentColor = button.style.backgroundColor;
var currentOpacity = button.style.opacity;

if (currentColor === "rgb(255, 255, 255)" && currentOpacity === "0.6") {
    button.style.backgroundColor = "rgb(29, 204, 73)";
    button.style.opacity = "1";
} else {
    button.style.backgroundColor = "rgb(255, 255, 255)";
    button.style.opacity = "0.6";
}
}

});