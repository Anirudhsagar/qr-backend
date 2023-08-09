const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const route = require("./qrRoutes")

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://roushan915520:WyHA53wgBezHddwj@cluster0.5mlxslz.mongodb.net/Rohan-QrCode", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});