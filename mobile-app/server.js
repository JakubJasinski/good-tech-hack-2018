let express = require("express")

const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index')
})

// Log all /GET, /POST, /PUT request
app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.listen(8081, () => {
    console.log('listening on 8081')
})

