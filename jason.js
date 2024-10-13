const addTask = document.querySelector(`.add-task`);
const addInput = document.querySelector(`#add-input`);
const list = document.querySelector(`.list`);
let del = document.querySelectorAll(`.del`);
let lies = document.querySelectorAll(`.lies`);

let count = 0;

addTask.addEventListener("click", (e) => {
  if (addInput.value === "") {
    return;
  } else {
    // const li = `<li class="lies"><p>${addInput.value}</p><img class="del" src="./Group 728.png" alt="" />  </li>`;
    const li = document.createElement("li");
    li.classList.add("lies");
    // list.innerHTML += `${li}`;
    const p = document.createElement("p");
    p.textContent = addInput.value;
    const img = document.createElement("img");
    img.src = "./Group 728.png";
    img.classList.add("del");
    li.appendChild(p);
    li.appendChild(img);
    list.appendChild(li);
    addInput.value = "";
    count++;
    if (count === 5) {
      addTask.disabled = true;
    }

    img.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      count--;
    });
  }
});
