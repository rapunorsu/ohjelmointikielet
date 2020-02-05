var express = require('express');
var router = express.Router();

const config = require('../utils/config');
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/', (request, response, next) => {
    //hae tähän login koodi
        const body = request.body
        console.log(body)
       
        knex.from('users').select("*").where('username', '=', body.username)
          .then((user) => {
            console.log(user)
            if (user.length === 0){
                return response.status(401).json(
                  {error: 'invalid username or password'}
                )
              }
    
          
          const tempUser = user[0];
          bcrypt.compare(body.password, tempUser.password)
          .then((passwordCorrect) => {
            if(!passwordCorrect){
              console.log("salasana väärin")
              return response.status(401).json(
                {error:"invalid username or password"}
              )
            }
            console.log("salasana oikein")
            const userForToken ={
              username:tempUser.username,
              id:tempUser.id
            }
            const token = jwt.sign(userForToken,config.SECRET)
       
            console.log(token)
       
            response
              .status(200)
              .send ({token,username: tempUser.username, name:tempUser.name})
          })
        })
        .catch((err) => { 
            console.log(err); 
            response.status(500).json(
              {error: "database error in get"}
            )
          })
        });

module.exports = router;
