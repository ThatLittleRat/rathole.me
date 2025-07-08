// Footer with dynamic year
const footer = document.getElementById('footer');
const year = new Date().getFullYear();
footer.innerHTML = `
  <hr>
  <p>&copy; ${year} ThatLittleRat 🐀 | Built in the rathole.</p>
`;

// Console rat welcome
console.log(`
██████╗  █████╗ ████████╗    ███╗   ███╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗╚══██╔══╝    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
██████╔╝███████║   ██║       ██╔████╔██║██║   ██║██████╔╝█████╗  
██╔═══╝ ██╔══██║   ██║       ██║╚██╔╝██║██║   ██║██╔═══╝ ██╔══╝  
██║     ██║  ██║   ██║       ██║ ╚═╝ ██║╚██████╔╝██║     ███████╗
╚═╝     ╚═╝  ╚═╝   ╚═╝       ╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚══════╝

🐀 Welcome to the Rathole.
Press R to activate RAT MODE.
`);

// Easter Egg: RAT MODE
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    alert("🐀 RAT MODE ACTIVATED 🐀");
    document.body.style.backgroundColor = "#2e2e2e";
    document.body.style.color = "#0f0";
  }
});
