const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Express server is up on port', port));
