const express = require('express');
const innerApi = express.Router();

const { getAllPosts, getOnePost } = require('../controllers/PostsController');

const auth = require('../middleware/auth');

innerApi.get('/posts', auth, getAllPosts);
innerApi.get('/posts/:id', auth, getOnePost);

module.exports = innerApi;