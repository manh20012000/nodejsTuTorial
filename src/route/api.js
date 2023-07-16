import express from "express";
 import apiController from "../controller/apiController.js";

let router =express.Router();// khai báo  giúp express hiểu khai báo đươcngf link trên web 

// bước đầu
// const initWebRoute=(app)=>{
//     router.get('/', (req, res) => {
       
//     })
// bước sau

const initAPIRoute=(app)=>{
    router.get('/users',apiController.getAllUser );// method =gGET tuowng duowng RREAD data
    router.post('/createUser',apiController.createNewUser)// methob POST 
     router.put('/updateUser',apiController.updateUser)
     router.delete('/deleteUser/:id',apiController.deleteUser)
    return app.use('/api/v1/',router)
    //('/', cái này có thể thêm /abc ... để thêm tiền tố cho wed api( '/api/vesion',routet)
    
}
export default initAPIRoute;