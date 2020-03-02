var szamolGomb = document.getElementById('szamolGomb');
var szam1Objektum = document.getElementById('elsoSzam')
var szam2Objektum = document.getElementById('masodikSzam')
var eredmenyObjektum = document.getElementById('eredmeny')

szamolGomb.onclick = function() {

  var elsoSzam = szam1Objektum.value;
  var masodikSzam = szam2Objektum.value;
  var osszeg = parseInt(elsoSzam) + parseInt(masodikSzam); //karaktersorozatként értelmezi a JavaScript
                                                            //ha csak 'elsoSzam + masodikSzam'-ot irok, akkor pl 2+2=22
                                                            //Ezért konvertálnunk kell számmá.
                                                            //Erre a parseInt és parseFloat függvények használhatók:
                                                            //igy: parseInt(elsoSzam) + parseInt(masodikSzam),igy 2+2=4


  eredmenyObjektum.innerHTML = "Eredmény: " + osszeg;
  eredmenyObjektum.style.display = "inline-block";

}
