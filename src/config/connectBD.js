// get the client

import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsBasic'
});

// simple query
// connection.query(
//   'SELECT * FROM `user` ',
//   function(err, results, fields) {
//     console.log('mysql')
//     console.log(results); // results contains rows returned by server
//     console.log(results[0]); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
export default connection;
