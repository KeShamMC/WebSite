let coins = 1000;

function updateUI() {
  document.getElementById("coinBalance").textContent = coins;
}

function buyItem(cost) {
  if (coins >= cost) {
    coins -= cost;
    updateUI();
    alert("✅ Purchase successful!");
  } else {
    alert("❌ Not enough coins!");
  }
}

document.addEventListener("DOMContentLoaded", updateUI);
