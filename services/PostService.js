const Post = require('../models/Post');

class PostService {
    async getAll() {
        const items = await Post.getAll();
        for (const item of items) {
            // Какая-то логика
        }

        return [];
    }

    async getOne(id) {
        return await Post.getOne(id);
    }
}

module.exports = PostService;