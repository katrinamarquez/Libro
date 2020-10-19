const express = require("express")
const port = 3000
const app = express()

// const cors = require("cors")
// const bodyParser = require("body-parser")
// const postRouter = require("./routes/posts_routes")
const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));

//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
  layoutsDir: __dirname + '/views/layouts',
}));

  //Serves static files (we need it to import a css file)
app.use(express.static('public'))

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index'});
});
  



// const fs = require("fs")
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())


// app.use(cors())
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use("/posts", postRouter)

app.listen(port, () => {
	console.log(`Hackathon express app listening on port ${port}`)
})