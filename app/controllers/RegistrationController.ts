import {Router, Request, Response } from 'express';
import {json} from 'body-parser';

const router : Router= Router()

router.post ('/register', json(), (req: Request, res: Response)=>{
   let data : IUser  =  req.body
   res.send(JSON.stringify(data))
   
})

interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

export const RegistrationController:Router = router;