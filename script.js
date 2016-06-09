// alert("hello world");
var NroImagen = 1;
var NombreImagen = "images/classProject-";
var ImagenPrincipal = document.getElementById("main_image");

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");



console.log (ImagenPrincipal.src, nextButton, prevButton);

// on click
function Siguiente()
{
if (NroImagen<5)
{
  NroImagen = NroImagen + 1;
}
else {
  NroImagen=5
}
var NuevoSrc = NombreImagen + NroImagen + ".jpg";
//document.write(NuevoSrc);
console.log(NuevoSrc);
ImagenPrincipal.src=NuevoSrc;
}


function Anterior()
{
  if (NroImagen>=2)
  {
    NroImagen = NroImagen - 1;
  }
  else {
    NroImagen = 1;
  }
    var NuevoSrc = NombreImagen + NroImagen + ".jpg";
    //document.write(NuevoSrc);
    console.log(NuevoSrc);
    ImagenPrincipal.src=NuevoSrc;
}

nextButton.onclick = Siguiente;
prevButton.onclick = Anterior;
