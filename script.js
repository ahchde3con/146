let tasks=JSON.parse(localStorage.tasks||"[]"),filter='all';
function save(){localStorage.tasks=JSON.stringify(tasks)}
function addTask(){let v=task.value.trim();if(!v)return alert("Введите задачу");tasks.push({t:v,d:false});task.value="";save();render()}
function render(){list.innerHTML="";let arr=tasks.filter(x=>filter=="all"||filter=="done"&&x.d||filter=="active"&&!x.d);arr.forEach(a=>{let i=tasks.indexOf(a);let li=document.createElement("li");li.innerHTML=`<span class="${a.d?'done':''}">${a.t}</span><span><button onclick="toggle(${i})">✓</button><button onclick="del(${i})">🗑</button></span>`;list.appendChild(li)});stats.textContent=`Всего: ${tasks.length} | Выполнено: ${tasks.filter(x=>x.d).length} | Осталось: ${tasks.filter(x=>!x.d).length}`}
function toggle(i){tasks[i].d=!tasks[i].d;save();render()}
function del(i){tasks.splice(i,1);save();render()}
task.addEventListener("keydown",e=>{if(e.key=="Enter")addTask()});render();
