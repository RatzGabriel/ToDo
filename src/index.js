
import { createProject,restoreLocal,todo,remove } from "./ProTodo"
let allProjects=[];

window.onload=function(){
    let allProjects=[];
    restoreLocal()
    createProject()
    
}

    
const project = document.getElementById('project');
project.addEventListener('click',function(e){
        e.preventDefault();
        createProject();
        
});


const getTodo = document.getElementById('todo');
getTodo.addEventListener('click',function(e){
        e.preventDefault();
        todo()
});


const removeProject = document.getElementById('remove');
removeProject.addEventListener('click',function(e){
        e.preventDefault();
        remove();
})







