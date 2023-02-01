import http from 'http'
import express from 'express'
import ip from 'ip'
import cors from 'cors'

const app = express()
const server = http.createServer(app)
console.log(ip.address())
app.use(express.json())
app.use(cors())

const color = ["red","blue","green","purple"]
const chosencolor = color[0]
const resultcolor = "red"

app.get('/',(req, res) => {
    res.send({"chosencolor":chosencolor,"resultcolor":resultcolor})
})
server.listen(3000, () => {
    console.log("F.D.plume")
})