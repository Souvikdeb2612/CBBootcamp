const todo =document.getElementById('inp');
const btn = document.getElementById('addTodo');
const list =document.getElementById('todo-list');

btn.onclick = (e)=>{
    const todoText=todo.value;
    // todo Div
    const todoDiv =document.createElement('div');
    todoDiv.classList.add('todo');
    // todo Li
    const newTodo = document.createElement('li');
    newTodo.innerText=todoText;
    newTodo.classList.add('new-todo');

    todoDiv.appendChild(newTodo);

    // add edit button
    const edit = document.createElement('button');
    edit.innerHTML='<i class="far fa-edit"></i>';
    edit.classList.add('edit');
    todoDiv.appendChild(edit);
    // add delete button
    const trash = document.createElement('button');
    trash.innerHTML='<i class="fas fa-trash-alt"></i>';
    trash.classList.add('trash');
    todoDiv.appendChild(trash);

     

    // add items in the list
    list.appendChild(todoDiv);



    todo.value=" ";
}