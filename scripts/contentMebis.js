jumpToTheEnd = '<p dir="ltr" style="text-align: right;"><a onclick="window.scrollTo(0,document.body.scrollHeight);return false;" href="https://lernplattform.mebis.bayern.de/course/editsection.php?id=7884077&amp;sr#">zum Seitenende scrollen '
                + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABVklEQVRIid2WQY6EIBBFiZcg3EQXrNy49xRG7+DKe3oCiMEVAm8WE2079mS6e+zOzJhUNFDWyy8CH5FlGVJKlFIvCSklWZYhpJSM44hzDmMM1tpTwhiDc45xHJFSIpRSWGsBSClx1rPWstailPoEGWMAiDGSUjolYowAGGMuoLcpegTkvcd7/zrQsiwA9H1P3/dXYy8BtW1L27avB3VdR9d1/0jR3wcty0JK6UvQfu7HimKM297Zg7z32wnwFGh9z/PMMAxM00QI4QAKITBNE8MwMM/zzRp3gQCKokBrvbWnaRqaptlap7WmKIqDkrtbt//WWpPn+UFRnudorW/+89AarSfxWrSu623D1nW9wfd5T4HgYh0hBKqqQgiBEIKqqgghXFnCj0B7WEqJsiwpy/LgO6eA9nPOOZxzd+c/5UerglXhd7kH0CNWvgf9Tit/23XrXRfIDwqvC/7JPJvOAAAAAElFTkSuQmCC" alt="">'
                + '</a></p>';

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
    awb_result = jumpToTheEnd + "<ol>" + awb_result + "</ol><br><hr><br>"
   
    document.getElementById("inhaltsverzeichnis").innerHTML = "<hr><b>Zum letzten Eintrag springen:<br>" + lastEntry + "</b><hr>" + awb_result;
   }

//    document.getElementById("changenumsections").innerHTML = document.getElementById("changenumsections").innerHTML + "<a href=''>Nach oben</a>";
    

  

  //console.log ("Test fertig");