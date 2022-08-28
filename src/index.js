const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment=require('moment')
const time=moment();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sonupk:1HivF6DXHWanVcYu@cluster0.vtjazgb.mongodb.net/sonu-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(
    function (req,res,next){
        console.log("global middleware is here")
        console.log(time.format('YYYY,MM,DD'))
        console.log(time.format('h:mm:ss'))
        console.log(req.ip)
        console.log(req.originalUrl)
        next()
    }
)







app.use('/', route);

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        res.send({msg:"done"})
  }
  );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
