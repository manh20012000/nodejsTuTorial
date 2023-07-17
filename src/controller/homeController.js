import pool from "../config/connectBD.js";
import multer from "multer";

let getHomepage =async(req,res)=>{
    // sử lý logic  vơius database
    let data=[];
    // connection.query(
    //     'SELECT * FROM `user` ',
    //     function(err, results, fields) {
    //       console.log('mysql')
    //       console.log(results); // results contains rows returned by server
    //      // console.log(results[0]); // results contains rows returned by server
    //       // console.log(fields); // fields contains extra meta data about results, if available
    //       data=results.map((row)=>{return row})
    //       // console.log('checkdata',data);
    //     return  res.render('./index.ejs',{dataUser: data,test:'balbal'})//obj dataUser: data, key value
    //     }  
    //   );
      // console.log('checkdata',data); cái này bằng rồng vì cái này là bất đồng bộ nên nó chạy trước khi trar 
      // kết quả
   const [rows,fields] = await pool.execute( 'SELECT * FROM `user` ')
     // destruwcring js 
     let check=await pool.execute( 'SELECT * FROM `user` ');
    //  console.log('cjeijcn1'+check); // hieenr thij taat ca
    //  console.log('hsdshbshdv2'+check[0]); // hieenr thij 1 cais 
   return  res.render('./index.ejs',{dataUser: rows,test:'balbal'})
}



let getDetailPage = async (req,res)=>{
  let idUser =req.params.id;   // router.get('/detail/user/:id', vi datw ten bieen laf :id neen parames.id
  let users =await pool.execute('SELECT * FROM user  where `id`=? ',[idUser])// llap gep tung gtri cua mang vao dau ?
  console.log('check req parms : ',req.params)
   return res.send(JSON.stringify(users[0]))
}

let createNewUser= async(req,res)=>{
  console.log("check req",req.body);
  //fistName,lastName,Email,Adress phair gioongs teen ben file index
  let {fistname,lastname,email,adress}=req.body;
  await pool.execute('insert into user(fistname,lastname,email,adress) values(?,?,?,?)',[fistname,lastname,email,adress])
 return res.redirect('/')// quay veef trang home
}

let deleteuser=async(req,res)=>{
  let userId=req.body.userId;
  await pool.execute('delete from user where id=?',[userId]);
    // return res.send(`hele delete ${req.body.userId}`) thư nghiệm 
    return res.redirect('/')// quay veef trang home
}
 let getEditPage=async (req,res)=>{

  let id=req.params.id;
let [user]= await pool.execute('select*from user where id=?',[id])
    // return res.render(JSON.stringify(user))
     console.log(user[0])
    return res.render('update.ejs',{dataUser:user[0]});   // chuyeenr doi obj key value a <-b
  }

let postUpdateUser=async (req,res)=>{

  let {fistname,lastname,email,adress,id}=req.body;
  await pool.execute('update user set fistname=?, lastname=?,email=?,adress=? where id=?',[fistname,lastname,email,adress,id]);
  //  return res.send('hele');
  return res.redirect('/')// quay veef trang home
}

let getUploadfile =async(req,res)=>{
     return res.render("uploadFile.ejs");

}




const upload=multer().single('profile_pic');

let handleUploadFile= async(req,res)=>{
       // 'profile_pic' is the name of our file input field in the HTML form
  console.log(req.file);
      //  let upload = multer({ storage: storage, fileFilter:imageFilter }).single('profile_pic');

  upload(req, res, function(err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    else if (err instanceof multer.MulterError) {
        return res.send(err);
    }
    else if (err) {
        return res.send(err);
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/uploadFile">Upload another image</a>`);
});
}

 export default {// expo để viết chạy nhìu phần tử cubgf lúc
    getHomepage,getDetailPage,createNewUser,deleteuser,getEditPage,postUpdateUser,getUploadfile,handleUploadFile
}