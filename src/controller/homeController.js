import pool from "../config/connectBD.js";
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
   return res.send(JSON.stringify(users))
}
 export default {// expo để viết chạy nhìu phần tử cubgf lúc
    getHomepage,getDetailPage
}
