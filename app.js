const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const postRouter = require("./routes/posts_routes")

const port = 3000

const app = express()
// app.use(cors())
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use("/posts", postRouter)

app.listen(port, () => {
	console.log(`Hackathon express app listening on port ${port}`)
})