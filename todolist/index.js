//CRUD ----------> Create Read Update Delete

let tasks = [];
const taskInput = document.querySelector(".input-container input");
const taskContainer = document.querySelector(".tasks-container");

const addTasks = (value, tasksArray) => {
  const task = {
    id: Math.random().toString(36).substring(2, 9),
    title: value,
    complete: false,
    date: new Date(),
  };
  tasks.push(task);

  renderTasks(tasks);
};

taskInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTasks(e.target.value, tasks);
    taskInput.value = "";
  }
});

const renderTasks = () => {
  let content = "";
  tasks.forEach((item) => {
    content += `<div ${
      item.complete ? "class='item change-complete-color'" : "class='item'"
    }>
    <div class="item-container">
        <div class="item-details">
            <div class="item-title">
            <input type="text" id="input-${item.id}" value=${
      item.title
    } class="input-title"   disabled />
            </div>
            <div class="item-date">${new Date(item.date).toLocaleString()}</div>
        </div>
        <div class="item-complete">
           <input class="item-check" type="checkbox" id="check-${item.id}"  ${
      item.complete ? "checked" : null
    }  /> 
           <button id="edit-${item.id}">Edit</button>
           <button id="delete-${item.id}">Delete</button>
        </div>
    
    </div>    

    </div>`;
  });
  taskContainer.innerHTML = content;
  console.log(tasks);
  genarateEvent(tasks);
};

const genarateEvent = () => {
  console.log("ruuuuun");
  tasks.forEach((item, index) => {
    document
      .querySelector(`#input-${item.id}`)
      .addEventListener("dblclick", (e) => {
        console.log("dbclick");
        e.target.removeAttribute("disabled");
      });

    document
      .querySelector(`#input-${item.id}`)
      .addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          editItem(item.id, e.target.value);
          e.target.setAttribute("disabled", true);
        }
      });

    document
      .querySelector(`#check-${item.id}`)
      .addEventListener("change", (e) => {
        item.complete = e.target.checked;
        e.target.parentElement.parentElement.parentElement.style.backgroundColor =
          "green";
      });

    document
      .querySelector(`#delete-${item.id}`)
      .addEventListener("click", () => {
        deleteItem(item.id);
      });
  });
};

const deleteItem = (id) => {
  tasks = tasks.filter((item) => item.id !== id);
  renderTasks(tasks);
};

const editItem = (id, value) => {
  tasks = tasks.map((item) => {
    if (item.id === id) {
      item = { ...item, title: value };
    } else {
      item;
    }
    return item;
  });

  renderTasks(tasks);
};
