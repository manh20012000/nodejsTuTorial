import express from "express";
 import homeController from '../controller/homecontroller.js';

let router =express.Router();// khai báo  giúp express hiểu khai báo đươcngf link trên web 

// bước đầu
// const initWebRoute=(app)=>{
//     router.get('/', (req, res) => {
       
//     })
// bước sau

const initWebRoute=(app)=>{
    router.get('/',homeController.getHomepage );
    router.get('/detail/user/:id',homeController.getDetailPage)
    return app.use('/',router)
    //('/', cái này có thể thêm /abc ... để thêm tiền tố cho wed api( '/api/vesion',routet)
    
}
export default initWebRoute;