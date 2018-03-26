const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		title: 'Z-TeX',
		brandName: '<h1 class="brand wow slideInDown" data-wow-delay="0.3s" data-wow-duration="1.5s">Z-TeX</h1>',
		mensajeIndex: '<p class="subheading wow slideInDown" data-wow-delay="0.3s" data-wow-duration="3s">Design &amp; development of amazing Web Apps</p>',
		quienes: '<p class="titulo-quienes">Who we are</p>'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});