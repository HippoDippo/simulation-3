require('dotenv').config();
const express = require('express')
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , cors = require('cors')
  , massive = require('massive');;

const PORT = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const SECRET = process.env.SECRET

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true
}));

app.get('/home', (req, res) => {
  res.status(200).send('Success!');
});
app.post();
app.put();
app.delete();

massive(CONNECTION_STRING)
.then(db => {
  app.set('db', db);

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});