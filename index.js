const express = require('express')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')

const AuthMiddleware = require('./auth/index')
const CREDENTIALS  = require('./credentials/index')

const app = express()
const port = 3000

admin.initializeApp({
    credential: admin.credential.cert(CREDENTIALS),
    databaseURL: "https://fir-tutorial-1d625.firebaseio.com"
});
console.log(`Firebase initialized`);
app.use(bodyParser.json())

app.use(AuthMiddleware)

app.get('/', (req, res) => res.json({message:'Hello World!'}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))