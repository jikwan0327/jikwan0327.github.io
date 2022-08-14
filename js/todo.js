const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; //클릭한 버튼의 값을 가져옴
    li.remove(); //클릭한 값을 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li"); //li 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); //span 생성
    span.innerText = newTodo.text; // 생성한 span에 매겨변수로 받아온 newTodo 값을 넣는다.
    const button = document.createElement("button");
    button.innerText = "❌"; //button안에 X문자 추가
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li의 자식에 span을 넣음
    li.appendChild(button); //li의 자식에 button을 넣음
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //현재 input의 value를 변수에 복사
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //newTodo를 toDos라는 배열에 넣는다
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
