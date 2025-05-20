function saudar() {
    let nomeUsuario = prompt("Qual o seu nome?");
    if (nomeUsuario == null || nomeUsuario == "") {
        while(nomeUsuario == null || nomeUsuario == "")
        nomeUsuario = prompt("Nome não informado! Informe seu nome");
    }
    alert("Olá, " + nomeUsuario + "!");
}

function validar() {
  const nome     = document.getElementById("nome").value.trim();
  const email    = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const motivo   = document.getElementById("motivo").value.trim();

  console.log("validar() chamada!");
  console.log({ nome, email, telefone, motivo });

  if (!nome) {
    alert("Preencha o nome.");
    return false;
  }
  if (!email) {
    alert("Preencha o e‑mail.");
    return false;
  }
  if (!telefone) {
    alert("Preencha o telefone.");
    return false;
  }
  if (!motivo) {
    alert("Preencha o motivo.");
    return false;
  }

  alert("Formulário enviado com sucesso!"+
    "\n nome: " + nome +
    "\n email: " + email +
    "\n telefone: " + telefone +
    "\n motivo: " + motivo
  );
  return true;
}

const toggleBtn = document.getElementById('toggle-theme');
const bodyEl = document.body;

toggleBtn.addEventListener('click', () => {
  if (bodyEl.classList.contains('theme-light')) {
    bodyEl.classList.replace('theme-light', 'theme-dark');
    toggleBtn.textContent = 'Tema Claro';
  } else {
    bodyEl.classList.replace('theme-dark', 'theme-light');
    toggleBtn.textContent = 'Tema Escuro';
  }
});

document.getElementById('telefone').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
  let numero = this.value.replace(/\D/g, ''); // Remove tudo que não é número

  // Limita a 11 dígitos (2 DDD + 9 número)
  if (numero.length > 11) numero = numero.slice(0, 11);

  // Aplica a máscara dinamicamente
  if (numero.length > 2) {
    this.value = `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
  } else if (numero.length > 0) {
    this.value = `(${numero}`;
  } else {
    this.value = '';
  }
});

