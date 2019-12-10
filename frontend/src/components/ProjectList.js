import React, { useState } from 'react'


const ProjectList = ({ projects, handleDeleteProject, handleViewProject, handleEditProject }) => {
    const [ text, setText ] = useState('')
    const [ state, setState ] = useState({isEdit: false})

    return(
        <div id="project-list">
            <h3>Projects List</h3>
            <ul>
                { projects.map( project => {
                //   project = Object.assign(project, {isEdit: false})
                    return( 
                    <div key={project.id}>
                        {
                            state.isEdit && state.id === project.id ?
                            <form>
                                <input value={text} onChange={ (e) => setText(e.target.value) } placeholder="Edit Project Name" type="text"></input>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    handleEditProject(text, state.id)
                                    setState({...state, isEdit: false})
                                }}>Save</button>
                            </form>
                            :
                            <li>{project.title}</li>
                        }
                        <button onClick={()=> handleDeleteProject(project.id)}>Delete</button>
                            <button onClick={()=> {
                                setState({isEdit: true, id: project.id})
                                setText(project.title)
                            } }>Edit</button>
                            <button onClick={()=> handleViewProject(project.id)}>View</button>
                       
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProjectList