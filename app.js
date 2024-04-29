const http = require('node:http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const boolParser = require('express-query-boolean');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');

const { info, error } = require('./utils/logger');

const User = require('./models/user')

const app = express();

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
  maxAge: 600,
}));

app.set('trust proxy', true);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Configure Morgan
morgan.token('status-color', (req, res) => {
  const status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent)
    ? res.statusCode
    : undefined;

  let color = 0; 
  if (status >= 500) {
    color = 31; // red
  } else if (status >= 400) {
    color = 33; 
  } else if (status >= 300) {
    color = 36; 
  } else if (status >= 200) {
    color = 32; 
  }

  return `\x1b[${color}m${status}\x1b[0m`;
});
app.use(morgan((tokens, req, res) => (
  `${chalk.blue(tokens.method(req, res))} ${chalk.green(tokens.url(req, res))} - ${tokens['status-color'](req, res)} ${chalk.red(tokens['response-time'](req, res))}`
)));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(boolParser());

// DB connection
const db = require("./config/db.config");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    info("Connected to the database!");
  })
  .catch(err => {
    error("Cannot connect to the database!", err);
    process.exit();
  });

// Routing
const routes = require('./routes/index');
app.use('/api', routes);

// Launch
const httpServer = http.createServer(app);
httpServer.listen(app.get('port'), () => {
  info('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  info('Press CTRL-C to stop\n');
});

app.get('/',(request,response)=>{
  // console.log('Request--->',request);
  return response.status(201).send('Welcome to Roid');
})

// app.post('/users',async (request,response) => {
//   // console.log('users request',request);
//   try{
//       if(
//           !request.body.email ||
//           !request.body.userName ||
//           !request.body.password ||
//           !request.body.publicGroupObject ||
//           !request.body.aboutYourself ||
//           !request.body.dob ||
//           !request.body.weight ||
//           !request.body.height ||
//           !request.body.bodyFat
//       ){
//           return response.status(400).send({message:'Send all required fields'});
//       }

//       const newUser = {
//           email: request.body.email,
//           userName: request.body.userName,
//           password: request.body.password,
//           publicGroupObject: request.body.publicGroupObject,
//           aboutYourself: request.body.aboutYourself,
//           dob: request.body.dob,
//           weight: request.body.weight,
//           height: request.body.height,
//           bodyFat: request.body.bodyFat,
//       }

//       const user = await User.create(newUser);
//       return response.status(201).send(user);
  
//   } catch(error){
//       console.log('/user',error.message);
//       response.status(500).send({message: error.message})
//   }

// });