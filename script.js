const serverIP = "EternalSMP.aternos.me:59858"; // Change to your ip
document.querySelector(".ip").textContent = serverIP;
// DONT EDIT ANTHING UNDER THIS LINE
function copyIP() {
  const button = document.getElementById("copy-ip-btn");
  navigator.clipboard.writeText(serverIP)
    .then(() => {
      const originalText = button.textContent;
      button.textContent = "IP Copied";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1500);
    })
    .catch(() => {
      button.textContent = "Failed";
      setTimeout(() => {
        button.textContent = "Copy IP";
      }, 1500);
    });
}

fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
  .then(res => res.json())
  .then(data => {
    const status = document.getElementById("status");
    if (data.online) {
      status.textContent = `Online: ${data.players.online}/${data.players.max}`;
      status.style.color = "#88ff99";
    } else {
      status.textContent = "Offline";
      status.style.color = "#ff6666";
    }
  })
  .catch(() => {
    document.getElementById("status").textContent = "Error checking status";
  });

  // Scroll on page refresh(dont touch)
  
  // Force scroll to top on refresh with animation
window.addEventListener("beforeunload", () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100); // slight delay to override browser restore
});

