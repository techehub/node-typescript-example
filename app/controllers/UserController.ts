import {Router, Request, Response, request, response } from 'express';
import {json} from 'body-parser';
const router : Router= Router()
const connectionUrl = 'mongodb://localhost:27017'

router.post ('/user', json(), (req: Request, response: Response)=>{
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


router.get('/user/:id',   (request , response)=>{


    var MongoClient = require('mongodb').MongoClient
    const ObjectId = require("mongodb").ObjectID;
    MongoClient.connect(connectionUrl, (error:any, client:any) => {
        if(error) {
            throw error;
         }
        let database = client.db('crm');
        let collection = database.collection("user");

        if (request.params.id.length==24){
            collection.findOne({"_id" : new ObjectId(request.params.id)}, 
            (err:any, res:any)=>{
                if (err){
                    response.send("Not found")
                }
                else {
                    console.log (res)
                    if (res ==null){
                        response.send("user does not exist")
                    }
                    else {
                        response.send(res)
                    }
                   
                }
                
        })
        }
        else {
            response.send("invalid id of the user")
        }       
    });
})


router.put('/user/:id',  json(), (request,response)=>{

    var MongoClient = require('mongodb').MongoClient
    const ObjectId = require("mongodb").ObjectID;
    MongoClient.connect(connectionUrl, (error:any, client:any) => {
     
        var query ={ "_id": new ObjectId(request.params.id) };
        var newvalues = { $set: request.body };

        let database = client.db('crm');
        let collection = database.collection("user");
        collection.updateOne(query, newvalues, (err:any, result:any)=>{

            if (err){
                console.log (err)
            }
            else {
                console.log (result)
                response.send (result)
            }
        })

    })
      
})





router.delete('/user/:id',   (request , response)=>{


    var MongoClient = require('mongodb').MongoClient
    const ObjectId = require("mongodb").ObjectID;
    MongoClient.connect(connectionUrl, (error:any, client:any) => {
        if(error) {
            throw error;
         }
        let database = client.db('crm');
        let collection = database.collection("user");

        if (request.params.id.length==24){
            collection.deleteOne({"_id" : new ObjectId(request.params.id)}, 
            (err:any, res:any)=>{
                if (err){
                    response.send("Not found")
                }
                else {
                    console.log (res)
                    if (res ==null){
                        response.send("user does not exist")
                    }
                    else {
                        response.send(res)
                    }
                   
                }
                
        })
        }
        else {
            response.send("invalid id of the user")
        }       
    });
})
export const UserController:Router = router;