import React , {useState}from 'react'

const TaskList = ({ tasks, handleAddTask }) => {
    const [ text, setText ] = useState('')

    return(
        <div id="task-list">
            <h3>Tasks List</h3>
            
            {!tasks ? 
            <p>Nenhum Projeto foi selecionado</p>
            :
            <>
            <form>
            <input value={text} onChange={ (e) => setText(e.target.value) } placeholder="Task Name" type="text"></input>
            <button onClick={(e) => {
                e.preventDefault()
                handleAddTask(text)
            }}>Add</button>
            </form>
            <ul>
                {tasks.map( task =>{
                   return <li key={task}>{task}</li>
                })}
            </ul>
            </>
            }
            
    </div>
    )
}

export default TaskList