const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://HyunDevv:abcd1234@boilerplate.brsg87f.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => console.log('MongdDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})