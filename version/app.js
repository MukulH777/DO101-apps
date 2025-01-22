const express = require('express');
app = express();

var response;

ap.get('/', function (req, res) {

    response = 'This is version 1 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
