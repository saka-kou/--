const todoText = document.getElementById("todo-text");
const addBtn = document.getElementById("add-btn");
const todoLi = document.getElementById("todo-list");

// console.log(addBtn);
if (todoText.value = "") {
    alert("タスクが入力されていません");
    console.log("合ってる");
}

else {
    addBtn.addEventListener("click", () => {
        let value = todoText.value;
        localStorage.setItem("add", "value");
        const taskItem = document.createElement("li");
        console.log(value);
        taskItem.textContent = value;
        todoLi.appendChild(taskItem);
        todoText.value = "";
        // todoLi.insertAdjacentHTML("beforeend", value);
    });
}

