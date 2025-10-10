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
    lista.appendChild(nuevoItem);
    input.value = "";
  }
}

// Inicializar con una frase
nuevaFrase();
