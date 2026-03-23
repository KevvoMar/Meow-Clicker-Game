let meows = 0;
let meowsPerClick = 1;
let meowsPerSecond = 0;
let upgradeOneCost = 20;
let upgradeTwoCost = 50;
let upgradeThreeCost = 500;
let upgradeFourCost = 2500;
let upgradeFiveCost = 4000;
let upgradeSixCost = 10000;

const currency  = document.querySelector(".currency");
const currencyPerSecond = document.querySelector(".currency__second")
const catImg = document.querySelector(".clicker__img")

//update shop and currency values

function updateShopUI() {
    document.querySelector(".upgrade__one--cost").textContent = upgradeOneCost;
    document.querySelector(".upgrade__two--cost").textContent = upgradeTwoCost;
    document.querySelector(".upgrade__three--cost").textContent = upgradeThreeCost;
    document.querySelector(".upgrade__four--cost").textContent = upgradeFourCost;
    document.querySelector(".upgrade__five--cost").textContent = upgradeFiveCost;
    document.querySelector(".upgrade__six--cost").textContent = upgradeSixCost;

}

function updateCurrency() {
    currency.textContent = "Meows: " + meows;
    currencyPerSecond.textContent = "Meows Per Second: " + meowsPerSecond;
    updateShopUI();
    saveGame();
}

//upgrades

document.querySelector(".upgrade__one").addEventListener("click", () => {
    if (meows >= upgradeOneCost) {
        meows -= upgradeOneCost;
        meowsPerClick++;
        upgradeOneCost = Math.floor(upgradeOneCost * 1.2);
        updateCurrency();
        saveGame();
    }
    else {
        const warning = document.createElement("p");
        warning.textContent = "Not Enough Meows!";
        warning.classList.add("warning");
        document.body.appendChild(warning);

        setTimeout(() => warning.remove(), 1000);

    }
});

document.querySelector(".upgrade__two").addEventListener("click", () => {
    if (meows >= upgradeTwoCost) {
        meows -= upgradeTwoCost;
        meowsPerSecond++;
        upgradeTwoCost = Math.floor(upgradeTwoCost * 1.4);
        updateCurrency();
        saveGame();
    }
    else {
        const warning = document.createElement("p");
        warning.textContent = "Not Enough Meows!";
        warning.classList.add("warning");
        document.body.appendChild(warning);

        setTimeout(() => warning.remove(), 1000);

    }
});

document.querySelector(".upgrade__three").addEventListener("click", () => {
    if (meows >= upgradeThreeCost) {
        meows -= upgradeThreeCost;
        meowsPerClick += 2;
        upgradeThreeCost = Math.floor(upgradeThreeCost * 1.5);
        updateCurrency();
        saveGame();
    }
    else {
        const warning = document.createElement("p");
        warning.textContent = "Not Enough Meows!";
        warning.classList.add("warning");
        document.body.appendChild(warning);

        setTimeout(() => warning.remove(), 1000);

    }
});

document.querySelector(".upgrade__four").addEventListener("click", () => {
    if (meows >= upgradeFourCost) {
        meows -= upgradeFourCost;
        meowsPerSecond += 2;
        upgradeFourCost = Math.floor(upgradeFourCost * 1.5);
        updateCurrency();
        saveGame();
    }
    else {
        const warning = document.createElement("p");
        warning.textContent = "Not Enough Meows!";
        warning.classList.add("warning");
        document.body.appendChild(warning);

        setTimeout(() => warning.remove(), 1000);

    }
});

document.querySelector(".upgrade__five").addEventListener("click", () => {
    if (meows >= upgradeFiveCost) {
        meows -= upgradeFiveCost;
        meowsPerClick += 5;
        upgradeFiveCost = Math.floor(upgradeFiveCost * 1.3);
        updateCurrency();
        saveGame();
    }
    else {
        const warning = document.createElement("p");
        warning.textContent = "Not Enough Meows!";
        warning.classList.add("warning");
        document.body.appendChild(warning);

        setTimeout(() => warning.remove(), 1000);

    }
});

document.querySelector(".upgrade__six").addEventListener("click", () => {
    if (meows >= upgradeSixCost) {
        meows -= upgradeSixCost;
        meowsPerSecond += 10;
        upgradeSixCost = Math.floor(upgradeSixCost * 1.4);
        updateCurrency();
        saveGame();
    }
    else {
        const warning = document.createElement("p");
        warning.textContent = "Not Enough Meows!";
        warning.classList.add("warning");
        document.body.appendChild(warning);

        setTimeout(() => warning.remove(), 1000);

    }
});


//meowsPerSecond Loop

setInterval(() => {
    if (meowsPerSecond > 0) {
        meows += meowsPerSecond;
        updateCurrency();
    }
}, 1000);


//floating +1

function floatingText(amount, x, y) {
    const float = document.createElement("div");
    float.classList.add("floating");
    float.textContent = "+" + amount;
    float.style.left = x + "px";
    float.style.top = y + "px";
    document.body.appendChild(float);

    setTimeout(() => float.remove(), 1000);
}
//


//handler

function handleCatClick(e) {
    meows += meowsPerClick;
    updateCurrency();

    floatingText(meowsPerClick, e.pageX, e.pageY);

    const randomTilt = Math.random() < 0.5 ? -15 : 15;
    catImg.style.transform = `rotate(${randomTilt}deg)`;
    

    setTimeout(() => {
        catImg.style.transform = `rotate(0deg)`;
    }, 100);
    saveGame();
}


 //cheat code

function storeInput() {
    const userInput = document.querySelector(".user__input").value;
    return userInput;
}

function cheatCode() {
    const code = storeInput();

    if(code === "goated") {
        meows += 50000000;
    updateCurrency();
    }
}

function clearInput() {
    document.querySelector(".user__input").value = "";
}


// SAVE FEATURE


function saveGame() {
    const gameState = {
        meows,
        meowsPerClick,
        meowsPerSecond,
        upgradeOneCost,
        upgradeTwoCost,
        upgradeThreeCost,
        upgradeFourCost,
        upgradeFiveCost,
        upgradeSixCost
    };

    localStorage.setItem("meowClickerSave", JSON.stringify(gameState));
}

// LOAD

function loadGame() {
    const saved = JSON.parse(localStorage.getItem("meowClickerSave"));
    if (!saved) return;

    meows = saved.meows;
    meowsPerClick = saved.meowsPerClick;
    meowsPerSecond = saved.meowsPerSecond;

    upgradeOneCost = saved.upgradeOneCost;
    upgradeTwoCost = saved.upgradeTwoCost;
    upgradeThreeCost = saved.upgradeThreeCost;
    upgradeFourCost = saved.upgradeFourCost;
    upgradeFiveCost = saved.upgradeFiveCost;
    upgradeSixCost = saved.upgradeSixCost;

    updateCurrency();
}

document.querySelector(".cheat__enter-btn").addEventListener("click", cheatCode)
document.querySelector(".cheat__enter-btn").addEventListener("click", clearInput)
catImg.addEventListener("click", handleCatClick);

loadGame();
setInterval(saveGame, 1000);

