const todo =document.getElementById('inp');
const btn = document.getElementById('addTodo');
const list =document.getElementById('list');

btn.onclick = (e)=>{
    const todoText=todo.value;
    const li =document.createElement('li');
    const rem = document.createElement('button');
    rem.innerHTML="Delete"

    li.innerText=todoText;
    list.append(li);
    list.after(rem);

    todo.value=" ";
}