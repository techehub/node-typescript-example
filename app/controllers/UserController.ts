import {Router, Request, Response } from 'express';
import {json} from 'body-parser';
const router : Router= Router()
const connectionUrl = 'mongodb://localhost:27017'

router.post ('/test', json(), (req: Request, response: Response)=>{
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect(connectionUrl, (error:any, client:any) => {
        if(error) {
            throw error;
         }
        let database = client.db('crm');
        let collection = database.collection("user");
        collection.insert (req.body, (err:any, res:any)=>{
            if(err){
                console.log('insertion failed',err)
                response.send ("error")
            }
	        else{
                console.log('successfully inserted', res)
                response.send ("success")
            }
    	    client.close()
        })
    });

});

export const UserController:Router = router;