const vocales = ["a", "e", "i", "o", "u"];
const llave = ["ai", "enter", "imes", "ober", "ufat"];

const textArea = document.querySelector(".texto-cifrar");
const resultadoArea = document.querySelector(".resultado");
const muñeco = document.querySelector(".tarjeta-img img");
const tarjetaTexto = document.querySelector(".tarjeta-texto");
const btnCopiar = document.querySelector(".btn-copiar");



function encriptarTexto() {
  let texto = textArea.value.trim();
  if (texto === "") {
    alert("El texto");
    return;
  }
  if (/^[a-z\sñ]+$/.test(texto)) {
    let encriptado = texto.replace(
      /[aeiou]/g,
      (vocal) => llave[vocales.indexOf(vocal)]
    );
    resultadoArea.value = encriptado;
    muñeco.classList.add("oculto");
    tarjetaTexto.classList.add("oculto");
    btnCopiar.classList.remove("oculto");
  } else {
    alert("El texto contiene caracteres no permitidos o esta vacio.");
  }
}

function desencriptarTexto() {
  let texto = textArea.value.trim();
  if (texto === "") {   
    return;
  }
  if (/^([a-z\sñ]|ai|enter|imes|ober|ufat)+$/.test(texto)) {
    let desencriptado = texto.replace(
      /ai|enter|imes|ober|ufat/g,
      (llave) => vocales[["ai", "enter", "imes", "ober", "ufat"].indexOf(llave)]
    );
    resultadoArea.value = desencriptado;
    muñeco.classList.add("oculto");
    tarjetaTexto.classList.add("oculto");
    btnCopiar.classList.remove("oculto");
  } else {
    alert("El texto contiene caracteres no permitidos o esta vacio.");
  }
}



function copiarTexto() {
  resultadoArea.select();
  document.execCommand("copy");
  alert("Texto copiado!!");
  muñeco.classList.remove("oculto");
  tarjetaTexto.classList.remove("oculto");
  btnCopiar.classList.add("oculto");
  resultadoArea.value="";
  textarea.value = placeholderText;
}







const textarea = document.querySelector(".texto-cifrar");
const placeholderText =
  textarea.getAttribute("data-placeholder") || "Ingresa el texto aquí";

// Establecer el texto del placeholder al cargar la página
textarea.value = placeholderText;

// Borrar el texto del placeholder cuando se haga clic en el área de texto
textarea.addEventListener("focus", function () {
  if (this.value === placeholderText) {
    this.value = "";
  }
});

// Restaurar el texto del placeholder si se sale del área de texto sin ingresar texto
textarea.addEventListener("blur", function () {
  if (this.value === "") {
    this.value = placeholderText;
  }
});
