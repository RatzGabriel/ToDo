
import { projectListener,saveLocal,restoreLocal } from "./ProTodo"

const contProject = document.getElementById('btnsDiv');

function loop(e){
    contProject.innerHTML="";
    for(let i = 0;i<e.length;i++){
        const button = document.createElement('button');
        button.id=`${i}`;
        button.classList.add('projectBtn')
        button.innerText=e[i].title;
        button.addEventListener('click',function(){
            projectListener(button)
        })
        contProject.appendChild(button);
    }saveLocal()
}


function addTodo(e){
    const itemDiv = document.getElementById('items');
    itemDiv.innerHTML="";
    for(let i = 0;i<e.SingleProject.length;i++){
        const itemDiv2 = document.createElement('div');
        const titleH1 = document.createElement('h1');
        const descP = document.createElement('p');
        const dueP = document.createElement('p');
        const prioP = document.createElement('p');
        const btnEdit = document.createElement('button');
        const btnRemove = document.createElement('button');
        itemDiv2.classList.add('ItemContainer');
        dueP.innerText=`Due Date: ${e.SingleProject[i].due}`;
        prioP.innerText=`Priority: ${e.SingleProject[i].priority}`;
        titleH1.innerText=`Todo: ${e.SingleProject[i].title}`;
        descP.innerText=`Description: ${e.SingleProject[i].desc}`;
        btnRemove.innerText="Remove Todo"
        btnEdit.innerText="Edit Todo Name";

        btnRemove.addEventListener('click',function(){
            
            let allProjects = [];
            allProjects=JSON.parse(localStorage.getItem("AllProjects"));
            e.SingleProject.splice(i,1)
            addTodo(e)
            
        })
        btnEdit.addEventListener('click',function(){
            let allProjects = [];
            allProjects=JSON.parse(localStorage.getItem("AllProjects"));
            e.SingleProject[i].title=prompt('hello')
            addTodo(e)
        })

        titleH1.appendChild(btnEdit);
        itemDiv2.appendChild(titleH1);
        itemDiv2.appendChild(descP);
        itemDiv2.appendChild(dueP);
        itemDiv2.appendChild(prioP);
        itemDiv2.appendChild(btnRemove);
        itemDiv.appendChild(itemDiv2);
        
    }
    
}


export { loop,addTodo }