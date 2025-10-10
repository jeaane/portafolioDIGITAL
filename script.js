const frases = [
  "Hoy es un buen día para inventar algo que importe.",
  "Tu creatividad es una herramienta de transformación.",
  "Cada línea de código puede contar una historia.",
  "La tecnología también puede abrazar.",
  "Tu proyecto es una extensión de tu visión emocional.",
  "La educación comienza con una chispa de curiosidad.",
  "Tu voz creativa merece ser escuchada."
];

function nuevaFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = frase;
}

function guardarAfirmacion() {
  const input = document.getElementById("inputAfirmacion");
  const texto = input.value.trim();
  if (texto !== "") {
    const lista = document.getElementById("listaAfirmaciones");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    nuevoItem.classList.add("list-group-item");
    lista.appendChild(nuevoItem);
    input.value = "";
  }
}

// Modo noche toggle
function toggleModoNoche() {
  document.body.classList.toggle("noche");
  const btn = document.getElementById("modoNocheBtn");
  if (document.body.classList.contains("noche")) {
    btn.textContent = "☀️ Modo claro";
  } else {
    btn.textContent = "🌙 Modo noche";
  }
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  nuevaFrase();

  // Crear botón de modo noche
  const btn = document.createElement("button");
  btn.id = "modoNocheBtn";
  btn.textContent = "🌙 Modo noche";
  btn.onclick = toggleModoNoche;
  document.body.appendChild(btn);

  // Animar secciones
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("fade-in");
  });
});


