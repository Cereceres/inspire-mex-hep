const publications = require('./lib/request.js')
const twit = require('./lib/bot.js')
const createParameters = require('./lib/create-parameters.js')




publications(function(err, data){
    if(err) return console.log(err);
    JSON.parse(data)
        .forEach((publication) => twit(createParameters(publication))                
        )
   })
   
