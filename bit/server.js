const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

const port = 3000;
app.listen(port, function() {
	console.log('Affirmative');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.post('/calculate', (req, res) => {
	const bitrate = req.body['bitrate'];
	const duration = req.body['duration'];
	console.log(bitrate);
	res.render('well', {
		'bitrate': bitrate,
		'duration': duration,
		'result': bitrate * duration
	})
	
})


