class Post {
    constructor({title, body, author_id}) {
        this.title = title;
        this.body = body;
        this.author_id = author_id;
    }

    get(field) {
        return this[field];
    }

    set(field, value) {
        return this[field] = value;
    }

    async findAll() {
        return [];
    }

    async findOne() {
        return {};
    }
}

module.exports = Post;