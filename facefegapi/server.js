const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
	user: [
		{
			id:'123',
			name:'John',
			email:'John@gmail.com',
			password:'cookies',
			entries:0,
			joined: new Date()
		},
		{
			id:'124',
			name:'sally',
			email:'sally@gamil.com',
			password:'bananas',
			entries:0,
			joined: new Date()
		}
	]
}

app.get('/', (req, res) =>{
	res.send(database.user);
})

app.get('/profile/:id', (req, res) =>{
	const {id} = req.params;
	let found = false;
	database.user.forEach((user) =>{
		if(user.id === id){
			found = true;
			return res.json(user);
		}
	});
	if(!found){
		res.json("User not found.")
	}
})

app.post('/image', (req, res) =>{
	const {id} = req.body;
	let found = false;
	database.user.forEach((user) =>{
		if(user.id === id){
			found = true;
			user.entries++;
			return res.json(user.entries);
		}
	});
	if(!found){
		res.json("User not found.")
	}
})

app.post('/register', (req, res) => {
	const {email, name, password} = req.body;
	database.user.push({
			id:'123',
			name:name,
			email:email,
			password:password,
			entries:0,
			joined: new Date()
		})
	res.json(database.user[database.user.length - 1])
})

app.post('/signin',(req, res) => {
	if(req.body.email === database.user[0].email &&
		req.body.password === database.user[0].password){
		res.json('success');
	} else{
		res.status(400).json('Error login');
	}
	res.json("singin");
})

app.listen(3000, () =>{

})
