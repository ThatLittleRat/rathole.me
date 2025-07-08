// Create a floating rat mode message
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    // Check if message already exists
    if (document.getElementById("ratModeMsg")) return;

    const msg = document.createElement("div");
    msg.id = "ratModeMsg";
    msg.textContent = "🐀 You pressed R — Rat Mode Activated";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#00ff99",
      color: "#121212",
      padding: "10px 20px",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "1.2rem",
      boxShadow: "0 0 15px #00ff99aa",
      zIndex: 1000,
      userSelect: "none",
      opacity: "1",
      transition: "opacity 0.5s ease",
    });

    document.body.appendChild(msg);

    // Fade out and remove after 2 seconds
    setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => {
        msg.remove();
      }, 500);
    }, 2000);
  }
});
