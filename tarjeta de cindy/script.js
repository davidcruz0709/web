const fechaEvento = new Date("mayo 10, 2025 19:00:00").getTime();

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    document.querySelectorAll(".valor").forEach(el => el.innerText = "0");
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

  // Animación de los círculos (cálculo de porcentaje)
  const circulos = document.querySelectorAll("circle");
  circulos[0].style.strokeDashoffset = 283 - (dias % 30) / 30 * 283;
  circulos[1].style.strokeDashoffset = 283 - horas / 24 * 283;
  circulos[2].style.strokeDashoffset = 283 - minutos / 60 * 283;
  circulos[3].style.strokeDashoffset = 283 - segundos / 60 * 283;
}

setInterval(actualizarCuenta, 1000);
