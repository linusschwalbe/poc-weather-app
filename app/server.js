
require('dotenv').config({ silent: true });

const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const handlebars = require('express-handlebars');

const forecast = require(`${__dirname}/api/forecast`)();
const location = require(`${__dirname}/api/location`)();

const app = express();

const port = process.env.NODE_ENV || 8080;
const assets = path.join(__dirname, './../dist/');

app.engine('handlebars',
  handlebars({
    defaultLayout: 'index',
    layoutsDir: './html'
  })
);

app.set('views', './html');
app.set('view engine', 'handlebars');

app.use('/api', forecast.router);
app.use('/api', location.router);

app.use((req, res, next) => {
  if (req.url.substr(-1) === '/' && req.url.length > 1) {
    return res.redirect(301, req.url.toLowerCase().slice(0, -1))
  }
  next();
});

// app.use(favicon(`${assets}/favicon.ico`));
app.use(express.static(assets, { maxAge: 2592000 }));

app.use((req, res, next) => {
  res.status(200).render('index', {});
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
