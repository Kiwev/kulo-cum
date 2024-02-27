let playerHealth = 100;
let enemyHealth = 100;

function attack(playerDamage) {
    const playerAttackDamage = playerDamage;
    const enemyAttackDamage = playerDamage * (Math.random() * (1 - 0.6) + 0.6); //

    enemyHealth -= playerAttackDamage;
    playerHealth -= enemyAttackDamage;

    if (playerHealth <= 0) {
        playerHealth = 0;
        displayMessage("Perdiste. Buen intento.");
    }

    if (enemyHealth <= 0) {
        enemyHealth = 0;
        displayMessage("Felicidades, ganaste.");
    }

    updateHealthBars();

    displayAttackMessage(playerAttackDamage, enemyAttackDamage);
}

function run() {
    displayMessage("Huíste!");
}

function updateHealthBars() {
    document.getElementById("player-health").style.width = playerHealth + "%";
    document.getElementById("enemy-health").style.width = enemyHealth + "%";
}

function displayMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerText = message;

    setTimeout(function() {
        messageDiv.innerText = "";
        if (message.includes("Perdiste")) {
            window.location.href = "rechazar.html";
        } else if (message.includes("Felicidades")) {
            window.location.href = "win.html";
        }
    }, 5000);
}

function displayAttackMessage(playerDamage, enemyDamage) {
    const attackMessageDiv = document.getElementById("attack-message");
    const playerMessage = "Kulo hizo " + Math.round(playerDamage) + " de daño!";
    const enemyMessage = "Kira devolvió el ataque e hizo " + Math.round(enemyDamage) + " de daño!";
    const combinedMessage = playerMessage + "<br>" + enemyMessage;

    attackMessageDiv.innerHTML = combinedMessage;
}
