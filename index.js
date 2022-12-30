const fs = require('fs');
const path = require('path');
// const axios = require('axios');
const http = require('http');

// fs.writeFile('1.txt', 'Hello !', 'utf-8', (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log(`Done!`);
// })

// fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// })

// ;(async () => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');


//     fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {
//         if (err) {
//             throw err;
//         }

//         console.log(`Done!`);
//     })
// })();

http
    .createServer((request, response) => {
        response
            .setHeader("Content-Type", "text/html; charset=utf-8;");

            if (request.url === '/') {
                response.write('Мы в корне!');
                response.end();
            } else if (request.url === '/json') {
                fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8', (err, data) => {
                    if (err) {
                        throw err;
                    }

                    response.write(data);
                    response.end();
                })
            }
    })
    .listen(3000);