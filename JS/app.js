let modal = document.querySelector("#modal");
let onSubmit = document.querySelector("#onSubmit");

onSubmit.addEventListener("submit", function () {
        modal.style.display = "flex";
        event.preventDefault();
})

closeModal.addEventListener("click", function () {
        modal.style.display = "none";
})

function addTask() {
        const taskInput = document.querySelector("#taskInput");
        const taskList = document.querySelector("#taskList");

        if (taskInput.value.trim() === "") {
                alert("Please enter a task.");
                return;
        }

        const taskItem = document.createElement("li");
        taskList.innerHTML = `
        ${taskInput.value}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
}

function deleteTask(button) {
        button.parentElement.remove();
}