(()=>{"use strict";let e=0,t=[];function n(e){this.title=e}let l=document.getElementById("projectBtn"),o=document.getElementById("submitBtn");l.addEventListener("click",(()=>{document.querySelector("#projectModal").showModal()})),o.addEventListener("click",(()=>{(()=>{let l=document.getElementById("projectName"),o=new n(l.value);t.push(o.title);let c=document.getElementsByClassName("projectDiv")[0].appendChild(document.createElement("div"));c.innerText=o.title,c.setAttribute("id","projects"),c.setAttribute("value",e++),l.value=""})(),(()=>{let e=document.querySelectorAll("projectDiv"),t=document.getElementsByClassName("rightside-header")[0];console.log(e);for(let e of projects)e.addEventListener("click",(function(e){console.log(e.target.innerText),t.innerText="",t.innerText=e.target.innerText}))})()}))})();