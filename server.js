const express = require('express'); 
const app = express();
const path = require('path'):

app.use(express_static(__dirname + '/dist'));
app.listen(proces.env.PORT || 8080);


//padlocatie

app.get('/*' , function(req, res){

	res.sendFile(path.join(__dirname + 'dist/index.html'));
})
console.log('hoi!');