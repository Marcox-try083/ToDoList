
// selecting form
const form = document.querySelector('form');
const input= document.querySelector('input');
const YourTask = document.querySelector('#YourTask');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text = input.value.trim();

    const parentdiv = document.createElement('div');
    parentdiv.style.marginTop="10px";
    parentdiv.style.marginLeft="10px";
    if(text=="") return;

    const task = document.createElement('span');
    task.textContent = text;
    // task.style.marginTop="10px";



    const DeleteButton = document.createElement('button');
    DeleteButton.textContent="Delete";
    DeleteButton.style.marginLeft="10px";
    DeleteButton.style.fontSize="20px";
    DeleteButton.addEventListener('click',(e)=>{
        parentdiv.remove();
    })

    const DoneButton = document.createElement('button');
    DoneButton.textContent="Done";
    DoneButton.style.color= "green";
    DoneButton.style.fontSize="20px";
    DoneButton.style.marginLeft="20px";
    DoneButton.addEventListener('click',(e)=>{
    task.style.textDecoration='line-through';
    task.style.color="grey";
    })

    parentdiv.append(task,DoneButton,DeleteButton);

    YourTask.append(parentdiv);

    form.reset();

})