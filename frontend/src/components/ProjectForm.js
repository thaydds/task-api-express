import React, { useState } from 'react'

const ProjectForm = (props) => {
    const [ text, setText ] = useState('')
    const { handleAddProject } = props

    return(
        <form>
            <input value={text} onChange={ (e) => setText(e.target.value) } placeholder="Project Name" type="text"></input>
            <button onClick={(e) => {
                e.preventDefault()
                handleAddProject(text)
            }}>Create</button>
        </form>
    )
}

export default ProjectForm