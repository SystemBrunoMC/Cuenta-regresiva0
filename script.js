const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

// Fecha objetivo: 18 de diciembre 2025 a las 11:00
const objetivo = new Date("December 18, 2025 11:00:00").getTime();

// Función para añadir cero delante si el número es menor que 10
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Función para actualizar la cuenta atrás
function actualizarCuenta() {
    const ahora = new Date().getTime();
    const diferencia = objetivo - ahora;

    if (diferencia <= 0) {
        clearInterval(intervalo);
        days.textContent = "00";
        hours.textContent = "00";
        min.textContent = "00";
        sec.textContent = "00";
        return;
    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar el HTML con ceros delante si es menor de 10
    days.textContent = padZero(d);
    hours.textContent = padZero(h);
    min.textContent = padZero(m);
    sec.textContent = padZero(s);
}

// Actualizar cada segundo
const intervalo = setInterval(actualizarCuenta, 1000);

// Llamada inicial inmediata
actualizarCuenta();