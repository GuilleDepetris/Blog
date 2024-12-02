//Cargas variables de entorno
require("dotenv").config();

//Importa express(es un framework de node)
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const cookieParser = require('cookie-parser'); 
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB = require('./server/config/db');

//Connect to DB
connectDB();

//Crea una aplicacion de express
const app = express(); //app es la instancia de tu aplicación, que manejará las rutas, middlewares y demás funcionalidades.
//Aca se define el puerto que tu app va a escuchar,
//si process.env.PORT esta definido se usa ese sino el puerto 5mil
const PORT = 5000 || process.env.PORT;
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
     mongoUrl: process.env.MONGODB_URI
  }),
  //cookie: {maxAge: new Date (Date.now() + (3600000) )}
}));

app.use(express.static("public"));

//templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));


//Usas el método listen para que tu aplicación empiece a escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
