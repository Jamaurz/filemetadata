var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
var multer = require('multer')
var path = require('path')
var app = express()
var upload = multer({ dest: 'uploads/' })
 

app.use(cors())
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '/public')))

app.post('/upload', upload.single('file'), function(req, res, next) {
    return res.json({'size': req.file.size});
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening')
})