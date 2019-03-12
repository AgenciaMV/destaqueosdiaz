var empresa = "Agencia Mall Virtual";
var url_Empresa = "http://www.agenciamallvirtual.ml";

var cliente = "Destaqueos Diaz";

var whatsapp = "(506) 6014-3441";
var telCel = "tel:50660143441";

var telCel2 = "(506) 8682-6626";
var numTelCel2 = "tel:50686826626";

var telFijo = "(506) 6110-0338";
var numLlamarFijo = "tel:50661100338";

var numMensaje = "https://api.whatsapp.com/send?phone=50660143441&text=";

var email = "carlosalbertodiazrivera@gmail.com";
var btnEmail = 'href="mailto:carlosalbertodiazrivera@gmail.com"';

var asunto = "Información solicitada desde"+cliente;
var sobremi = "Somos una empresa de limpieza de tanques sépticos y destaqueos de tuberías. Asistimos toda clase de problemáticas en residencias, restaurantes, hoteles y comercio en general. Contamos con gran experiencia y personal altamente calificado.";
var dondeVan = "Visitamos todo el territorio nacional. Atendiendo principalmente San José, Cartago, Alajuela y Heredia.";
var horarioAtencion = "Atendemos las 24 horas los 7 días de la semana.";
var notaEspecial = "Nota Importante";
var detalleNota = "Solicite su cotización";
var nomFacebook = "Destaqueos Diaz";
var facebook = "https://www.facebook.com/Destaqueos-Díaz-2140208526292465/";
var nomTwitter = "";
var url_Twitter = "#!";
var nomYoutube = "";
var url_Youtube = "#!";
var nomGooglePlus = "";
var url_GooglePlus = "#!";


//TITULO DEL SITIO WEB EN LA PESTAÑA DEL NAVEGADOR
document.getElementById("nC").innerHTML = cliente;


function clientes(empresa= "",url_Empresa="",cliente="",whatsapp="",email="",mailto="",telCel="",telCel2="",telFijo="",numTelCel2="",numLlamarFijo="",sobremi="",dondeVan="",horarioAtencion="",notaEspecial="",detalleNota="",nomFacebook="",nomTwitter="",nomYoutube="",nomGooglePlus="")
{
    var datos = document.write(empresa,url_Empresa,cliente,whatsapp,email,mailto,telCel,telCel2,telFijo,sobremi,numTelCel2,numLlamarFijo,dondeVan,horarioAtencion,notaEspecial,detalleNota,nomFacebook,nomTwitter,nomYoutube,nomGooglePlus);
    return datos;
}

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function faceCliente() {
    location.replace(facebook);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function twitterCliente() {
  location.replace(url_Twitter);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function youtubeCliente() {
  location.replace(url_youtube);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function googlePlusCliente() {
  location.replace(url_GooglePlus);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE


// ************************************** FUNCIONES PARA LLAMAR Y ENVIAR MENSAJE WHATSAPP
// FUNCION PARA WHATSAPP DESDE BOTON
function mensajeCliente() {
  location.replace(numMensaje);
}
// FIN FUNCION PARA WHATSAPP DESDE BOTON

// FUNCION PARA LLAMAR DESDE BOTON
function llamarCliente() {
  location.replace(numTelCel2);
}
// FIN FUNCION PARA LLAMAR DESDE BOTON

// FUNCION PARA LLAMAR DESDE BOTON   
function llamarNumFijo() {
  location.replace(numLlamarFijo);
}
// FIN FUNCION PARA LLAMAR DESDE BOTON
// ************************************** FIN FUNCIONES PARA LLAMAR Y ENVIAR MENSAJE WHATSAPP


function urlEmpresa(){
  location.replace(url_Empresa);
}

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function emailCliente() {
  location.replace(btnEmail);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
