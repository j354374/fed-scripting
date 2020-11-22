
//original with no social media integration
function init() {
    'use strict';
    // Add an event listener to the form:


const root = "https://www.onetonline.org/link/summary/"

const fs = document.createElement('a');
fs.id="FS";
const linkText = document.createTextNode("Functional Skills");
fs.appendChild(linkText);
fs.classList.add("hide");
fs.title = "functional skills";
fs.target="_blank";
fs.href = "https://www.onetonline.org/link/summary/";
//document.body.appendChild(fs);
document.getElementById("p1").appendChild(fs);


document.getElementById("container").addEventListener("click",function(e) {
  const tgt = e.target;
  const isSummary = tgt.tagName==="SUMMARY";
  const code = tgt.dataset.code;
  fs.classList.toggle("hide",!isSummary || !code); // show only if summary AND code exists
  if (isSummary && code) {
    fs.href=root+code;
  }
})



} // End of init() function.




window.onload = init;
