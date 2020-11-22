
// integration with LinkedIn




function init() {
    'use strict';

    function lnShare() {
    console.log("lnShare started");
    const ln = document.createElement('script');
    ln.id="LN";
    ln.type="IN/Share";
    ln.setAttribute("data-url", fs.href);
    //document.getElementById("p3").appendChild(ln);
    console.log(ln);
    return ln;
    }

    const root = "https://www.onetonline.org/link/summary/";
    const fs = document.createElement('a');
    fs.id="FS";
    const linkText = document.createTextNode("functional skills");
    fs.appendChild(linkText);
    fs.classList.add("hide");
    fs.title = "functional skills";
    fs.href = "https://www.onetonline.org/link/summary/";

    document.getElementById("p1").appendChild(fs);


    document.getElementById("container").addEventListener("click",function(e) {
      const tgt = e.target;
      const isSummary = tgt.tagName==="SUMMARY";
      const code = tgt.dataset.code;
      console.log(root+code);
      fs.classList.toggle("hide",!isSummary || !code); // show only if summary AND code exists
      if (isSummary && code) {
        fs.href=root+code;
        console.log(fs.href);
        //lnShare(fs.href);
        document.getElementById("p3").innerHTML = "";
        const ln = lnShare(fs.href);
        document.getElementById("p3").appendChild(ln);
        IN.parse();
      }
    })



} // End of init() function.




window.onload = init;
