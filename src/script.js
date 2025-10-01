document.getElementById("protocol").textContent = window.location.protocol;
document.getElementById("ssl").textContent =
  window.location.protocol === "https:" ? "Yes ✅" : "No ❌";
document.getElementById("time").textContent = new Date().toLocaleString();

const content = document.getElementById("content");
const button = document.createElement("button");
button.textContent = "Click me!";
button.style.cssText = `
    padding: 10px 20px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;

button.onclick = () => {
  const messages = [
    "HTTPS connection is secure! 🔒",
    "SSL certificate is working! ✅",
    "Nginx is serving static files! 🚀",
    "Docker container is running! 🐳",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  content.innerHTML = `<p style="color: #4CAF50; font-weight: bold;">${randomMessage}</p>`;
};

content.appendChild(button);
