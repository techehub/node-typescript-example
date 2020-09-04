import express from "express";
import {WelcomeController, RegistrationController} from './controllers';


const app: express.Application = express();
const port: number = 3000;

app.use('/welcome', WelcomeController);
app.use ('/user', RegistrationController)

app.listen(port, ()=>{
	console.log(`Listening at http://localhost:${port}/`);
})
