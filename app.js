 var express = require('express');
 var bodyParser = require('body-parser');
 var path = require('path');
 var cors = require('cors');
 var index = require('./routes/index');
 var friends = require('./routes/friends');



 const app = express();

// View Engine
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');
 app.engine('html', require('ejs').renderFile);

 // Set Static Folder
 app.use(express.static(path.join(__dirname, 'client')));

// Cors Middleware
app.use(cors());

 // Body Parse Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', friends);

app.listen(3000, function(){
	console.log('Server Started On Port 3000');
});

