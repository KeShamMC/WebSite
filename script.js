document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const playersDiv = document.getElementById("players");

  // Simulated data
  const serverOnline = true;
  const players = ["Steve", "Alex", "Herobrine"];

  setTimeout(() => {
    if (serverOnline) {
      status.textContent = "🟢 Server is Online!";
      status.classList.add("highlight");
      playersDiv.innerHTML = `
        <p>Players Online: ${players.length}</p>
        <ul>${players.map(player => `<li>${player}</li>`).join('')}</ul>
      `;
    } else {
      status.textContent = "🔴 Server is Offline.";
      status.style.color = "#ff4444";
    }
  }, 1500); // Simulate loading
});
