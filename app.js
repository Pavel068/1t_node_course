const express = require('express');
const { init, User, Post } = require('./models/init');

const app = express();

app.get('/', async (req, res) => {
    const items = await User.findAll({
        include: Post
    });
    return res.json(items);
});

app.get('/posts/:id', async (req, res) => {
    const items = await Post.findOne({
        where: {
            id: req.params.id
        },
        include: User
    });
    return res.json(items);
});

app.listen(3000, async () => {
    await init();
});