(()=>{"use strict";let e=[];function t(e){this.title=e}let l=document.getElementById("projectBtn"),n=document.querySelector("#projectModal"),o=document.getElementById("submitBtn"),c=document.getElementsByClassName("projectDiv"),d=document.createElement("div");d.setAttribute("class","projects"),l.addEventListener("click",(()=>{n.showModal()})),o.addEventListener("click",(()=>{let l=new t(document.getElementById("projectName").value);e.push(l.title),c[0].appendChild(d),d.innerText=l.title,console.log(l),console.table(e);for(let t=0;t<e.length;t++)c[t].appendChild(d),console.log(e[t])}))})();