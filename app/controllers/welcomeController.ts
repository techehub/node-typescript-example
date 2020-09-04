
import {Request, Response, Router} from "express";
const router:Router = Router();

router.get('/', (req:Request, res:Response) => {
    res.send('Hello world!!!!!!!');
 });
 

export const WelcomeController:Router = router;
