document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("input", adjustInputWidth);
document.getElementById("clear-button").addEventListener("click", clearConversation);

// Mostrar el modal al cargar la página
window.onload = function() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const okButton = document.getElementById("ok-button");

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    okButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function adjustInputHeight() {
    const input = document.getElementById("user-input");
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
}

function adjustInputWidth() {
    const input = document.getElementById("user-input");
    input.style.width = 'auto';
    input.style.width = input.scrollWidth + 'px';
}

function clearConversation() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = ""; // Limpiar el contenido del chat
}

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");

    // Agregar mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = userInput.replace(/\n/g, '<br>'); // Reemplazar saltos de línea por <br>
    chatBox.appendChild(userMessage);
    
    document.getElementById("user-input").value = "";
    adjustInputWidth(); // Restablecer el ancho del campo de entrada

    // Agregar indicador de "escribiendo"
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("message", "typing-indicator");
    typingIndicator.textContent = "DeepSeek está escribiendo...";
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 10 seconds timeout

    try {
        const response = await fetch("https://deepseekbackend.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Eliminar indicador de "escribiendo"
        chatBox.removeChild(typingIndicator);

        // Agregar mensaje de DeepSeek
        const botMessage = document.createElement("div");
        botMessage.classList.add("message");
        botMessage.textContent = data.reply;
        chatBox.appendChild(botMessage);

        // Hacer scroll hacia abajo
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error("Error fetching data:", error);
        // Eliminar indicador de "escribiendo" en caso de error
        chatBox.removeChild(typingIndicator);
    }
}