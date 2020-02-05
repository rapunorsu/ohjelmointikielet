var express = require('express');
var router = express.Router();

const config = require('../utils/config');
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/', (request, response, next) => {

    const body = request.body
    console.log(body)
    const saltRounds = 10
   
    bcrypt.hash(body.password, saltRounds)
      .then((passwordHash) => {
        const user = {
          username: body.username,
          name: body.name,
          password: passwordHash
        }
        console.log(user)
        knex('users').insert(user)
        .then(() => {
          console.log("insert ok")
          response.status(204).end()
        })
        .catch((err) => { 
          console.log(err); 
          response.status(500).json(
            {error: "database error in login"}
          )
         })
    })
   
  });

  module.exports = router;