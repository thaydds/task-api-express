import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const listProjects = () => {
    return axios.get(`${BASE_URL}/projects`)
    .then( res => {
        return res.data
    })
}

export const addProject = ( title ) => {
    const id = Math.floor(Math.random() * 100)
    const tasks = []
    return axios.post(`${BASE_URL}/projects`, {
        title,
        id,
        tasks
    }).then( res => {
        return res.data
    })
}

export const deleteProject = ( id ) => {
    return axios.delete(`${BASE_URL}/projects/${id}`).then( res => {
        return res.data
    })
}

export const editProject = ( title, id ) => {
    return axios.put(`${BASE_URL}/projects/${id}`, {
        title,
    }).then( res => {
        return res.data
    })
}

export const addTask = ( task, id ) => {
    return axios.put(`${BASE_URL}/projects/${id}/task`, {
        task,
    }).then( res => {
        return res.data
    })
}