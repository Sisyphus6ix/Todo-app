(()=>{"use strict";const e=[];function t(e){this.title=e}let n=document.getElementsByClassName("projectDiv")[0],l=document.getElementsByClassName("rightside-header-title")[0];const d=t=>{console.log(e),l.innerText=t.title};let c=document.getElementById("projectBtn"),o=document.getElementById("projectSubmitBtn"),s=document.getElementById("taskBtn"),i=document.getElementById("taskSubmitBtn");c.addEventListener("click",(()=>{document.querySelector("#projectModal").showModal()})),o.addEventListener("click",(()=>{(()=>{let n=document.getElementById("projectName"),l={title:new t(n.value).title,element:"",tasks:[{"Default Task":"Just an example"}]};e.push(l),n.value=""})(),(e=>{n.innerText="";for(let t=0;t<e.length;t++){const l=e[t],c=document.createElement("div");c.setAttribute("id",t),c.innerText=l.title,l.element=c,n.appendChild(c),c.addEventListener("click",(()=>{d(l)}))}})(e)})),s.addEventListener("click",(()=>{document.querySelector("#taskModal").showModal()})),i.addEventListener("click",(()=>{(()=>{let e=document.getElementById("taskName").value;console.log(e)})()}))})();