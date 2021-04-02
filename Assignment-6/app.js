const todo =document.getElementById('inp');
const btn = document.getElementById('addTodo');
const list =document.getElementById('todo-list');

btn.onclick = (e)=>{
    const todoText=todo.value;

    if (todoText.trim()!=0){
        // todo Div
        const todoDiv =document.createElement('div');
        todoDiv.classList.add('todo');
        // todo Li
        const newTodo = document.createElement('input');
        newTodo.classList.add('new-todo');
        newTodo.disabled = true;
        newTodo.value=todoText;

        // function to toggle enable and disable of input
        function toggleTodo() {
            newTodo.disabled = !newTodo.disabled;
            edit.classList.toggle('done');
            if (edit.innerHTML === '<i class="fas fa-check"></i>') {
                edit.innerHTML = '<i class="far fa-edit"></i>';
              } else {
                edit.innerHTML = '<i class="fas fa-check"></i>';
              }
        }

        todoDiv.appendChild(newTodo);

        // add edit button
        const edit = document.createElement('button');
        edit.innerHTML='<i class="far fa-edit"></i>';
        edit.classList.add('edit_btn');
        todoDiv.appendChild(edit);
        // add delete button
        const trash = document.createElement('button');
        trash.innerHTML='<i class="fas fa-trash-alt"></i>';
        trash.classList.add('trash_btn');
        todoDiv.appendChild(trash);

        // add items in the list
        list.appendChild(todoDiv);
        trash.onclick=(e)=>{
            list.removeChild(todoDiv);

        }
        edit.onclick=(e)=>{
            toggleTodo();
        } 
            
    }
    todo.value=" ";
}