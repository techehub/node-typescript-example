import express from "express";
import {WelcomeController, RegistrationController, UserController} from './controllers';


const app: express.Application = express();
const port: number = 3000;

app.use('/welcome', WelcomeController);
app.use ('/register', RegistrationController)
app.use ('/user', UserController)

app.listen(port, ()=>{
	console.log(`Listening at http://localhost:${port}/`);
})
