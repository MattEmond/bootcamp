/*jshint esversion: 6 */

const pg = require("pg");
const settings = require("./settings");

const arg = process.argv.slice(2);

const knex = require('knex')
({
  client   : "pg",
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});


knex.select("*").from('famous_people')
// .where('last_name', '=', 'Lincoln')
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
});

const insert = (first_name, last_name, birthdate) => {
  knex.insert({first_name : first_name, last_name : last_name, birthdate : birthdate})
  .into('famous_people').returning('*').then((result) => {console.log(result); knex.destroy()})
};



insert(arg[0], arg[1], arg[2]);