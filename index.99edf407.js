const t={form:document.querySelector("#task-form"),listElem:document.querySelector("#task-list")};let e=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[t]];return e};function n(t){const n={id:e()};return new FormData(t.currentTarget).forEach(((t,e)=>{n[e]=t})),n}const r={add:function(t){const e=JSON.parse(localStorage.getItem("key"))||[];e.push(t),localStorage.setItem("key",JSON.stringify(e))},getAll:function(){return JSON.parse(localStorage.getItem("key"))||[]}};function o(t){return`<li class="task-list-item">\n <button class="task-list-item-btn" data-id="${t.id}">Видалити</button>\n <h3>${t.taskName}</h3>\n <p>${t.taskText}</p>\n </li>`}!function(){const e=r.getAll().map(o).join("");t.listElem.insertAdjacentHTML("beforeend",e)}(),t.form.addEventListener("submit",(function(e){e.preventDefault();const a=n(e);r.add(a);const s=o(a);t.listElem.insertAdjacentHTML("beforeend",s),e.currentTarget.reset()})),t.listElem.addEventListener("click",(function(t){t.target}));
//# sourceMappingURL=index.99edf407.js.map