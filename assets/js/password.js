const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

const checks = {
  length: document.getElementById("length"),
  upper: document.getElementById("upper"),
  lower: document.getElementById("lower"),
  number: document.getElementById("number"),
  symbol: document.getElementById("symbol"),
};

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  let score = 0;

  // Longitud
  if (pwd.length >= 12) {
    score++; checks.length.textContent = "✔ Mínimo 12 caracteres";
  } else checks.length.textContent = "✖ Mínimo 12 caracteres";

  // Mayúsculas
  if (/[A-Z]/.test(pwd)) {
    score++; checks.upper.textContent = "✔ Mayúsculas";
  } else checks.upper.textContent = "✖ Mayúsculas";

  // Minúsculas
  if (/[a-z]/.test(pwd)) {
    score++; checks.lower.textContent = "✔ Minúsculas";
  } else checks.lower.textContent = "✖ Minúsculas";

  // Números
  if (/[0-9]/.test(pwd)) {
    score++; checks.number.textContent = "✔ Números";
  } else checks.number.textContent = "✖ Números";

  // Símbolos
  if (/[^A-Za-z0-9]/.test(pwd)) {
    score++; checks.symbol.textContent = "✔ Símbolos";
  } else checks.symbol.textContent = "✖ Símbolos";

  // Nivel
  const percent = (score / 5) * 100;
  strengthFill.style.width = percent + "%";

  if (score <= 2) {
    strengthFill.style.background = "red";
    strengthText.textContent = "Estado: Contraseña débil";
  } else if (score <= 4) {
    strengthFill.style.background = "orange";
    strengthText.textContent = "Estado: Contraseña media";
  } else {
    strengthFill.style.background = "lime";
    strengthText.textContent = "Estado: Contraseña fuerte";
  }
});
