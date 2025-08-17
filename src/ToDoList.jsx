import { useState } from "react";




function ToDolist(){
    document.title = "To-Do List"

    const [tasks,SetTasks] = useState([]);
    const [newTask,SetNewTask] = useState("");

    function handleInputChange(event){
        SetNewTask(event.target.value);
    }


    function addtask(){
        
        if (newTask.trim() !== ""){
            SetTasks(t => [...t,newTask])
            SetNewTask("");

        }


    }
    function removetask(index){
        const newtasks = tasks.filter((_,i) => i !== index );
        SetTasks(newtasks);


    }
    function movetaskup(i){

        if(i > 0){
            const updated_tasks = [...tasks];
            [updated_tasks[i],updated_tasks[i-1] ] = [updated_tasks[i-1],updated_tasks[i]];
            SetTasks(updated_tasks);

        }



    }
    function movetaskdown(i){
        
        if(i < (tasks.length -1) ){
            const updated_tasks = [...tasks];
            [updated_tasks[i],updated_tasks[i+1]] = [updated_tasks[i + 1],updated_tasks[i]];
            SetTasks(updated_tasks);
        }

    } 



    

    return(<>
    
    <div className="to-do-list-container">
        <div className="enter-container">
            <div className="add-task-container">
                <input type="text" className="task-enter" value={newTask} onChange={handleInputChange} placeholder="Enter your task"/>
                <button className="add-task" onClick={addtask}>Add</button>
            </div>


        </div>
        
        {tasks.length > 0 &&(<div className="tasks" >
            <ol>
                {tasks.map((_,i) =><li key={i}>
                    <span className="Text">{_}</span>

                    
                    <button
                      type="button"
                      className="delete task-button"
                      onClick={() => {removetask(i)}}
                      aria-label="Delete task"
                      title="Delete"
                    ></button>

                    <button
                      type="button"
                      className="move-task-up task-button"
                      onClick={() =>{ movetaskup(i)}}
                      aria-label="Move task up"
                      title="Move up"
                    ></button>

                    <button
                      type="button"
                      className="move-task-down task-button"
                      onClick={() => {movetaskdown(i)}}
                      aria-label="Move task down"
                      title="Move down"
                    ></button>

                </li> )}
            </ol>

        </div>)}
        

    </div>
    
    </>);


}
export default ToDolist