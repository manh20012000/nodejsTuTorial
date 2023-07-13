import express from 'express';
import configViewEngine from './config/viewEngine.mjs';
import initWebRoute from './route/web.js';

const app = express();
const port = 3000
// set up view engine 
configViewEngine(app);
// innit wed router
 initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// c2 dùng trực tiếp với này và cấu hình pack.json bỏ type modun đi 
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

