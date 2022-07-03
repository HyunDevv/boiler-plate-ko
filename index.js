const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-Parser");
const { User } = require("./models/User");

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extened: true}));

//applicaion/json
app.use(bodyParser.json());

console.log("env : " + process.env.NODE_ENV);
console.log("mongoURI : " + config.mongoURI);
console.log("test : " + config.test);


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true
}).then(() => console.log('MongdDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가저오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})