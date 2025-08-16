function calcularEdad() {
  let nombre = document.getElementById("nombre").value;
  let ano = parseInt(document.getElementById("ano").value);
  let mes = parseInt(document.getElementById("mes").value);
  let dia = parseInt(document.getElementById("dia").value);

  if (!nombre || isNaN(ano) || isNaN(mes) || isNaN(dia)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  let nacimiento = new Date(ano, mes - 1, dia); // Mes empieza en 0
  let ahora = new Date();

  // Calculamos edad exacta
  let diff = ahora - nacimiento;
  let edad = new Date(diff);

  let años = edad.getUTCFullYear() - 1970; // base epoch
  let meses = edad.getUTCMonth();
  let dias = edad.getUTCDate() - 1;
  let horas = edad.getUTCHours();

  // Mostrar resultados
  let resultado = `
    <p><strong>${nombre}</strong></p>
    <p>Fecha de nacimiento: ${nacimiento.toLocaleDateString()}</p>
    <p>Tiene: ${años} años, ${meses} meses, ${dias} días y ${horas} horas</p>
  `;
  document.getElementById("resultado").innerHTML = resultado;

  // Imagen aleatoria
  let imagenes = ["img/anna1.PNG", "img/anna2.PNG", "img/anna3.PNG","img/anna4.PNG", "img/anna5.PNG", "img/anna6.PNG", "img/anna7.PNG", "img/anna8.PNG","img/anna9.PNG", "img/anna10.PNG", "img/anna11.PNG", "img/anna12.PNG", "img/anna13.PNG","img/anna14.PNG", "img/anna15.PNG", "img/anna16.PNG", "img/anna17.PNG", "img/anna18.PNG","img/anna19.PNG", "img/anna20.PNG", "img/anna21.PNG", "img/anna22.PNG", "img/anna23.PNG"];
  let randomIndex = Math.floor(Math.random() * imagenes.length);
  let imgTag = `<img src="${imagenes[randomIndex]}" alt="Imagen random">`;

  document.getElementById("imagen").innerHTML = imgTag;
}
// Cambiar el fondo cada cierto tiempo con un color random
function cambiarFondo() {
  // Genera un color aleatorio en formato HEX
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
}

// Llama a la función cada 2 segundos
setInterval(cambiarFondo, 1000);
