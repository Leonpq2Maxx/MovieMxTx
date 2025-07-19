
function mostrarMsg(msg) {
  document.getElementById('msg').innerText = msg;
}

async function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!email || !password) return mostrarMsg("Completa todos los campos");

  const res = await postData({ action: "login", email, password });
  if (res.status === "ok") {
    if (res.estado === "Suspendido") return mostrarMsg("Tu cuenta está suspendida");
    localStorage.setItem("usuario", res.nombre);
    window.location.href = "dashboard.html";
  } else {
    mostrarMsg(res.message || "Error al iniciar sesión");
  }
}

async function registrar() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!nombre || !email || !password) return mostrarMsg("Completa todos los campos");

  const res = await postData({ action: "registro", nombre, email, password });
  mostrarMsg(res.message);
}

async function recuperar() {
  const email = document.getElementById('email').value.trim();
  if (!email) return mostrarMsg("Ingresa tu correo");

  const res = await postData({ action: "recuperar", email });
  mostrarMsg(res.message);
}
