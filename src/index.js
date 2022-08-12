const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const { default:mongoose}=require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sonupk:1HivF6DXHWanVcYu@cluster0.vtjazgb.mongodb.net/Sonu52-DB?retryWrites=true&w=majority"
,{
    useNewUrlParser: true
}

)
.then( () => console.log("Mongodb is now Connected"))
.catch(err => console.log(err))





app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
