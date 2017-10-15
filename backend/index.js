const express = require("express")
const app = express()
const request = require("request")
var bodyParser = require('body-parser')


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  request("https://time.siswadi.com/pray/Jakarta", (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
    }
    res.send({
      message: "GET",
      content: JSON.parse(body)
    })
  })
})


app.listen(3000, () => {
  console.log("RUNNING ON localhost:3000")
})