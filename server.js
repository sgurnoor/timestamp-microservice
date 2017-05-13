var express = require("express");
var moment = require("moment");
var path = require("path");
var app = express();

app.get('/timestamp', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/timestamp/:date', function (req, res) {
    var date = moment(req.params.date, "MMMM D, YYYY");
    if(!date.isValid()) date = moment(req.params.date, "X");
    if(date.isValid()) res.send({ unix: Number(date.format("X")), natural: date.format("MMMM D, YYYY")});
    else res.send({ unix: null, natural: null});
});

var port = process.env.PORT || 8080;
app.listen(8080, function () {
  console.log('Timestamp Microservice app listening on port ' + port + '!');
})