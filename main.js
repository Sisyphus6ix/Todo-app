(()=>{"use strict";const e=[];function t(e){this.title=e}let n=document.getElementsByClassName("taskDiv")[0],l=document.getElementsByClassName("projectDiv")[0],s=document.getElementsByClassName("rightside-header-title")[0],c=!1;const a=(t,n)=>{n.target.setAttribute("class","active"),s.innerText=t.title,c=!0,i(e)},i=e=>{let t;n.innerText="";for(let n=0;n<e.length;n++)t=e.find((e=>"active"==e.element.className));for(let e of t.tasks){let t=document.createElement("div"),l=document.createElement("h5"),s=document.createElement("p"),c=document.createElement("input");s.innerText=e.description,l.innerText=e.title,n.appendChild(t),t.appendChild(l),t.appendChild(s),t.appendChild(c),t.setAttribute("class","taskDetails"),l.setAttribute("class","taskTitle"),s.setAttribute("class","taskDescription"),c.setAttribute("type","checkbox"),c.setAttribute("class","checkbox")}d()},d=()=>{let e=document.getElementsByClassName("taskDetails"),t=document.getElementsByClassName("checkbox");for(let n=0;n<e.length;n++)e[n].setAttribute("id",n),t[n].setAttribute("id",n)};function m(e,t){this.title=e,this.description=t}let o=document.getElementById("projectBtn"),r=document.getElementById("projectSubmitBtn"),u=document.getElementById("taskBtn"),k=document.getElementById("taskSubmitBtn"),E=document.getElementById("clearBtn");o.addEventListener("click",(()=>{document.querySelector("#projectModal").showModal()})),r.addEventListener("click",(()=>{(()=>{let n=document.getElementById("projectName"),l={title:new t(n.value).title,element:"",tasks:[]};e.push(l),n.value=""})(),(e=>{l.innerText="";for(let t=0;t<e.length;t++){const n=e[t],s=document.createElement("div");s.setAttribute("id",t),s.innerText=n.title,n.element=s,l.appendChild(s),s.addEventListener("click",(e=>{1==c&&document.getElementsByClassName("active")[0].removeAttribute("class"),a(n,e)}))}})(e)})),u.addEventListener("click",(()=>{document.querySelector("#taskModal").showModal()})),k.addEventListener("click",(()=>{(()=>{let t,n=document.getElementById("taskName"),l=document.getElementById("taskDescription"),s=new m(n.value,l.value);console.log(s);for(let n=0;n<e.length;n++)t=e.find((e=>"active"==e.element.className));t.tasks.push(s),n.value="",l.value=""})(),i(e)})),E.addEventListener("click",(()=>{(t=>{let n=t.find((e=>"active"==e.element.className)),l=document.getElementsByClassName("taskDetails"),s=document.getElementsByClassName("checkbox");for(let e=0;e<n.tasks.length;e++)1==s[e].checked&&(alert(`Checkbox index:${e} checked!`),n.tasks[e]="Empty",l[e].innerHTML="");console.log(e)})(e),i(e)}))})();