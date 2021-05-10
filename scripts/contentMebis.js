window.onload = () => {
    let awb_matches = document.getElementsByTagName("h3");
    //console.log("**************************************");
    //console.table(awb_matches);
    let awb_result = "";

    let inhaltsverzeichnis = document.getElementById("inhaltsverzeichnis");
    let lastEntry = "";
    for (i in awb_matches) {
      //console.table(awb_matches[i]);
      if (awb_matches[i].className)
        if (awb_matches[i].className.indexOf('sectionname') > -1) {
          let id = awb_matches[i].id;
          // window.scrollBy Angabe -300 nicht sauber
          let s = "<li><a onclick='document.getElementById(\"" + id + "\").scrollIntoView();  window.scrollBy(0, -300);' href='javascript:return false;'   >" + awb_matches[i].innerText.trim() + "</a>";

          awb_result = awb_result + s;
          lastEntry = s;
          let awb_anchor = document.createElement('a');
        }
    }
    //console.log ("inhaltsverzeichnis: " + document.getElementById("inhaltsverzeichnis").innerText);
    awb_result = "<ol>" + awb_result + "</ol><br><hr><br>"
    document.getElementById("inhaltsverzeichnis").innerHTML = "<hr><b>Zum letzten Eintrag springen:<br>" + lastEntry + "</b><hr>" + awb_result;
  }