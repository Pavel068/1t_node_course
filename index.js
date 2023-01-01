const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yahz',
    database: 'social_network'
});

connection.query(
    'SELECT * FROM users WHERE balance > ?',
    [0],
    function(err, results) {
      console.log(results);
    }
);

const post  = {title: 'Hello MySQL', body: 'avsdvsdvsdv', author_id: 1};
const query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
  if (error) throw error;
});