const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const Authors = require('./models/Authors');

const { getAuthors } = require('./controllers/AuthorsController');

app.get('/authors', getAuthors)

app.get('/authors/:id', async (req, res) => {
    const author = await Authors.findOne({
        where: {
            id: req.params.id
        }
    })
    return res.status(200).json(author)
})
app.post('/authors', async (req, res) => {
    try {
        const author = await Authors.create(req.body);
        return res.status(201).json(author);
    } catch (e) {
        console.error(e);
        return res.status(400).json({
            message: 'Bad request'
        });
    }
})

app.listen(port, async () => {
    await Authors.sync({
        alter: true
    })
})