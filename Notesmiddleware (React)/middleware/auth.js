const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    console.log(authorization);
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

const isAuthenticated = (request, response, next) => {
        const token = getTokenFrom(request);

        if(!token){
            return response.status(401).json( {error: 'token missing'});
        }

        const decodedToken = jwt.verify(token, config.SECRET);
        console.log('decoded: ', decodedToken);

        if(!decodedToken || !decodedToken.id){
            return response.status(401).json( {error: 'token invalid'});
        }

        response.locals.auth = { userId: decodedToken.id }; //uusi
        next()      //uusi
}

module.exports = isAuthenticated;