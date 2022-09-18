// const userName  = document.querySelector("#exampleFirstName");
// const email  = document.querySelector("#exampleInputEmail");
// const phone  = document.querySelector("#phone");
let tableNone = document.querySelector("#none-tasks");
let tableDone = document.querySelector("#done-tasks");
// let deletOne = document.querySelector(".span-i");
let check = document.querySelector(".check");
let faCheck = document.querySelector(".fa-check");
let faTimes = document.querySelector(".fa-times");
let tasks = [];
let num = 1;
let data = {};
// let checked = false

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  data = Object.fromEntries(formData.entries());
  data.id = num;
  data.checked = false;
  // console.log(data);
  tasks.push(data);
  renderNone(tasks);
  // renderDone();
  num++;
  // console.log(num);
  delet = (e) => {
    // console.log(e);
    // console.log(data.id);
    tasks = tasks.filter((data) => data.id !== e);
    renderNone(tasks);
  };
  delet2 = (e) => {
    let tasks2 = tasks;
    // console.log(e);
    // console.log(data.id);
    tasks2 = tasks2.filter((data) => data.id == e);
    renderDone(tasks);
  };
  toggle = (e) => {
    let tasks2 = tasks;
    delet(e);
    tasks2 = tasks2.filter((data) => data.id == e);
    console.log(tasks2)
    renderDone(tasks2);
  };
  toggle2 = (e) => {
    delet2(e);
    let tasks2 = tasks;
    tasks2 = tasks2.filter((data) => data.id == e);
    renderNone(tasks);
  };
});


let renderNone = (e) => {
  tableNone.innerHTML = ``;
  e.map((data) => {
    tableNone.innerHTML += `
    <div class="bg-primary d-flex justify-content-around card-row">
    <span class="d-flex justify-content-center data userdata"style="color: var(--bs-green)">Username: ${data.username}</span>
    <span class="d-flex justify-content-center data userdata" style="color: var(--bs-pink)">Email: ${data.email}</span>
    <span class="d-flex justify-content-center data userdata" style="color: var(--bs-blue)">Phone number: ${data.phone}</span>
    <span class="span-i check" onclick="toggle(${data.id})"><i class="fa fa-times"></i></span>
    <span class="span-i" onclick="delet(${data.id})" id="${data.id}"><i class="fa fa-trash-o" style="color: var(--bs-pink)"></i></span>
    </div>
    `;
  });
};
let renderDone = (e) => {
  // tableDone.innerHTML = ``;
  e.map((data) => {
    tableDone.innerHTML += `
    <div class="bg-primary d-flex justify-content-around card-row">
    <span class="d-flex justify-content-center data userdata"style="color: var(--bs-green)">Username: ${data.username}</span>
    <span class="d-flex justify-content-center data userdata" style="color: var(--bs-pink)">Email: ${data.email}</span>
    <span class="d-flex justify-content-center data userdata" style="color: var(--bs-blue)">Phone number: ${data.phone}</span>
    <span class="span-i check" onclick="toggle2(${data.id})"><i class="fa fa-check"></i></span>
    <span class="span-i" onclick="delet2(${data.id})" id="${data.id}"><i class="fa fa-trash-o" style="color: var(--bs-pink)"></i></span>
    </div>
    `;
  });
};

$("#delete-all").click(()=>{
  // console.log("sdf");
  tableNone.innerHTML = ``;
  tableDone.innerHTML = ``;
})
