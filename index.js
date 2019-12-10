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
        tasks:['i dont know', 'study']
    }
]


let reqNumber = 0

function projectAlreadyExists( req, res, next) {
    const { id } = req.params
    const project = projects.find( p => p.id == id)

    if(!project){
        return res.status(400).json({ error: 'Project does not exists'})
    }

    return next()
}

server.use( (req, res, next) => {
    console.log('Request')
    console.log(`Method: ${req.method}, URL: ${req.url}`)
    reqNumber++
    console.log(`ReqNumber: ${reqNumber}`)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

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

server.put('/projects/:id', projectAlreadyExists, (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const project = projects.find( p => p.id == id)

    project.title = title

    return res.json(projects)

})

server.put('/projects/:id/task', projectAlreadyExists, (req, res) => {
    const { id } = req.params
    const { task } = req.body

    const project = projects.find( p => p.id == id)

    project.tasks.push(task)

    return res.json(projects)
})

server.delete('/projects/:id', projectAlreadyExists, (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex(p => p.id == id);

    projects.splice(projectIndex, 1);
  
    return res.json(projects)
});


server.listen(3000)

