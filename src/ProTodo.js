import { Project,Todo } from "./classCreate";
import { loop,addTodo } from "./DOM"

const getProjectName = document.getElementById('project-data');


function createProject(){
    for(let i=0;i<allProjects.length;i++){
        if(allProjects[i].status==true){
            allProjects[i].status=false
        }
    }
    if(getProjectName.value!==""){
        let project = new Project(getProjectName.value);
        allProjects.push(project);
        loop(allProjects)
        saveLocal();
        return allProjects
}
}

function projectListener(btn){
        for(let i = 0;i<allProjects.length;i++){
            if(allProjects[i].status===true){
                allProjects[i].status=false
            }
            allProjects[btn.id].status=true
        }
        addTodo(allProjects[btn.id])
    }


function todo(){
    for(let i = 0;i<allProjects.length;i++){
        if(allProjects[i].status==true){
            console.log(allProjects[i])
            const todo = new Todo(title.value,desc.value,due.value,priority.value,"","");
            allProjects[i].SingleProject.push(todo);
            saveLocal();
            addTodo(allProjects[i])
        }
    }
}


function remove(){
    for(let i=0;i<allProjects.length;i++){
        if(allProjects[i].status==true){
            allProjects.splice(i,1);
        }
    }
    loop(allProjects)
}




let allProjects=[];





function saveLocal(){
    
    localStorage.setItem("AllProjects",JSON.stringify(allProjects));
}


function restoreLocal(){
    
    allProjects=JSON.parse(localStorage.getItem("AllProjects"));
    if(allProjects===null){
        allProjects=[];
        loop(allProjects)
    }
    else{
        
        loop(allProjects)
    }
}


export { createProject,saveLocal,restoreLocal,projectListener,todo,remove }