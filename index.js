const express = require('express');

const app = express();
app.get('/',function(req,res){
    res.send('hola gente de express');

});
app.listen('3000');
console.log('listen on port 3000');