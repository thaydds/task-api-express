const express = require('express')

const server = express()

server.use(express.json())

const projects = [
    {
        id: 1,
        title: 'first project',
        tasks:[]
    },
    {
        id: 2,
        title: 'second project',
        tasks:[]
    }
]

server.get('/', (req, res) => {
    return res.send('Welcome to task API')
})

server.get('/projects', (req, res) => {
    return res.json(projects)
})

server.post('/projects', (req, res) => {
    const { id, title, tasks} = req.body

    const project = { id, title, tasks}

    projects.push(project)

    return res.json(projects)
})

server.listen(3000)

