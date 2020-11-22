//twitter integration


function init() {
    'use strict';
    //include function for twitter widgets

    (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));

document.getElementById('twitter-wjs').addEventListener('load', function() {
  const root = "https://www.onetonline.org/link/summary/";
  //const twt = "https://twitter.com/intent/tweet?url=";

  const fs = document.createElement('a');
  fs.id="FS";
  const linkText = document.createTextNode("functional skills");
  fs.appendChild(linkText);
  fs.classList.add("hide");
  fs.title = "functional skills";
  fs.href = "https://www.onetonline.org/link/summary/";
  //document.body.appendChild(fs);
  document.getElementById("p1").appendChild(fs);

  document.getElementById("container").addEventListener("click",function(e) {
    const tgt = e.target;
    const isSummary = tgt.tagName==="SUMMARY";
    const code = tgt.dataset.code;
    const job = tgt.textContent;
    fs.classList.toggle("hide",!isSummary || !code); // show only if summary AND code exists
    if (isSummary && code) {
      fs.href=root+code;
    document.getElementById("p2").innerHTML = ""; // clear the previous tweet button
      twttr.widgets.createShareButton(
  root+code,
  document.getElementById('p2'),
  {
    text: job
  }
);

    }



  });

});



} // End of init() function.




window.onload = init;
