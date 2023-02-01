const PostService = require('../services/PostService');
const instance = new PostService();

async function getAllPosts(req, res) {
    const items = await instance.getAll();
    return res.json(items);
}

async function getOnePost(req, res) {
    const item = await instance.getOne(req.query.id);
    return res.json(item);
}

module.exports = { getAllPosts, getOnePost };