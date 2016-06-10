// alert("hello world");

var NroImagen = 1;
var NombreImagen = "images/classProject-";
var imageId = "classProject-";
var ImagenPrincipal = document.getElementById("main_image");

var imageNumber = 1;
var imageName = "images/classProject-";
var mainImage = document.getElementById("main_image");


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


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

console.log(mainImage.src, nextButton, prevButton);
//on click
function goNext() {
  console.log("go next");
  if( imageNumber < 5 ) {
    hideImage(imageId + imageNumber);
    imageNumber = imageNumber + 1;
    showImage(imageId + imageNumber);
    //var newSrc = imageName + imageNumber + ".jpg";
    //console.log(newSrc);
    //mainImage.src = newSrc;
  }
}

function goBack() {
  console.log("go back");
  if( imageNumber > 1 ) {
    hideImage(imageId + imageNumber);
    imageNumber = imageNumber - 1;
    showImage(imageId + imageNumber);
    //var newSrc = imageName + imageNumber + ".jpg";
    //console.log(newSrc);
    //mainImage.src = newSrc;
  }
}

//nextButton.onclick = goNext;
//prevButton.onclick = goBack;

nextButton.addEventlistener("click", goNext);
prevButton.addEventlistener("click", goBack);

function showImage(imageId)
{
    var showImage = document.getElementById(imageId);
    showimage.classlist.add('show');
    showImage.classlist.remove('hide');
}

function higeImage(imageId)
{
  console.log("imageId, ")
  var showImage = document.getElementById(imageId);
  showimage.classlist.remove('show');
  showImage.classlist.show('hide');
}
