import connection from "../config/connectBD.js"
let getHomepage =(req,res)=>{
    // sử lý logic  vơius database
    let data=[];
    connection.query(
        'SELECT * FROM `user` ',
        function(err, results, fields) {
          console.log('mysql')
          console.log(results); // results contains rows returned by server
         // console.log(results[0]); // results contains rows returned by server
          // console.log(fields); // fields contains extra meta data about results, if available
          data=results.map((row)=>{return row})
        //   console.log('checkdata',data);
        return  res.render('./index.ejs',{dataUser: JSON.stringify(data)})
        }  
      );
      console.log('checkdata',JSON.stringify(data));
   
   
}

 export default {// expo để viết chạy nhìu phần tử cubgf lúc
    getHomepage
}