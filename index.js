const axios = require('axios');
const fs = require('fs');
const path = require('path');
const http = require('http');

const { Sequelize, DataTypes, Op } = require('sequelize');

// async function read(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, {
//             encoding: 'utf-8'
//         }, (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         })
//     });
// }

; (async () => {
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    // fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data), {
    //     encoding: 'utf8'
    // }, err => {
    //     if (err) throw err;
    //     console.log(`Файл записан!`);
    // });

    // console.log(123);

    // const data = await read('data.json');
    // console.log(data);

    // const server = http.createServer((req, res) => {
    //     if (req.url === '/users') {
    //         if (req.method === 'get') {

    //         }
    //     } else if (req.url === '/home') {

    //     } else {

    //     }
    // })
    // server.listen(5555);

    const sequelize = new Sequelize('social_network', 'root', 'yahz', {
        host: 'localhost',
        dialect: 'mysql'
    });


    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'posts',
        timestamps: false
    });

    await Post.sync({
        alter: true,
        force: false
    });

    const posts = await Post.findAll({
        where: {
            id: {
                [Op.gte]: 1
            }
        },
        order: [['id', 'DESC']],
        offset: 0,
        limit: 10
    })

    console.log(posts);

})();