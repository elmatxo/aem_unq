// Cargar datos de usuario específico de Randomuser.me
window.onload = () => { cargarDatosUsuario(); };
  
const cargarDatosUsuario = () => {
    fetch("https://randomuser.me/api/?seed=fb1595af154f640b&exc=login")
      .then(response => { return response.json(); })
      .then(json => { mostrarDatosUsuario(json); });
  };
  
mostrarDatosUsuario = (datosUsuario) => {
    document.getElementById('nombre').innerText = datosUsuario.results[0].name.first
    document.getElementById('apellido').innerText = datosUsuario.results[0].name.last;
    document.getElementById('telefono').innerText = datosUsuario.results[0].phone;
    document.getElementById('celular').innerText = datosUsuario.results[0].cell;
    document.getElementById('email').innerText = datosUsuario.results[0].email;
    document.getElementById('calle').innerText = datosUsuario.results[0].location.street.name
    document.getElementById('callenro').innerText = datosUsuario.results[0].location.street.number;
    document.getElementById('ciudad').innerText = datosUsuario.results[0].location.city;
    document.getElementById('pais').innerText = datosUsuario.results[0].location.country;
    document.getElementById('codigopostal').innerText = datosUsuario.results[0].location.postcode;
    document.getElementById('edad').innerText = datosUsuario.results[0].dob.age;
    var image = document.getElementById('cv-foto');
    image.src = datosUsuario.results[0].picture.large;
    if (datosUsuario.results[0].gender === 'male') {
        document.getElementById('genero').innerText = "Masculino";
    } else {
        document.getElementById('genero').innerText = "Femenino";
    }
    const fecha = datosUsuario.results[0].dob.date,
      [yyyy,mm,dd,hh,mi] = fecha.split(/[/:\-T]/);
      document.getElementById('fechanacimiento').innerText = `${dd}.${mm}.${yyyy}`;
};
// Navegación de pestañas
  function navCv(evt, cvData) {
    var i, cvcontent, cvpestania;
    cvcontent = document.getElementsByClassName("ticmas-cv-content");
    for (i = 0; i < cvcontent.length; i++) {
      cvcontent[i].style.display = "none";
    }
    cvpestania = document.getElementsByClassName("pestania");
    for (i = 0; i < cvcontent.length; i++) {
      cvpestania[i].className = cvpestania[i].className.replace(" cv-pestania-selected", "");
    }
    document.getElementById(cvData).style.display = "block";
    evt.currentTarget.className += " cv-pestania-selected";
  }
// Modo oscuro / modo original del sitio web
  function modoOscuro() {
    var element = document.body;
    element.classList.toggle("bodyoscuro");
    var element2 =  document.getElementById('ticmas-cv-container');
    element2.classList.toggle("containeroscuro");
    var element3 =  document.getElementById('header');
    element3.classList.toggle("headeroscuro");
    var element4 =  document.getElementById('footer');
    element4.classList.toggle("footeroscuro");
    if (element.classList.contains("bodyoscuro")){
     document.getElementById('btn-oscuro').innerHTML = "<i class='fa-solid fa-circle-half-stroke'></i> Modo claro";
    }
    else {
     document.getElementById('btn-oscuro').innerHTML = "<i class='fa-solid fa-circle-half-stroke'></i> Modo oscuro";
    }
 }
// Más información
function verMas() {
  var puntos = document.getElementById("puntossuspensivos");
  var textoMas = document.getElementById("mas");
  var btnTexto = document.getElementById("btnTxt");

  if (puntos.style.display === "none") {
    puntos.style.display = "inline";
    btnTexto.innerHTML = "Ver más";
    textoMas.style.display = "none";
  } else {
    puntos.style.display = "none";
    btnTexto.innerHTML = "Ver menos";
    textoMas.style.display = "inline";
  }
}