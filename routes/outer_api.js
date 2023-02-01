const express = require('express');
const outerApi = express.Router();

const { getAllPosts, getOnePost } = require('../controllers/PostsController');

const has_admin_rules = require('../middleware/has_admin_rules');

innerApi.post('/posts', has_admin_rules, getAllPosts);
innerApi.patch('/posts/:id', has_admin_rules, getOnePost);

module.exports = outerApi;