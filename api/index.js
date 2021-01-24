const routes = require('./router')

const express = require('express')

const app = express()
const cookieParser = require('cookie-parser');
const PORT = 8000

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')));

routes.forEach(route => {
  // app.get('/user/:id', controller1, controller2);
  app[route.method](route.path, ...route.handlers)
})

app.listen(PORT)
console.log(`Backend server start at ${PORT}`)
