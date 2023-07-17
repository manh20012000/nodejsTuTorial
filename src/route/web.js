// import express from "express";
//  import homeController from '../controller/homecontroller.js';
// import multer from "multer";
// import path from "path";

//  var appRoot = require('app-root-path');

// let router =express.Router();// khai báo  giúp express hiểu khai báo đươcngf link trên web 

// // bước đầu
// // const initWebRoute=(app)=>{
// //     router.get('/', (req, res) => {
       
// //     })
// // bước sau
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         // cb(null, appRoot+'/src/public/image/');
//         console.log("d,sd"+cb);
//     },
  
//     // By default, multer removes file extensions so let's add them back
//     filename: function(req, file, cb) {
      
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
//   const imageFilter = function(req, file, cb) {
//     // Accept images only
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Only image files are allowed!';
//         return cb(new Error('Only image files are allowed!'), false);
//     }
//     cb(null, true);
//   };

// let upload=multer({storage: storage, fileFilter:imageFilter })

// const initWebRoute=(app)=>{
//     router.get('/',homeController.getHomepage );
//     router.get('/detail/user/:id',homeController.getDetailPage)
//     router.post('/create_newUser',homeController.createNewUser);
//     router.post('/delete-user',homeController.deleteuser);
//     router.get('/edit-user/:id',homeController.getEditPage)
//     router.post('/actionUser',homeController.postUpdateUser)
//       router.get('/uploadFile',homeController.getUploadfile);
//       router.post('/upload-profile-pic',upload.single('profile_pic'),homeController.handleUploadFile);
//     return app.use('/',router)
//     //('/', cái này có thể thêm /abc ... để thêm tiền tố cho wed api( '/api/vesion',routet)
    
//}
// export default initWebRoute;

 //import * as controller from '../controllers/homeController.js';
 import express from 'express';
 import homeController from '../controller/homecontroller.js';
 import multer from 'multer';
 import path from 'path';
 import appRoot from 'app-root-path';
 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     console.log('checking appRoot path: ', appRoot);
     cb(null, appRoot + '/src/public/image/');
   },
   filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   },
 });
 
 const imageFilter = function (req, file, cb) {
   if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
     req.fileValidationError = 'Only image files are allowed!';
     return cb(new Error('Only image files are allowed!'), false);
   }
   cb(null, true);
 };
 
 const upload = multer({
   storage: storage,
   fileFilter: imageFilter,
 });
 
 const router = express.Router();
 const initWebRoute = (app) => {
   router.get('/',homeController.getHomepage );
     router.get('/detail/user/:id',homeController.getDetailPage)
     router.post('/create_newUser',homeController.createNewUser);
     router.post('/delete-user',homeController.deleteuser);
     router.get('/edit-user/:id',homeController.getEditPage)
     router.post('/actionUser',homeController.postUpdateUser)
       router.get('/uploadFile',homeController.getUploadfile);
       router.post('/upload-profile-pic',upload.single('profile_pic'),homeController.handleUploadFile);
     return app.use('/',router)
 
 };
 
 export default initWebRoute;
 