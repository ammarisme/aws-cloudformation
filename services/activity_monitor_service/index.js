var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var users =  [];
var messages =[] ;

app.use(function (req, res, next) {
    var allowedOrigins = ['https://localhost:4200', 'http://localhost:5000'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', function(req, res){
    res.send("");
});

app.get("/messages" , function(req, res){
    res.send(messages)
})

app.get('/connectedusers', function(req, res){
    res.send(users);
});

io.on('connection',socket=> {
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('register',data => {
        users.push({
            token : socket.client.id,
            name : data
        });

        console.log(users);

        io.emit('usersconnected', users);
    });

    socket.on('sendLogMessage', function(message){
        /* var logMessage = JSON.parse(message);
         logMessage.push({userToken: socket.client.id});*/
        console.log(message);
        fs.appendFile(__dirname +'/log.json', ","+ message, (err) => {
            if (err) throw err;
        });
    });


    socket.emit('token', socket.client.id);
});

function removeFunction (myObjects,prop,valu)
{
    return myObjects.filter(function (val) {
        return val[prop] !== valu;
    });

}

var server = http.listen(3000, function(){
    console.log('listening on *:3000');
});