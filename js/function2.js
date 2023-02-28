// Bienvenida según el horario de acceso al sitio
var today = new Date()
var curHr = today.getHours()

if (curHr >= 6 && curHr < 12) {
    document.getElementById("ticmas-cv-bienvenida").innerHTML = '<strong>Buen día, este es mi CV. ¿Querés <a href="mailto:contacto @ ejemplo.com">contactarme</a>?</strong>';
} else if (curHr >= 12 && curHr < 20) {
    document.getElementById("ticmas-cv-bienvenida").innerHTML = '<strong>Buenas tardes, este es mi CV. ¿Querés <a href="mailto:contacto @ ejemplo.com">contactarme</a>?</strong>';
} else {
    document.getElementById("ticmas-cv-bienvenida").innerHTML = '<strong>Buenas noches, este es mi CV. ¿Querés <a href="mailto:contacto @ ejemplo.com">contactarme</a>?</strong>';
}