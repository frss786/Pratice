const express = require('express')

const app = express();
app.use(exress.static(__dirname + '/public '))
app.use((req, res, next) => {
	console.log("hello");
	next();
});

app.get('/',(req, res) => {
	const user = {
		name: 'you',
		test: 'who'

	}
	res.send(user);
})

app.listen(3000);