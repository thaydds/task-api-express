import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import TaskList from './components/TaskList'
import { listProjects, addProject, deleteProject, editProject, addTask } from './http'
import './App.css'


function App() {

    const [ projects, setProjects] = useState([])
    const [ tasks, setTasks ] = useState(undefined)
    const [ id, setId ] = useState()

    useEffect( () => {
        listProjects().then( projects => {
            setProjects(projects)
        })
    },[])

    const handleAddProject = ( title ) => {
        addProject(title).then(  projects  =>{
            setProjects(projects)
        })
    }

    const handleDeleteProject = ( id )  => {
        deleteProject(id).then( projects => {
            setProjects(projects)
        })
    }

    const handleViewProject = (id) => {
        const project = projects.filter( p => p.id === id)
        setTasks(project[0].tasks)
        setId(project[0].id)
    }

    const handleEditProject = (title, id) => {
        editProject(title, id).then( projects => {
            setProjects(projects)
        })
    }

    const handleAddTask = ( task ) => {
        addTask(task, id).then(projects => {
            const project = projects.filter( p => p.id === id)
            setTasks(project[0].tasks)
            setProjects(projects)
        })
    }
    
    return (
        <>
            <Header />
            <main>
                <ProjectForm handleAddProject={handleAddProject}/>
                <div id="group">
                    <ProjectList projects={projects} handleDeleteProject={handleDeleteProject} 
                    handleViewProject={handleViewProject} handleEditProject={handleEditProject} />
                    <TaskList tasks={tasks} handleAddTask={handleAddTask} />
                </div>
            </main>
        </>
    );
}

export default App;
