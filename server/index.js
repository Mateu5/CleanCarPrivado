const express = require('express');
const { conexao, User } = require('./src/banco-de-dados/connection');
const passport = require('passport');
const session = require('express-session');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config()




const { register } = require('./src/controller/RegisterController');
const { login } = require('./src/controller/LoginController');
const { resetSenha, conferenceCode } = require('./src/services/resetPasswordService');

const app = express();
const config = require('./config/app.js');
app.use( express.json() );


const middlewareAuthentication = function(req, res, next){

  const token = req.header.authorization;

  if(!token){
    return res.status(401).json({ mensagem: "Token ausente"});
  }

  const passwordToken = config.jwt_secret;

  jwt.verify( token, passwordToken, (err, decode) => {
    if(err){
      return res.status(401).json({ mensagem: "Token invalid"});
    }else{
      console.log( decode );
      return next();
    }
  })
}

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401)
}

passport.use(passport.initialize());
app.use(passport.session())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  //Permitir acesso de qualquer origem
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true
  },
    function(request, accessToken, refreshToken, profile, done ){
      done(null,profile);
    }
));

passport.serializeUser((user,done) =>{
  done(null,user)
});

passport.deserializeUser((user,done) => {
  done(null,user)
});

app.get('/auth/google',
  passport.authenticate('google', { scope: 
  ['email', 'profile'],})
)

app.get('/auth/google/callback',
    passport.authenticate ('google', {
      successRedirect: '/auth/protected',
      failureRedirect: '/auth/google/failure',
    })
);

app.get('/auth/protected',isLoggedIn,(req,res)=>{
  let name = req.user.displayName;
  res.send(`Hello ${name}`);
  
});

app.get('/auth/google/failure',isLoggedIn,(req,res)=>{
  res.send("hallo there")
});

app.post("/register", register);
app.post("/login", login);
app.post("/resetPassword", resetSenha);
app.post("/confereCode", conferenceCode)









const serverPort = 3000

app.listen(serverPort, function(){
    console.log("Servidor escutando na porta " + serverPort );
});