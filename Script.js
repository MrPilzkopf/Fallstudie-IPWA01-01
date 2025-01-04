/*JS To-Do:
-       Auswahl Geschäftsstelle / Abholung
-       Kleiderauswahl Anzahl verbergen solange nicht ausgewählt
-       Bestätigungs Popup, nicht direkt wieder schliesen (type="button" vergessen)
-   Funtkionen Komprimieren
-       Rechte Hand & Schuh funktionieren nicht
-       Zahlen eingaben werden zwar anezeigt, aber nicht an richtigen Pos
-       Wenn Schuhe oder Hände Ausgewählt, wieder entfernen möglich machen
-   Rechten Schuh & Hand lassen sich nicht benutzen, da sosnt oberes Problem auftritt
-   Daten Übergeben von FOrmular zu Popup
-   Popup Vollbild und BG blur
*/


function spendenArtFunction() {
  var sammelfahrzeugId = document.getElementById("sammelfahrzeugId");

  if (sammelfahrzeugId.selected == true){
    sammelfahrzeugInfos.style.display = "block";
  } else {
    sammelfahrzeugInfos.style.display = "none";
  }
}

function datenBestatigenKnopf() {
  document.getElementById("datenBestatigenFormular").style.display = "block";
}


function schliesenKnopf() {
  document.getElementById("datenBestatigenFormular").style.display = "none";
}

function datenUbergabe() {
  var vorname = document.getElementById("vorname").value;
  document.getElementById("formularDaten").value = vorname;
}


function spendeformularLeeren() {
  document.getElementById("spendeformular").reset();
  sammelfahrzeugInfos.style.display = "none"; // Damit auch der Block wieder versteckt wird
}

function kopfFunction() {
  // Get the checkbox
  var kopfKnopf = document.getElementById("kopfKnopf");
  // Get the input
  var kopfZahl = document.getElementById("kopfZahl");

  // If the checkbox is checked, display the number input
  if (kopfKnopf.checked == true){
    kopfZahl.style.display = "block";
  } else {
    kopfZahl.style.display = "none";
  }
}

function beideHande() {
  var handKnopfL = document.getElementById("handKnopfL");
  var handKnopfR = document.getElementById("handKnopfR");

  if (handKnopfL.checked) {
    handKnopfR.checked = true;
  } else {
    handKnopfR.checked = false;
  }
 
  if (handKnopfR.checked) {
    handKnopfL.checked = true;
  } else {
    handKnopfL.checked = false;
  }
}

function beideSchuhe() {
  var schuheKnopfL = document.getElementById("schuheKnopfL");
  var schuheKnopfR = document.getElementById("schuheKnopfR");

  if (schuheKnopfL.checked) {
    schuheKnopfR.checked = true;
  } else {
    schuheKnopfR.checked = false;
  }
 
  if (schuheKnopfR.checked) {
    schuheKnopfL.checked = true;
  } else {
    schuheKnopfL.checked = false;
  }
}


function torsoFunction() {
  var torsoKnopf = document.getElementById("torsoKnopf");
  var torsoZahl = document.getElementById("torsoZahl");

  if (torsoKnopf.checked == true){
    torsoZahl.style.display = "block";
  } else {
    torsoZahl.style.display = "none";
  }
}

function handFunction() {
  var handKnopfL = document.getElementById("handKnopfL");
  var handKnopfR = document.getElementById("handKnopfR");

  const handZahl = document.getElementById("handZahl");

  if ((handKnopfL.checked || handKnopfR.checked) == true){
    handZahl.style.display = "block";
  } else {
    handZahl.style.display = "none";
  }
}

function hoseFunction() {
  var hoseKnopf = document.getElementById("hoseKnopf");

  var hoseZahl = document.getElementById("hoseZahl");

  if (hoseKnopf.checked == true){
    hoseZahl.style.display = "block";
  } else {
    hoseZahl.style.display = "none";
  }
}


function schuheFunction() {
  var schuheKnopfL = document.getElementById("schuheKnopfL");
  var schuheKnopfR = document.getElementById("schuheKnopfR");

  const schuheZahl = document.getElementById("schuheZahl");

  if ((schuheKnopfL.checked || schuheKnopfR.checked) == true){
    schuheZahl.style.display = "block";
  } else {
    schuheZahl.style.display = "none";
  }
}