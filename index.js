const express = require('express');
const app = express();

//route handler
//get incoming http method
//
app.get('/', (req, res) => {
  res.send({hi: 'theeeee'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
