const t={form:document.querySelector("#task-form"),listElem:document.querySelector("#task-list")};function e(t){const e={};return new FormData(t.currentTarget).forEach(((t,o)=>{e[o]=t})),e}const o={add:function(t){const e=JSON.parse(localStorage.getItem("key"))||[];e.push(t),localStorage.setItem("key",JSON.stringify(e))}};t.form.addEventListener("submit",(function(t){t.preventDefault();const n=e(t);o.add(n)}));
//# sourceMappingURL=index.9b72bcae.js.map
