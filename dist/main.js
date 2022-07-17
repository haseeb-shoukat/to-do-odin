(()=>{"use strict";const t=function(t){let e=document.createElement(t.tag);if("attr"in t){let a=t.attr;for(let[t,n]of Object.entries(a))e.setAttribute(t,n)}return null!=t.classList&&e.classList.add(...t.classList),"text"in t&&(e.textContent=t.text),e},e=function(){const n=Object.keys(localStorage).reverse(),s=document.querySelector(".project-items");let i=document.querySelector(".selected");i=null===i||"Home"===i.id?"":i.textContent,s.innerHTML="",n.forEach((a=>{if("Home"===a)return;let n=t({tag:"div",classList:["project-item"]}),r=t({tag:"i",classList:["fa","fa-times","sm","remove-p-item"]}),o=t({tag:"div",classList:["project-name"],text:a});i===a&&o.classList.add("selected"),r.addEventListener("click",(t=>{localStorage.removeItem(a);let n=document.querySelector(".selected");n=n.textContent,n===a&&(document.querySelector(".main-container").innerHTML=""),e()})),n.append(o,r),s.appendChild(n)})),a()},a=function(){const e=document.querySelector("#projects"),a=document.querySelectorAll(".project-name"),i=document.querySelector("#home");i.addEventListener("click",n.bind(null,i)),a.forEach((t=>{t.addEventListener("click",n.bind(null,t))})),e.addEventListener("click",(e=>{document.querySelector(".overlay")||(container.appendChild(function(){const e=t({tag:"div",classList:["p-form-buttons"]}),a=t({tag:"button",text:"Cancel",classList:["cancel-btn"]});a.addEventListener("click",(t=>{document.querySelector(".overlay").remove()})),e.append(a,t({tag:"button",text:"Okay",classList:["submit-btn"]}));const n=t({tag:"div",classList:["project-form"]});n.append(t({tag:"div",text:"Create New Project",classList:["p-form-heading"]}),t({tag:"input",attr:{type:"text",placeholder:"Project Name"},classList:["p-form-text"]}),e);let s=t({tag:"div",classList:["overlay"]});return s.append(n),s}()),s())}))},n=function(t,e){let a=document.querySelector(".selected");t!==a&&(null!=a&&a.classList.remove("selected"),t.classList.add("selected"),"home"===t.id?r("Home"):r(t.textContent))},s=function(){document.querySelector(".submit-btn").addEventListener("click",i)};function i(t){let a=document.querySelector(".p-form-text").value;a=a.charAt(0).toUpperCase()+a.slice(1),""!==a?a.length>12?alert("Value too big"):(document.querySelector(".overlay").remove(),null===localStorage.getItem(a)?(localStorage.setItem(a,JSON.stringify([])),e()):alert("Project already exists.")):alert("Please enter a value")}const r=function(e){const a=document.querySelector(".main-container");if(null===localStorage.getItem(e))return void alert("Page does not exist.");a.innerHTML="";let n=t({tag:"div",classList:["header"]}),s=t({tag:"div",classList:["main-heading"],text:e}),i=t({tag:"button",text:"New Task",classList:["new-task-btn"]});i.addEventListener("click",o),n.append(s,i),a.appendChild(n)},o=function(){container.appendChild(function(){const e=t({tag:"div",classList:["t-form-buttons"]}),a=t({tag:"button",text:"Cancel",classList:["cancel-btn","b"]});a.addEventListener("click",(t=>{document.querySelector(".overlay").remove()})),e.append(a,t({tag:"button",text:"Create",attr:{for:"task-form"},classList:["t-submit-btn","b"]}));const n=t({tag:"div",classList:["task-form"]}),s=t({tag:"label",text:"Title:"});s.append(t({tag:"input",attr:{type:"text",required:"",name:"title"},classList:["t-title"]}));const i=t({tag:"label",text:"Description:"});i.append(t({tag:"textarea",attr:{rows:"4",name:"description"},classList:["t-description"]}));const r=t({tag:"label",classList:["m"]});r.innerHTML='Priority:\n   <input id="low" type="radio" name="priority" value="low" checked>\n   <label class="r" for="low">Low</label>\n   <input id="medium" type="radio" name="priority" value="medium">\n   <label class="r" for="medium">Medium</label>\n   <input id="high" type="radio" name="priority" value="high">\n   <label class="r" for="high">High</label>';const o=t({tag:"label",text:"Due Date:",classList:["m"]});o.append(t({tag:"input",attr:{type:"date",required:"",name:"dueDate"}}));const l=t({tag:"form",classList:["t-content"],attr:{id:"task-form",action:" ",method:"post"}});l.append(s,i,r,o,e),n.append(t({tag:"div",text:"Create a new task:",classList:["t-form-heading"]}),l);let c=t({tag:"div",classList:["overlay"]});return c.append(n),c}()),document.querySelector(".t-content").addEventListener("submit",(t=>{t.preventDefault(),document.querySelector(".overlay").remove();let e=document.querySelector(".selected");e="Home"===e.id?"Home":e.textContent;const a=localStorage.getItem(e),n=Object.fromEntries(new FormData(t.target).entries());if(null===a)return void alert("Project does not exist.");let s=JSON.parse(a);s.push(n),localStorage.setItem(e,JSON.stringify(s))}))},l=function(){let e=t({tag:"div",classList:["nav-bar"]});return e.append(t({tag:"i",classList:["fa","fa-tasks","fa-3x"],attr:{"aria-hidden":"true"}}),t({tag:"div",classList:["nav-heading"],text:"To-Do"}),t({tag:"div",classList:["nav-side"],text:"Tasks and Notes"})),e},c=function(){let e=t({tag:"div",classList:["side-bar"]});return e.append(d("home","Home"),d("briefcase","Projects")),e},d=function(e,a){let n=t({tag:"div",attr:{id:a.toLowerCase()},classList:["side-item"]});if(n.append(t({tag:"i",classList:["fa",`fa-${e}`],attr:{"aria-hidden":"true"}}),t({tag:"span",text:a})),"Projects"===a){let e=t({tag:"div"});return e.append(n,t({tag:"div",classList:["project-items"]})),e}return n};!function(){const a=document.querySelector("#container");[l(),c(),t({tag:"div",classList:["main-container"]})].forEach((t=>{a.appendChild(t)})),document.querySelector("#home").classList.add("selected"),null===localStorage.getItem("Home")&&localStorage.setItem("Home",JSON.stringify([])),e(),r("Home")}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVyxDQUFDLGNBUWhCLE9BTEE4RSxFQUFReEQsT0FDSnlELEVBQWUsT0FBUSxRQUN2QkEsRUFBZSxZQUFhLGFBR3pCRCxHQUdMQyxFQUFpQixTQUFTQyxFQUFNN0UsR0FFbEMsSUFBSThFLEVBQVc5RixFQUFjLENBQ3pCSSxJQUFLLE1BQ0xFLEtBQU0sQ0FDRm1CLEdBQUlULEVBQUsrRSxlQUVibEYsVUFBVyxDQUFDLGVBZWhCLEdBWkFpRixFQUFTM0QsT0FBT25DLEVBQWMsQ0FDMUJJLElBQUssSUFDTFMsVUFBVyxDQUFDLEtBQU0sTUFBTWdGLEtBQ3hCdkYsS0FBTSxDQUNGLGNBQWUsVUFHdkJOLEVBQWMsQ0FDVkksSUFBSyxPQUNMWSxLQUFNQSxLQUdHLGFBQVRBLEVBQXFCLENBQ3JCLElBQUlnRixFQUFNaEcsRUFBYyxDQUNwQkksSUFBSyxRQVFULE9BTEE0RixFQUFJN0QsT0FBTzJELEVBQVU5RixFQUFjLENBQy9CSSxJQUFLLE1BQ0xTLFVBQVcsQ0FBQyxvQkFHVG1GLEVBR1gsT0FBT0YsSUFuR1ksV0FDbkIsTUFBTW5ELEVBQVl4QyxTQUFTb0IsY0FBYyxjQUMzQixDQUFDaUUsSUFBZ0JFLElBQzNCMUYsRUFBYyxDQUNkSSxJQUFLLE1BQ0xTLFVBQVcsQ0FBQyxxQkFHVmMsU0FBUWUsSUFDVkMsRUFBVVAsWUFBWU0sTUFHMUJ2QyxTQUFTb0IsY0FBYyxTQUFTVixVQUFVQyxJQUFJLFlBQ1QsT0FBakNNLGFBQWF3QyxRQUFRLFNBQ3JCeEMsYUFBYXlDLFFBQVEsT0FBUUMsS0FBS0MsVUFBVSxLRmJoRDlDLElBQ0FtQyxFRWVXLFFDbkJmNkMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9yZWZyZXNoRE9NLmpzIiwid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9wcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvaW5pdGlhbGl6ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50YWcpXG5cbiAgICBpZiAoXCJhdHRyXCIgaW4gb2JqKSB7XG4gICAgICAgIGxldCBhdHRyT2JqID0gb2JqLmF0dHJcbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJPYmopKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvYmouY2xhc3NMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ub2JqLmNsYXNzTGlzdClcbiAgICB9XG5cbiAgICBpZiAoXCJ0ZXh0XCIgaW4gb2JqKSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoudGV4dFxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRWxlbWVudFxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Rm9ybSwgdGFza0Zvcm0gfSBmcm9tIFwiLi9wcm9qZWN0Rm9ybS5qc1wiXG5cbmNvbnN0IHJlZnJlc2hET00gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgLy8gaXRlbXMuZm9yRWFjaChpdGVtID0+IGNvbnNvbGUubG9nKEpTT04ucGFyc2UoaXRlbSkpKVxuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIGxvYWRQYWdlKG5hbWUpO1xufVxuXG5jb25zdCByZWZyZXNoUHJvamVjdHMgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHByb2plY3RzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1zXCIpO1xuICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG5cbiAgICBpZiAoc2VsZWN0ZWQgPT09IG51bGwgfHwgc2VsZWN0ZWQuaWQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIHNlbGVjdGVkID0gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgcHJvamVjdEl0ZW1zLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYoIHByb2plY3QgPT09IFwiSG9tZVwiKSByZXR1cm47XG4gICAgICAgIGxldCBwcm9qZWN0SXRlbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJwcm9qZWN0LWl0ZW1cIl0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZW1vdmVJY29uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6IFwiaVwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJmYVwiLCBcImZhLXRpbWVzXCIsIFwic21cIiwgXCJyZW1vdmUtcC1pdGVtXCJdLFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJwcm9qZWN0LW5hbWVcIl0sXG4gICAgICAgICAgICB0ZXh0OiBwcm9qZWN0LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0KTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQudGV4dENvbnRlbnRcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmcmVzaFByb2plY3RzKClcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmQoIHByb2plY3ROYW1lLCByZW1vdmVJY29uKVxuXG4gICAgICAgIHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSlcbiAgICB9KVxuXG4gICAgY2hhbmdlUGFnZSgpO1xufVxuXG5jb25zdCBjaGFuZ2VQYWdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gICAgY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW5hbWVcIik7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcblxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGl0ZW1TZWxlY3Rpb24uYmluZChudWxsLCBob21lKSlcblxuICAgIHByb2plY3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpdGVtU2VsZWN0aW9uLmJpbmQobnVsbCwgaXRlbSkpfSlcblxuICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKSkgcmV0dXJuO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICB9KVxufVxuXG5jb25zdCBpdGVtU2VsZWN0aW9uID0gZnVuY3Rpb24oaXRlbSwgZSkge1xuICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG4gICAgaWYgKGl0ZW0gPT09IHNlbGVjdGVkKSByZXR1cm47XG4gICAgaWYgKHNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAoaXRlbS5pZCA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgbG9hZFBhZ2UoXCJIb21lXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsb2FkUGFnZShpdGVtLnRleHRDb250ZW50KTtcbiAgICB9XG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb3JtKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtKGUpIHtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wLWZvcm0tdGV4dFwiKS52YWx1ZTtcbiAgICBuYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZVwiKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUubGVuZ3RoID4gMTIpIHtcbiAgICAgICAgYWxlcnQoXCJWYWx1ZSB0b28gYmlnXCIpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5yZW1vdmUoKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgPT09IG51bGwpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgIH1cblxufVxuXG5jb25zdCBsb2FkUGFnZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gICAgbGV0IHBhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCk7XG4gICAgaWYgKHBhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgYWxlcnQoXCJQYWdlIGRvZXMgbm90IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfTtcblxuICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOlwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wiaGVhZGVyXCJdXG4gICAgfSlcblxuICAgIGxldCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJtYWluLWhlYWRpbmdcIl0sXG4gICAgICAgIHRleHQ6IGlkLFxuICAgIH0pXG5cbiAgICBsZXQgYnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJidXR0b25cIixcbiAgICAgICAgdGV4dDogXCJOZXcgVGFza1wiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcIm5ldy10YXNrLWJ0blwiXSxcbiAgICB9KTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3VGFzaylcbiAgICBoZWFkZXIuYXBwZW5kKCBoZWFkaW5nLCBidXR0b24pXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcblxuXG59XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0oKSk7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtY29udGVudFwiKVxuICAgIHRhc2tDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikucmVtb3ZlKCk7XG4gICAgICAgIGxldCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuXG4gICAgICAgIGlmIChrZXkuaWQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICBrZXkgPSBcIkhvbWVcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0ga2V5LnRleHRDb250ZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KS5lbnRyaWVzKCkpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBhbGVydChcIlByb2plY3QgZG9lcyBub3QgZXhpc3QuXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgICAgICB0YXNrcy5wdXNoKGZvcm1EYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICBcbiAgICB9KVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZFRhc2tzKHRhc2spIHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKVxuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodCwgZCwgZERhdGUsIHApIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHA7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0O1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbihkKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZDtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUoZERhdGUpIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGREYXRlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eShwKSB7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcDtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVmcmVzaERPTX0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudC5qc1wiXG5cbmNvbnN0IHByb2plY3RGb3JtID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBidXR0b25zID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJwLWZvcm0tYnV0dG9uc1wiXSwgXG4gICAgfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wiY2FuY2VsLWJ0blwiXSwgXG4gICAgfSlcblxuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBcbiAgICBidXR0b25zLmFwcGVuZCggY2FuY2VsQnRuLCBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImJ1dHRvblwiLFxuICAgICAgICB0ZXh0OiBcIk9rYXlcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJzdWJtaXQtYnRuXCJdLCBcbiAgICB9KSlcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJwcm9qZWN0LWZvcm1cIl0sIFxuICAgIH0pXG4gICAgXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kKGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIHRleHQ6IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wicC1mb3JtLWhlYWRpbmdcIl0sIFxuICAgIH0pLCBcbiAgICBcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImlucHV0XCIsXG4gICAgICAgIGF0dHI6e1xuICAgICAgICAgICAgdHlwZSA6IFwidGV4dFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUHJvamVjdCBOYW1lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTGlzdDogW1wicC1mb3JtLXRleHRcIl0sIFxuICAgIH0pLCBidXR0b25zKVxuXG4gICAgbGV0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcIm92ZXJsYXlcIl0sIFxuICAgIH0pXG4gICAgXG4gICAgb3ZlcmxheS5hcHBlbmQocHJvamVjdEZvcm0pO1xuXG4gICAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmNvbnN0IHRhc2tGb3JtID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBidXR0b25zID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0LWZvcm0tYnV0dG9uc1wiXSwgXG4gICAgfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wiY2FuY2VsLWJ0blwiLCBcImJcIl0sIFxuICAgIH0pXG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5yZW1vdmUoKTtcbiAgICB9KVxuICAgIFxuICAgIGJ1dHRvbnMuYXBwZW5kKCBjYW5jZWxCdG4sIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHRleHQ6IFwiQ3JlYXRlXCIsXG4gICAgICAgIGF0dHI6IHtmb3I6IFwidGFzay1mb3JtXCJ9LFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInQtc3VibWl0LWJ0blwiLCBcImJcIl0sIFxuICAgIH0pKVxuXG4gICAgY29uc3QgdGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInRhc2stZm9ybVwiXSwgXG4gICAgfSlcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJsYWJlbFwiLFxuICAgICAgICB0ZXh0OiBcIlRpdGxlOlwiLFxuICAgIH0pXG5cbiAgICB0aXRsZS5hcHBlbmQoY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJpbnB1dFwiLFxuICAgICAgICBhdHRyOntcbiAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgbmFtZTpcInRpdGxlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTGlzdDogW1widC10aXRsZVwiXSwgXG4gICAgfSkpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6IFwibGFiZWxcIixcbiAgICAgICAgdGV4dDogXCJEZXNjcmlwdGlvbjpcIlxuICAgIH0pXG5cbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICBhdHRyOntcbiAgICAgICAgICAgIHJvd3MgOiBcIjRcIixcbiAgICAgICAgICAgIG5hbWU6XCJkZXNjcmlwdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc0xpc3Q6IFtcInQtZGVzY3JpcHRpb25cIl0sIFxuICAgIH0pKVxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImxhYmVsXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wibVwiXSxcbiAgICB9KVxuXG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OlxuICAgPGlucHV0IGlkPVwibG93XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIiBjaGVja2VkPlxuICAgPGxhYmVsIGNsYXNzPVwiclwiIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XG4gICA8aW5wdXQgaWQ9XCJtZWRpdW1cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiPlxuICAgPGxhYmVsIGNsYXNzPVwiclwiIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XG4gICA8aW5wdXQgaWQ9XCJoaWdoXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCI+XG4gICA8bGFiZWwgY2xhc3M9XCJyXCIgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPmBcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImxhYmVsXCIsXG4gICAgICAgIHRleHQ6IFwiRHVlIERhdGU6XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wibVwiXSxcbiAgICB9KVxuXG4gICAgZHVlRGF0ZS5hcHBlbmQoY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzpcImlucHV0XCIsXG4gICAgICAgIGF0dHI6IHt0eXBlOlwiZGF0ZVwiLCByZXF1aXJlZDpcIlwiLCBuYW1lOlwiZHVlRGF0ZVwiLH0sXG4gICAgfSkpXG5cbiAgICBjb25zdCBmb3JtQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6XCJmb3JtXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1widC1jb250ZW50XCJdLFxuICAgICAgICBhdHRyOntpZDpcInRhc2stZm9ybVwiLCBhY3Rpb246XCIgXCIsIG1ldGhvZDpcInBvc3RcIn0sXG4gICAgfSlcblxuICAgIGZvcm1Db250ZW50LmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBidXR0b25zKTtcbiAgICBcbiAgICB0YXNrRm9ybS5hcHBlbmQoY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgdGV4dDogXCJDcmVhdGUgYSBuZXcgdGFzazpcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJ0LWZvcm0taGVhZGluZ1wiXSwgXG4gICAgfSksIGZvcm1Db250ZW50KVxuXG4gICAgbGV0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBjbGFzc0xpc3Q6IFtcIm92ZXJsYXlcIl0sIFxuICAgIH0pXG4gICAgXG4gICAgb3ZlcmxheS5hcHBlbmQodGFza0Zvcm0pO1xuXG4gICAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdEZvcm0sIHRhc2tGb3JtXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnQuanNcIlxuaW1wb3J0IHsgcmVmcmVzaERPTSB9IGZyb20gXCIuL3JlZnJlc2hET00uanNcIlxuXG5cbmNvbnN0IGluaXRpYWxpemVQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gICAgY29uc3QgaXRlbXMgPSBbY3JlYXRlTmF2YmFyKCksIGNyZWF0ZVNpZGViYXIoKSwgXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wibWFpbi1jb250YWluZXJcIl0sXG4gICAgICAgIH1cbiAgICApXVxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJIb21lXCIpID09PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSG9tZVwiLCBKU09OLnN0cmluZ2lmeShbXSkpXG4gICAgfVxuXG4gICAgcmVmcmVzaERPTShcIkhvbWVcIik7XG59O1xuXG5jb25zdCBjcmVhdGVOYXZiYXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbmF2QmFyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJuYXYtYmFyXCJdLFxuICAgIH0pXG4gICAgXG4gICAgbmF2QmFyLmFwcGVuZChcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6IFwiaVwiLFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbXCJmYVwiLCBcImZhLXRhc2tzXCIsIFwiZmEtM3hcIl0sXG4gICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFtcIm5hdi1oZWFkaW5nXCJdLFxuICAgICAgICAgICAgdGV4dDogXCJUby1Eb1wiXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgIGNsYXNzTGlzdDogW1wibmF2LXNpZGVcIl0sXG4gICAgICAgICAgICB0ZXh0OiBcIlRhc2tzIGFuZCBOb3Rlc1wiXG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBuYXZCYXI7XG59XG5cblxuY29uc3QgY3JlYXRlU2lkZWJhciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzaWRlQmFyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgY2xhc3NMaXN0OiBbXCJzaWRlLWJhclwiXSxcbiAgICB9KVxuXG4gICAgc2lkZUJhci5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZVNpZGVJdGVtKFwiaG9tZVwiLCBcIkhvbWVcIiksIFxuICAgICAgICBjcmVhdGVTaWRlSXRlbShcImJyaWVmY2FzZVwiLCBcIlByb2plY3RzXCIpLCBcbiAgICApXG5cbiAgICByZXR1cm4gc2lkZUJhcjtcbn1cblxuY29uc3QgY3JlYXRlU2lkZUl0ZW0gPSBmdW5jdGlvbihpY29uLCB0ZXh0KSB7XG5cbiAgICBsZXQgc2lkZUl0ZW0gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICBpZDogdGV4dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTGlzdDogW1wic2lkZS1pdGVtXCJdLFxuICAgIH0pXG5cbiAgICBzaWRlSXRlbS5hcHBlbmQoY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJpXCIsXG4gICAgICAgIGNsYXNzTGlzdDogW1wiZmFcIiwgYGZhLSR7aWNvbn1gXSxcbiAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICB9XG4gICAgfSksXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgIHRleHQ6IHRleHRcbiAgICB9KSlcblxuICAgIGlmICh0ZXh0ID09PSBcIlByb2plY3RzXCIpIHtcbiAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgZGl2LmFwcGVuZChzaWRlSXRlbSwgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFtcInByb2plY3QtaXRlbXNcIl1cbiAgICAgICAgfSkpXG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lkZUl0ZW1cbn1cblxuZXhwb3J0IHtpbml0aWFsaXplUGFnZX0iLCJpbXBvcnQgeyBpbml0aWFsaXplUGFnZSB9IGZyb20gXCIuL21vZHVsZXMvaW5pdGlhbGl6ZVBhZ2UuanNcIlxuXG5pbml0aWFsaXplUGFnZSgpO1xuXG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsIm9iaiIsImVsZW1lbnQiLCJkb2N1bWVudCIsInRhZyIsImF0dHJPYmoiLCJhdHRyIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwic2V0QXR0cmlidXRlIiwidW5kZWZpbmVkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJ0ZXh0IiwicmVmcmVzaFByb2plY3RzIiwicHJvamVjdHMiLCJrZXlzIiwibG9jYWxTdG9yYWdlIiwicmV2ZXJzZSIsInByb2plY3RJdGVtcyIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RlZCIsImlkIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInByb2plY3QiLCJwcm9qZWN0SXRlbSIsInJlbW92ZUljb24iLCJwcm9qZWN0TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVtb3ZlSXRlbSIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiY2hhbmdlUGFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJob21lIiwiaXRlbVNlbGVjdGlvbiIsImJpbmQiLCJpdGVtIiwiY29udGFpbmVyIiwiYnV0dG9ucyIsImNhbmNlbEJ0biIsInJlbW92ZSIsInByb2plY3RGb3JtIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib3ZlcmxheSIsImFkZFByb2plY3QiLCJsb2FkUGFnZSIsImhhbmRsZUZvcm0iLCJuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImxlbmd0aCIsImFsZXJ0IiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibWFpbkNvbnRhaW5lciIsImhlYWRlciIsImhlYWRpbmciLCJidXR0b24iLCJjcmVhdGVOZXdUYXNrIiwiZm9yIiwidGFza0Zvcm0iLCJ0aXRsZSIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJyb3dzIiwicHJpb3JpdHkiLCJkdWVEYXRlIiwiZm9ybUNvbnRlbnQiLCJhY3Rpb24iLCJtZXRob2QiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiZnJvbUVudHJpZXMiLCJGb3JtRGF0YSIsInRhcmdldCIsInRhc2tzIiwicGFyc2UiLCJwdXNoIiwiY3JlYXRlTmF2YmFyIiwibmF2QmFyIiwiY3JlYXRlU2lkZWJhciIsInNpZGVCYXIiLCJjcmVhdGVTaWRlSXRlbSIsImljb24iLCJzaWRlSXRlbSIsInRvTG93ZXJDYXNlIiwiZGl2IiwiaW5pdGlhbGl6ZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9