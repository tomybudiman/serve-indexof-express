const express = require('express');
const serveIndex = require('serve-index');
const app = express();

app.get('/',(req, res) => {
  res.send('Server Run!');
});

app.use('/ftp', express.static('./public'), serveIndex('./public', {'icons': true}));

const listener = app.listen(process.env.PORT || '8000',() => {
  console.log(`Server started at port ${listener.address().port}`);
});
