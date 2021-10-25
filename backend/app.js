var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),

mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var databaseHost = process.env.DATABASE_SERVER;
console.log(`Database_url = mongodb://${databaseHost}:27017/mean`);
mongoose.connect(`mongodb://${databaseHost}:27017/mean`, { useNewUrlParser: true,  serverSelectionTimeoutMS: 100000 }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const userRoute = require('./routes/user.route');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});