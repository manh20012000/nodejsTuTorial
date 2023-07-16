import pool from "../config/connectBD.js";

let getAllUser=async(req,res)=>{
   const [rows,fields] = await pool.execute( 'SELECT * FROM `user` ')
      return res.status(200).json({
         message:'oki',
         data:rows
      })
      //hahahahha
}
let createNewUser = async(req,res)=>{
   // console.log("check req",req.body);
   //fistName,lastName,Email,Adress phair gioongs teen ben file index
   await pool.execute('insert into user(fistname,lastname,email,adress) values(?,?,?,?)',[fistname,lastname,email,adress])
    
   
   return res.status(200).json({
      message:'oki',
   
   })
}

let updateUser=async(req,res)=>{
 let {fistname,lastname,email,adress,id}=req.body;
 
   if(!fistname||!lastname||!email||!adress||!id){ // thêm dấu chấn than thí nếu mà cái đó bằng rong ,null,udifine thì thêm dấu chấm than là true 
      return res.status(200).json({
         message:'missing required params',
      
      })
     }
    await pool.execute('update user set fistname=?, lastname=?,email=?,adress=? where id=?',[fistname,lastname,email,adress,id]);

   return res.status(200).json({
      message:'oki',
   
   })
}
let deleteUser=async(req,res)=>{
   let userId=req.params.id;
   if(!userId){ // thêm dấu chấn than thí nếu mà cái đó bằng rong ,null,udifine thì thêm dấu chấm than là true 
      return res.status(200).json({
         message:'missing required params',
      
      })
     }


   await pool.execute('delete from user where id=?',[userId]);


   return res.status(200).json({
      message:'oki',
   
   })
}
export default {// expo để viết chạy nhìu phần tử cubgf lúc
   getAllUser, createNewUser,updateUser,deleteUser
}
// module.exports={
//     getAllUser
// }